import cn from "classnames";
import {
  useState,
  type ComponentPropsWithoutRef,
  useRef,
  useEffect,
} from "react";
import { Container, ContainerMargin } from "./Container";

type NavItem = {
  label: string;
  href?: string;
  subItems?: Array<{
    label: string;
    href: string;
    description?: string | null;
    icon?: string;
  }>;
};

export type HeaderProps = ComponentPropsWithoutRef<"header"> & {
  homeHref: string;
  items: Array<NavItem>;
  navAriaLabelOpen: string;
  navAriaLabelClose: string;
};

// TODO: extract chevron icon into separate component
export const Header = ({
  items,
  homeHref,
  navAriaLabelOpen,
  navAriaLabelClose,
  className,
  ...props
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container
      tag="header"
      className={cn(
        "sticky top-0 z-40 h-[72px] items-center border-b border-gray-100 bg-white shadow-sm lg:h-20",
        className,
      )}
      innerClassName="flex justify-between"
      margin={ContainerMargin.NONE}
      {...props}
    >
      <a
        className="inline-flex items-center gap-3 text-xl font-medium text-gray-900"
        href={homeHref}
      >
        <img src="/logo.png" alt="Golfclub Cochem/Mosel e.V." className="w-[30px]" />
        Golfclub Cochem/Mosel e.V.
      </a>
      <nav className="hidden lg:flex lg:gap-8">
        {items.map((item) => (
          <div
            key={item.label}
            className="group relative flex items-center gap-2"
          >
            {item.href ? (
              <a href={item.href} className="underline-effect text-gray-600">
                {item.label}
              </a>
            ) : (
              <p className="cursor-text text-gray-600" tabIndex={0}>
                {item.label}
              </p>
            )}
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
                <ul className="invisible absolute left-0 top-full flex w-80 -translate-y-4 flex-col gap-2 rounded-lg border border-gray-100 bg-white py-4 opacity-0 shadow-md transition-[opacity,_transform] group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.label}>
                      <a
                        href={subItem.href}
                        className="flex gap-4 px-4 py-2 text-gray-900 hover:bg-gray-100"
                      >
                        {subItem.icon && (
                          <span
                            className="text-primary-700"
                            dangerouslySetInnerHTML={{ __html: subItem.icon }}
                          />
                        )}
                        <span className="inline-flex flex-col">
                          <span>{subItem.label}</span>
                          {subItem.description && (
                            <span className="block text-sm font-light text-gray-500">
                              {subItem.description}
                            </span>
                          )}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </nav>
      <button
        title={isMenuOpen ? navAriaLabelClose : navAriaLabelOpen}
        aria-label={isMenuOpen ? navAriaLabelClose : navAriaLabelOpen}
        className={cn(
          "relative top-2 h-3 w-5 cursor-pointer items-center justify-center transition-all duration-300 ease-in-out lg:hidden",
        )}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <div
          className={cn(
            "h-0.5 w-5 rounded transition-all duration-300 ease-in-out before:absolute before:left-0 before:h-0.5 before:w-5 before:origin-left before:-translate-y-1.5 before:rounded-sm before:bg-gray-900 before:transition-all before:duration-300 before:ease-in-out before:content-[''] after:absolute after:left-0 after:h-0.5 after:w-5 after:origin-left after:translate-y-1.5 after:rounded-sm after:bg-gray-900 after:transition-all after:duration-300 after:ease-in-out after:content-['']",
            {
              "-translate-x-3 bg-transparent before:w-[18px] before:translate-x-3 before:rotate-45 after:w-[18px] after:translate-x-3 after:-rotate-45":
                isMenuOpen,
              "bg-gray-900": !isMenuOpen,
            },
          )}
        />
      </button>
      <div
        className={cn("absolute inset-0 -z-10 bg-white ", {
          "border-b border-gray-100 shadow-sm": isMenuOpen,
        })}
      />
      <nav
        className={cn(
          "absolute left-0 top-full -z-20 h-screen w-full bg-white shadow-md transition-transform duration-500 ease-in-out lg:hidden",
          {
            "translate-y-0": isMenuOpen,
            "-translate-y-full": !isMenuOpen,
          },
        )}
      >
        <ul className="mt-6 flex flex-col gap-6 p-4">
          {items.map((item) => (
            <MobileNavItem key={item.label} {...item} />
          ))}
        </ul>
      </nav>
    </Container>
  );
};

Header.displayName = "Header";

// TODO: aria-label translation
const MobileNavItem = ({ label, href, subItems }: NavItem) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!dropdownRef.current) return;
    const dropdown = dropdownRef.current;
    dropdown.style.maxHeight = accordionOpen
      ? dropdown.scrollHeight + "px"
      : "0";
    dropdown.style.visibility = accordionOpen ? "visible" : "hidden";
  }, [accordionOpen]);

  return (
    <li key={label}>
      {href ? (
        <a href={href} className="w-full text-gray-600 hover:bg-gray-900">
          {label}
        </a>
      ) : (
        <div>
          <button
            aria-label="Open Submenu"
            className="relative flex w-full justify-between"
            onClick={() => setAccordionOpen((prev) => !prev)}
          >
            <p className="cursor-text text-gray-600">{label}</p>
            <svg
              className={cn(
                "mr-2 size-6 transform text-gray-900 transition-transform duration-300",
                {
                  "-rotate-180": accordionOpen,
                },
              )}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" />
            </svg>
          </button>
          <ul
            ref={dropdownRef}
            className="w-full overflow-hidden bg-white transition-[max-height,_visibility] duration-300 ease-out"
          >
            {subItems?.map((subItem) => (
              <li
                key={subItem.label}
                className="flex flex-col gap-2 px-4 first:mt-4 last:mb-4"
              >
                <a
                  href={subItem.href}
                  className="flex w-full items-center gap-4 py-2 text-gray-900 hover:bg-gray-100"
                >
                  {subItem.icon && (
                    <span
                      className="text-primary-700"
                      dangerouslySetInnerHTML={{ __html: subItem.icon }}
                    />
                  )}
                  <span className="inline-flex flex-col">
                    <span>{subItem.label}</span>
                    {subItem.description && (
                      <span className="block text-sm font-light text-gray-500">
                        {subItem.description}
                      </span>
                    )}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
