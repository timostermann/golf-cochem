import cn from "classnames";
import type { ComponentPropsWithoutRef } from "react";
import { Container, ContainerMargin } from "./Container";

export type FooterProps = ComponentPropsWithoutRef<"footer"> & {
  columns: Array<{
    title: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  }>;
  lastRowLinks: Array<{
    label: string;
    href: string;
  }>;
};

export const Footer = ({
  columns,
  lastRowLinks,
  className,
  ...props
}: FooterProps) => {
  return (
    <Container margin={ContainerMargin.SM}>
      <footer className={cn("mt-8 flex flex-col", className)} {...props}>
        <div className="lg:gap-6s flex flex-col gap-12 lg:flex-row lg:justify-between">
          <p className="text-xl font-medium text-gray-900">Golfclub Cochem</p>
          <ul className="grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-4 xl:gap-8">
            {columns.slice(0, 4).map((column) => (
              <li key={column.title} className="flex flex-col gap-2">
                <p className="text-sm font-medium text-gray-400">
                  {column.title}
                </p>
                <ul className="flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-600 transition-colors duration-300 hover:text-gray-900"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-8 mt-12 h-px w-full bg-gray-200" />
        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date(Date.now()).getFullYear()} Golfclub Cochem/Mosel
            e.V.
          </p>
          <ul className="flex flex-col gap-2 xs:flex-row xs:gap-4">
            {lastRowLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-600 transition-colors duration-300 hover:text-gray-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </Container>
  );
};

Footer.displayName = "Footer";
