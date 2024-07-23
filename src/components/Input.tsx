import React, { type ComponentPropsWithoutRef, forwardRef, useId } from "react";
import cn from "classnames";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  error?: string;
  touched?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, touched, className, required, ...props }, ref) => {
    const id = useId();
    const showError = touched && error;

    return (
      <div className="mb-4">
        <label
          htmlFor={id}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {required && <span className="sr-only">Required:</span>}
          {label}
          {required && (
            <span aria-hidden className="pl-px">
              *
            </span>
          )}
        </label>
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:border-primary-500 focus:outline-none focus:ring-2",
            { "border-red-600": showError },
            className,
          )}
          aria-invalid={showError ? "true" : "false"}
          aria-describedby={showError ? `${id}-error` : undefined}
          required={required}
          {...props}
        />
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

Input.displayName = "Input";
