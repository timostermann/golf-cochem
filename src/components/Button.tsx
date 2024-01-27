import type { ComponentPropsWithoutRef } from "react";
import cn from "classnames";

import type { ButtonType } from "@lib/types";

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
    "px-5 py-3 font-medium rounded-lg w-fit transition-colors duration-300 ease-out disabled:cursor-no-drop",
    {
      "bg-primary-800 border border-primary-800 hover:bg-primary-700 hover:border-primary-700 text-white":
        variant === ButtonVariant.PRIMARY,
      "bg-gray-200 hover:bg-gray-300 text-gray-800":
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
