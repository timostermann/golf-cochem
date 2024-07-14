import { type ComponentPropsWithoutRef } from "react";
import cn from "classnames";

export type TabElement = {
  title: string;
  isActive: boolean;
  onClick: () => void;
};

type TabSelectionProps = ComponentPropsWithoutRef<"div"> & {
  tabs: TabElement[];
};

export const TabSelection = ({
  tabs,
  className,
  children,
  ...props
}: TabSelectionProps) => (
  <div
    className={cn(
      "flex w-fit flex-row rounded-lg border border-gray-200 bg-gray-100",
      className,
    )}
    {...props}
  >
    <ul className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <li key={tab.title}>
          <button
            onClick={tab.onClick}
            className={
              tab.isActive
                ? cn(
                    "m-1 rounded-lg bg-white px-6 py-3 text-lg text-gray-700 shadow-md",
                  )
                : cn(
                    "m-1 rounded-lg px-6 py-3 text-lg text-gray-500 hover:text-gray-700 hover:shadow-md",
                  )
            }
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

TabSelection.displayName = "PriceCard";
