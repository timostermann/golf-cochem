import { type ComponentPropsWithoutRef } from "react";
import cn from "classnames";

export enum ContainerSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
  CUSTOM = "custom",
}

export enum ContainerMargin {
  SM = "sm",
  MD = "md",
  LG = "lg",
  NONE = "none",
}

export type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  innerClassName?: string;
  innerProps?: Omit<ComponentPropsWithoutRef<"div">, "className">;
  tag?: "div" | "section" | "header";
  size?: ContainerSize;
  margin?: ContainerMargin;
  useCustomPadding?: boolean;
};

export const Container = ({
  className,
  innerClassName,
  innerProps,
  tag: Tag = "section",
  size = ContainerSize.MD,
  margin = ContainerMargin.LG,
  useCustomPadding = false,
  children,
  ...props
}: ContainerProps) => {
  return (
    <Tag
      className={cn("flex justify-center", className, {
        "px-4 sm:px-6 lg:px-24": !useCustomPadding,
        "mb-6 sm:mb-8 lg:mb-10": margin === ContainerMargin.SM,
        "mb-10 sm:mb-12 lg:mb-14": margin === ContainerMargin.MD,
        "mb-14 sm:mb-20 lg:mb-28": margin === ContainerMargin.LG,
      })}
      {...props}
    >
      <div
        className={cn("w-full", innerClassName, {
          "max-w-[57.5rem]": size === ContainerSize.SM,
          "max-w-[80rem]": size === ContainerSize.MD,
          "max-w-[93rem]": size === ContainerSize.LG,
        })}
        {...innerProps}
      >
        {children}
      </div>
    </Tag>
  );
};

Container.displayName = "Container";
