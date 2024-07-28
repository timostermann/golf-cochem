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
  type Dispatch,
  type SetStateAction,
  type ReactElement,
} from "react";
import cn from "classnames";

type TabsContextType = {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  orientation: "horizontal" | "vertical";
  useSelectLike: boolean;
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
  const [useSelectLike, setUseSelectLike] = useState(false);
  const childrenArray = Children.toArray(children);
  const tabListChild = childrenArray.find(
    (child) => isValidElement(child) && child.type === TabList,
  );
  const tabCount = tabListChild
    ? Children.count((tabListChild as ReactElement).props.children)
    : 0;

  useEffect(() => {
    const checkViewport = () => {
      setUseSelectLike(window.innerWidth < 640 && tabCount > 2);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, [tabCount]);

  return (
    <TabsContext.Provider
      value={{ activeTab, setActiveTab, orientation, useSelectLike }}
    >
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

  const { activeTab, setActiveTab, orientation, useSelectLike } = context;

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

  if (useSelectLike) {
    return (
      <SelectLikeTabs
        tabs={
          Children.map(children, (child, index) => ({
            label: isValidElement(child) ? child.props.children : "",
            index,
          })) || []
        }
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        orientation={orientation}
        className={className}
        {...props}
      />
    );
  }

  return (
    <div
      role="tablist"
      aria-orientation={orientation}
      aria-label="Tab Selection"
      className={cn(
        "relative",
        orientation === "horizontal"
          ? "flex w-fit flex-row rounded-lg border border-gray-200 bg-gray-100"
          : "flex w-64 flex-col rounded-lg",
        className,
      )}
      {...props}
    >
      {measurementsReady && (
        <div
          className={cn(
            "absolute rounded-lg transition-all duration-300 ease-out",
            orientation === "horizontal"
              ? "bottom-1 top-1 bg-white shadow-md"
              : "left-1 right-1 bg-primary-100",
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
              orientation={orientation}
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
  orientation?: "horizontal" | "vertical";
};

const TabComponent: ForwardRefRenderFunction<HTMLButtonElement, TabProps> = (
  { children, className, isActive, onClick, onKeyDown, orientation, ...props },
  ref,
) => (
  <button
    ref={ref}
    role="tab"
    aria-selected={isActive}
    onClick={onClick}
    onKeyDown={onKeyDown}
    className={cn(
      "z-10 m-1 rounded-lg transition-colors duration-300",
      {
        "px-6 py-3 text-lg": orientation === "horizontal",
        "px-4 py-2 text-start": orientation === "vertical",
        "text-gray-800": isActive && orientation === "horizontal",
        "text-gray-600 hover:text-gray-800":
          !isActive && orientation === "horizontal",
        "text-primary-600": isActive && orientation === "vertical",
      },
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
    <div className={orientation === "vertical" ? "flex-1" : undefined}>
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

type SelectLikeTabsProps = ComponentPropsWithoutRef<"div"> & {
  tabs: { label: ReactNode; index: number }[];
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  orientation: "horizontal" | "vertical";
};

const SelectLikeTabs = ({
  tabs,
  activeTab,
  setActiveTab,
  orientation,
  className,
  ...props
}: SelectLikeTabsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!isOpen) setIsOpen(true);
        else setActiveTab((prevActiveTab) => (prevActiveTab + 1) % tabs.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!isOpen) setIsOpen(true);
        else
          setActiveTab(
            (prevActiveTab) => (prevActiveTab - 1 + tabs.length) % tabs.length,
          );
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        setIsOpen((prevIsOpen) => !prevIsOpen);
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={cn("relative w-full", className)}
      role="tablist"
      aria-orientation={orientation}
      {...props}
    >
      <button
        className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select tab"
      >
        {tabs[activeTab].label}
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <ul
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-white shadow-lg focus:outline-none"
          role="listbox"
          tabIndex={-1}
          aria-activedescendant={`tab-option-${activeTab}`}
        >
          {tabs.map((tab) => (
            <li
              key={tab.index}
              id={`tab-option-${tab.index}`}
              role="option"
              aria-selected={activeTab === tab.index}
              className={cn(
                "relative cursor-pointer select-none py-2 pl-3 pr-9",
                activeTab === tab.index
                  ? "bg-primary-600 text-white"
                  : "text-gray-900",
                "hover:bg-primary-500 hover:text-white",
              )}
              onClick={() => {
                setActiveTab(tab.index);
                setIsOpen(false);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveTab(tab.index);
                  setIsOpen(false);
                }
              }}
              tabIndex={0}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const Tabs = Object.assign(TabsRoot, {
  List: TabList,
  Tab: Tab,
  Panels: TabPanels,
  Panel: TabPanel,
});
