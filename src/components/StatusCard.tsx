import cn from "classnames";
import { type ComponentPropsWithoutRef } from "react";

type StatusCardProps = ComponentPropsWithoutRef<"div"> & {
  open: boolean;
  closedUntil?: string;
  icon: string; // TODO: handle as ReactNode
};

// TODO: translation
export const StatusCard = ({
  open,
  closedUntil,
  icon,
  children,
  ...props
}: StatusCardProps) => {
  return (
    <div
      className="flex size-40 flex-col items-center rounded-2xl bg-primary-100 p-5 text-primary-800 shadow-md lg:size-60 lg:p-8"
      {...props}
    >
      <span
        className="size-12 lg:size-20"
        aria-hidden
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      <p className="mb-5 mt-2 text-center text-base font-bold lg:mb-8 lg:mt-4 lg:text-2xl">
        {children}
      </p>
      <span
        className={cn("rounded-2xl px-3 py-1 text-xs lg:text-sm", {
          "border border-green-700 bg-green-50 text-green-700": open,
          "border border-red-700 bg-red-50 text-red-700": !open,
        })}
      >
        {open
          ? "Geöffnet"
          : `Geschlossen${closedUntil ? ` bis ${closedUntil}` : ""}`}
      </span>
    </div>
  );
};
