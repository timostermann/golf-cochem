import React, { type ComponentPropsWithoutRef, forwardRef, useId } from "react";
import cn from "classnames";

type CheckboxProps = Omit<ComponentPropsWithoutRef<"input">, "type"> & {
  label: string;
  error?: string;
  touched?: boolean;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, touched, className, required, ...props }, ref) => {
    const id = useId();
    const showError = touched && error;

    return (
      <div className="mb-4">
        <div className="flex items-center">
          <input
            ref={ref}
            type="checkbox"
            id={id}
            className={cn(
              "size-5 cursor-pointer rounded border-gray-300 text-primary-700",
              { "border-red-600": showError },
              className,
            )}
            aria-invalid={showError ? "true" : "false"}
            aria-describedby={showError ? `${id}-error` : undefined}
            required={required}
            {...props}
          />
          <label
            htmlFor={id}
            className="ml-2 block cursor-pointer text-sm text-gray-700"
          >
            {required && <span className="sr-only">Required:</span>}
            {label} {required && <span aria-hidden>*</span>}
          </label>
        </div>
        {showError && (
          <p
            id={`${id}-error`}
            aria-live="polite"
            role="alert"
            className="relative text-xs text-red-600"
          >
            <span className="absolute ml-1 mt-0.5">{error}</span>
          </p>
        )}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
