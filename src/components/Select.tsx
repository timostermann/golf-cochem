import React, { type ComponentPropsWithoutRef, forwardRef, useId } from "react";
import cn from "classnames";

type SelectProps = ComponentPropsWithoutRef<"select"> & {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
  touched?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, touched, className, required, ...props }, ref) => {
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
        <div className="relative">
          <select
            ref={ref}
            id={id}
            className={cn(
              "w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 pr-8 text-gray-700 focus:border-primary-500 focus:outline-none focus:ring-2",
              { "border-red-600": showError },
              className,
            )}
            aria-invalid={showError ? "true" : "false"}
            aria-describedby={showError ? `${id}-error` : undefined}
            required={required}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
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

Select.displayName = "Select";
