import {
  createContext,
  useContext,
  useCallback,
  useState,
  useRef,
  useEffect,
  Children,
  isValidElement,
  cloneElement,
  forwardRef,
  type ReactNode,
  type KeyboardEvent,
  type ForwardRefRenderFunction,
  type ComponentPropsWithoutRef,
} from "react";
import cn from "classnames";

type TabsContextType = {
  activeTab: number;
  setActiveTab: (index: number) => void;
  orientation: "horizontal" | "vertical";
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

type TabsProps = {
  children: ReactNode;
  defaultIndex?: number;
  orientation?: "horizontal" | "vertical";
};

const TabsRoot = ({
  children,
  defaultIndex = 0,
  orientation = "horizontal",
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultIndex);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, orientation }}>
      <div className={cn("w-full", { flex: orientation === "vertical" })}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

type TabListProps = ComponentPropsWithoutRef<"div">;

const TabList = ({ children, className, ...props }: TabListProps) => {
  const context = useContext(TabsContext);
  if (!context)
    throw new Error("Tabs.List must be used within a Tabs component");

  const { activeTab, setActiveTab, orientation } = context;
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeTabStyle, setActiveTabStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const [measurementsReady, setMeasurementsReady] = useState(false);

  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, Children.count(children));
  }, [children]);

  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } =
        activeTabElement;
      setActiveTabStyle({
        left: offsetLeft,
        top: offsetTop,
        width: offsetWidth,
        height: offsetHeight,
      });
      setMeasurementsReady(true);
    }
  }, [activeTab, children]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent, index: number) => {
      const tabCount = Children.count(children);
      let newIndex: number;

      switch (event.key) {
        case orientation === "horizontal" ? "ArrowRight" : "ArrowDown":
          newIndex = (index + 1) % tabCount;
          break;
        case orientation === "horizontal" ? "ArrowLeft" : "ArrowUp":
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
      setActiveTab(newIndex);
    },
    [children, setActiveTab, orientation],
  );

  return (
    <div
      role="tablist"
      aria-orientation={orientation}
      aria-label="Tab Selection"
      className={cn(
        "relative",
        orientation === "horizontal"
          ? "flex w-fit flex-row rounded-lg border border-gray-200 bg-gray-100"
          : "flex w-64 flex-col rounded-lg border border-gray-200 bg-gray-100",
        className,
      )}
      {...props}
    >
      {measurementsReady && (
        <div
          className={cn(
            "absolute rounded-lg bg-white shadow-md transition-all duration-300 ease-out",
            orientation === "horizontal" ? "bottom-1 top-1" : "left-1 right-1",
          )}
          style={
            orientation === "horizontal"
              ? { left: activeTabStyle.left, width: activeTabStyle.width }
              : { top: activeTabStyle.top, height: activeTabStyle.height }
          }
        />
      )}
      {Children.map(children, (child, index) => {
        if (isValidElement<TabProps>(child)) {
          return (
            <Tab
              key={index}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
              onKeyDown={(e: KeyboardEvent) => handleKeyDown(e, index)}
              tabIndex={activeTab === index ? 0 : -1}
              id={`tab-${index}`}
              aria-controls={`tabpanel-${index}`}
              ref={(el: HTMLButtonElement | null) => {
                tabRefs.current[index] = el;
              }}
            >
              {child.props.children}
            </Tab>
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

  const { activeTab, orientation } = context;

  return (
    <div className={orientation === "vertical" ? "flex-1 p-4" : undefined}>
      {Children.map(children, (child, index) => {
        if (isValidElement<TabPanelProps>(child)) {
          return cloneElement(child, {
            isActive: activeTab === index,
            id: `tabpanel-${index}`,
            "aria-labelledby": `tab-${index}`,
          });
        }
        return child;
      })}
    </div>
  );
};

type TabPanelProps = ComponentPropsWithoutRef<"div"> & {
  isActive?: boolean;
};

const TabPanel = ({
  children,
  isActive,
  className,
  ...props
}: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={!isActive}
    className={cn(className, {
      "!hidden": !isActive,
    })}
    {...props}
  >
    {children}
  </div>
);

export const Tabs = Object.assign(TabsRoot, {
  List: TabList,
  Tab: Tab,
  Panels: TabPanels,
  Panel: TabPanel,
});
