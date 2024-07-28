import cn from "classnames";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { type ReactNode, type ComponentPropsWithoutRef } from "react";

type StatusCardProps = ComponentPropsWithoutRef<"div"> & {
  open?: boolean;
  until?: string;
  icon: ReactNode;
};

export const StatusCard = ({
  open,
  until,
  icon,
  children,
  className,
  ...props
}: StatusCardProps) => {
  const router = useRouter();
  const t = useTranslations("global");

  return (
    <div
      className={cn(
        "flex min-h-40 w-40 flex-col items-center rounded-2xl bg-primary-100 px-1 py-5 text-primary-800 shadow-md sm:w-48 sm:px-3 lg:size-60 lg:p-8",
        className,
      )}
      {...props}
    >
      <span className="size-12 lg:size-16">{icon}</span>
      <p className="mb-5 mt-2 text-center text-base font-bold lg:mb-8 lg:mt-4 lg:text-2xl">
        {children}
      </p>
      <span
        className={cn(
          "rounded-2xl px-2 py-1 text-[0.6875rem] sm:px-3 sm:text-xs lg:text-sm",
          {
            "border border-green-700 bg-green-50 text-green-700": open,
            "border border-red-700 bg-red-50 text-red-700": !open,
          },
        )}
      >
        {open ? t("opened") : t("closed")}
        {until
          ? ` ${t("until")} ${new Date(until).toLocaleDateString(
              router.locale,
              {
                day: "numeric",
                month: "numeric",
              },
            )}`
          : ""}
      </span>
    </div>
  );
};

StatusCard.displayName = "StatusCard";
