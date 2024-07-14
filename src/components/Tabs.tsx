import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  Children,
  isValidElement,
  cloneElement,
  forwardRef,
  type ReactNode,
  type ReactElement,
  type KeyboardEvent,
  type FC,
  type ForwardRefRenderFunction,
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

const TabsRoot: FC<TabsProps> = ({ children, defaultIndex = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultIndex);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="w-full">{children}</div>
    </TabsContext.Provider>
  );
};

const TabList: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const context = useContext(TabsContext);
  if (!context)
    throw new Error("Tabs.List must be used within a Tabs component");

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, Children.count(children));
  }, [children]);

  const handleKeyDown = (event: KeyboardEvent, index: number) => {
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
  };

  return (
    <div
      role="tablist"
      aria-label="Tab Selection"
      className={cn(
        "flex w-fit flex-row rounded-lg border border-gray-200 bg-gray-100",
        className,
      )}
    >
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
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

type TabProps = {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  tabIndex?: number;
  id?: string;
  "aria-controls"?: string;
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
      "m-1 rounded-lg px-6 py-3 text-lg",
      isActive
        ? "bg-white text-gray-700 shadow-md"
        : "text-gray-500 hover:text-gray-700 hover:shadow-md",
      className,
    )}
    {...props}
  >
    {children}
  </button>
);

const Tab = forwardRef(TabComponent);

const TabPanels: FC<{ children: ReactNode }> = ({ children }) => {
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

type TabPanelProps = {
  children: ReactNode;
  isActive?: boolean;
  id?: string;
  "aria-labelledby"?: string;
};

const TabPanel: FC<TabPanelProps> = ({ children, isActive, ...props }) => (
  <div role="tabpanel" hidden={!isActive} {...props}>
    {children}
  </div>
);

export const Tabs = Object.assign(TabsRoot, {
  List: TabList,
  Tab: Tab,
  Panels: TabPanels,
  Panel: TabPanel,
});
