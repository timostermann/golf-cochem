import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  Children,
  isValidElement,
  cloneElement,
  forwardRef,
  type ReactNode,
  type ReactElement,
  type KeyboardEvent,
  type ForwardRefRenderFunction,
  type ComponentPropsWithoutRef,
} from "react";
import cn from "classnames";

type TabsContextType = {
  activeTab: number;
  setActiveTab: (index: number) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

type TabsProps = {
  children: ReactNode;
  defaultIndex?: number;
};

const TabsRoot = ({ children, defaultIndex = 0 }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultIndex);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="w-full">{children}</div>
    </TabsContext.Provider>
  );
};

type TabListProps = ComponentPropsWithoutRef<"div">;

const TabList = ({ children, className, ...props }: TabListProps) => {
  const context = useContext(TabsContext);
  if (!context)
    throw new Error("Tabs.List must be used within a Tabs component");

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeTabStyle, setActiveTabStyle] = useState({ left: 0, width: 0 });
  const [measurementsReady, setMeasurementsReady] = useState(false);

  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, Children.count(children));
  }, [children]);

  useEffect(() => {
    const activeTabElement = tabRefs.current[context.activeTab];
    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      setActiveTabStyle({ left: offsetLeft, width: offsetWidth });
      setMeasurementsReady(true);
    }
  }, [context.activeTab, children]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent, index: number) => {
      const tabCount = Children.count(children);
      let newIndex: number;

      switch (event.key) {
        case "ArrowRight":
          newIndex = (index + 1) % tabCount;
          break;
        case "ArrowLeft":
          newIndex = (index - 1 + tabCount) % tabCount;
          break;
        case "Home":
          newIndex = 0;
          break;
        case "End":
          newIndex = tabCount - 1;
          break;
        default:
          return;
      }

      event.preventDefault();
      tabRefs.current[newIndex]?.focus();
      context.setActiveTab(newIndex);
    },
    [children, context],
  );

  return (
    <div
      role="tablist"
      aria-label="Tab Selection"
      className={cn(
        "relative flex w-fit flex-row rounded-lg border border-gray-200 bg-gray-100",
        className,
      )}
      {...props}
    >
      {measurementsReady && (
        <div
          className="absolute bottom-1 top-1 rounded-lg bg-white shadow-md transition-[left,width] duration-300 ease-out"
          style={{
            left: activeTabStyle.left,
            width: activeTabStyle.width,
          }}
        />
      )}
      {Children.map(children, (child, index) => {
        if (isValidElement<TabProps>(child)) {
          return (
            <Tabs.Tab
              key={index}
              isActive={context.activeTab === index}
              onClick={() => context.setActiveTab(index)}
              onKeyDown={(e: KeyboardEvent) => handleKeyDown(e, index)}
              tabIndex={context.activeTab === index ? 0 : -1}
              id={`tab-${index}`}
              aria-controls={`tabpanel-${index}`}
              ref={(el: HTMLButtonElement | null) => {
                tabRefs.current[index] = el;
              }}
            >
              {child.props.children}
            </Tabs.Tab>
          );
        }
        return child;
      })}
    </div>
  );
};

type TabProps = ComponentPropsWithoutRef<"button"> & {
  isActive?: boolean;
};

const TabComponent: ForwardRefRenderFunction<HTMLButtonElement, TabProps> = (
  { children, className, isActive, onClick, onKeyDown, ...props },
  ref,
) => (
  <button
    ref={ref}
    role="tab"
    aria-selected={isActive}
    onClick={onClick}
    onKeyDown={onKeyDown}
    className={cn(
      "relative z-10 m-1 rounded-lg px-6 py-3 text-lg transition-colors duration-300",
      isActive ? "text-gray-700" : "text-gray-500 hover:text-gray-700",
      className,
    )}
    {...props}
  >
    {children}
  </button>
);

const Tab = forwardRef(TabComponent);

type TabPanelsProps = {
  children: ReactNode;
};

const TabPanels = ({ children }: TabPanelsProps) => {
  const context = useContext(TabsContext);
  if (!context)
    throw new Error("Tabs.Panels must be used within a Tabs component");

  return (
    <>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<TabPanelProps>, {
            isActive: context.activeTab === index,
            id: `tabpanel-${index}`,
            "aria-labelledby": `tab-${index}`,
          });
        }
        return child;
      })}
    </>
  );
};

type TabPanelProps = ComponentPropsWithoutRef<"div"> & {
  isActive?: boolean;
};

const TabPanel = ({ children, isActive, ...props }: TabPanelProps) => (
  <div role="tabpanel" hidden={!isActive} {...props}>
    {children}
  </div>
);

export const Tabs = Object.assign(TabsRoot, {
  List: TabList,
  Tab,
  Panels: TabPanels,
  Panel: TabPanel,
});
