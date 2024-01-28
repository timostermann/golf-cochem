import cn from "classnames";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Container, ContainerMargin } from "./Container";

export type HeaderProps = ComponentPropsWithoutRef<"header"> & {
  homeHref: string;
  items: Array<{
    label: string;
    href?: string;
    subItems?: Array<{
      label: string;
      href: string;
      icon?: ReactNode;
    }>;
  }>;
};

export const Header = ({
  items,
  homeHref,
  className,
  ...props
}: HeaderProps) => {
  return (
    <Container
      tag="header"
      className={cn(
        "sticky top-0 h-[72px] items-center border-b border-gray-100 bg-white shadow-sm lg:h-20",
        className,
      )}
      innerClassName="flex justify-between"
      margin={ContainerMargin.NONE}
      {...props}
    >
      <a className="text-xl font-medium text-gray-900" href={homeHref}>
        Golfclub Cochem
      </a>
      <nav className="hidden lg:flex lg:gap-8">
        {items.map((item) => (
          <div
            key={item.label}
            className="group relative flex items-center gap-2"
          >
            <a
              href={item.href ?? "#"}
              className="underline-effect text-gray-600"
            >
              {item.label}
            </a>
            {item.subItems && (
              <>
                <svg
                  className="h-5 w-5 text-gray-900"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" />
                </svg>
                <ul className="invisible absolute left-0 top-full w-56 -translate-y-4 rounded-lg border border-gray-100 bg-white py-4 opacity-0 shadow-md transition-[opacity,_transform] group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.label}>
                      <a
                        href={subItem.href}
                        className="flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100"
                      >
                        {subItem.icon}
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </nav>
    </Container>
  );
};
