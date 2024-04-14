import type { ComponentPropsWithoutRef } from "react";
import cn from "classnames";

import type { ButtonType } from "@/lib/types";

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export type ButtonBaseProps = {
  ariaLabel?: string;
  type?: ButtonType;
  disabled?: boolean;
  variant?: ButtonVariant;
  href?: string;
};

export type ButtonProps = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps>;

export const Button = ({
  children,
  ariaLabel,
  type = "button",
  disabled = false,
  variant = ButtonVariant.PRIMARY,
  className,
  onClick,
  href,
  ...props
}: ButtonProps) => {
  const classes = cn(
    "px-6 py-3 rounded-lg w-fit text-center transition-colors duration-300 ease-out disabled:cursor-no-drop",
    {
      "bg-primary-700 border border-primary-700 hover:bg-primary-800 hover:border-primary-800 text-white":
        variant === ButtonVariant.PRIMARY,
      "bg-gray-50 hover:bg-gray-100 text-gray-800":
        variant === ButtonVariant.SECONDARY,
    },
    className,
  );

  return (
    <>
      {href ? (
        <a href={href} className={classes}>
          {children}
        </a>
      ) : (
        <button
          className={classes}
          onClick={onClick}
          aria-label={ariaLabel}
          type={type}
          disabled={disabled}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
};

Button.displayName = "Button";
