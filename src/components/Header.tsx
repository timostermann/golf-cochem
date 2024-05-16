import cn from "classnames";
import {
  useState,
  type ComponentPropsWithoutRef,
  useRef,
  useEffect,
  type ReactNode,
} from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { type NextRouter, useRouter } from "next/router";
import { Container, ContainerMargin } from "./Container";
import { LanguageSwitch } from "./LanguageSwitch";

type SubItem = {
  label: string;
  href: string;
  description?: string | null;
  icon?: ReactNode;
};

type NavItem = {
  label: string;
  href?: string;
  subItems?: Array<SubItem>;
};

export type HeaderProps = ComponentPropsWithoutRef<"header"> & {
  homeHref: string;
  items: Array<NavItem>;
  navAriaLabelOpen: string; // TODO: follow toogle button pattern
  navAriaLabelClose: string;
};

const isActiveGroup = (item: NavItem, router: NextRouter) =>
  router.asPath === item.href ||
  item.subItems?.some((subItem) => subItem.href === router.asPath);

const isActiveSubItem = (subItem: SubItem, router: NextRouter) =>
  router.asPath === subItem.href;

// TODO: extract chevron icon into separate component
// TODO: improve accessibility
export const Header = ({
  items,
  homeHref,
  navAriaLabelOpen,
  navAriaLabelClose,
  className,
  ...props
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("nav");
  const router = useRouter();

  return (
    <Container
      tag="header"
      className={cn(
        "sticky top-0 z-40 h-[72px] items-center border-b border-gray-100 bg-white shadow-sm lg:h-20",
        className,
      )}
      innerClassName="flex justify-between gap-3"
      margin={ContainerMargin.NONE}
      {...props}
    >
      <a
        className="inline-flex items-center gap-3 text-lg font-medium !leading-none text-gray-900"
        href={homeHref}
      >
        <Image
          src="/logo.png"
          alt=""
          aria-hidden
          height="37"
          width="30"
          tabIndex={-1}
        />
        Golfclub
        <wbr /> Cochem/Mosel&nbsp;e.V.
      </a>
      <nav className="hidden lg:flex lg:gap-4 xl:gap-8">
        {items.map((item) => (
          <div
            key={item.label}
            className="group relative flex items-center gap-2"
          >
            {isActiveGroup(item, router) && (
              <span className="absolute -bottom-5 h-0.5 w-full translate-y-px bg-primary-700" />
            )}
            {item.href ? (
              <a
                href={item.href}
                className={cn("underline-effect text-gray-600", {
                  "text-primary-700": isActiveGroup(item, router),
                })}
              >
                {t(item.label)}
              </a>
            ) : (
              <p
                className={cn("cursor-text text-gray-600", {
                  "text-primary-700": isActiveGroup(item, router),
                })}
              >
                {t(item.label)}
              </p>
            )}
            {item.subItems && (
              <>
                <svg
                  className={cn("h-5 w-5 text-gray-900", {
                    "text-primary-700": isActiveGroup(item, router),
                  })}
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
                        <span className="size-6 shrink-0 text-primary-700">
                          {subItem.icon}
                        </span>
                        <span className="inline-flex flex-col">
                          <span
                            className={cn({
                              "text-primary-700": isActiveSubItem(
                                subItem,
                                router,
                              ),
                            })}
                          >
                            {t(subItem.label)}
                          </span>
                          {subItem.description && (
                            <span className="block text-sm font-light text-gray-500">
                              {t(subItem.description)}
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
        title={t(isMenuOpen ? navAriaLabelClose : navAriaLabelOpen)}
        aria-label={t(isMenuOpen ? navAriaLabelClose : navAriaLabelOpen)}
        className={cn(
          "relative top-3 h-3 w-5 cursor-pointer items-center justify-center transition-all duration-300 ease-in-out lg:hidden",
        )}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <div
          className={cn(
            "h-0.5 w-5 rounded transition-all duration-300 ease-in-out before:absolute before:left-0 before:h-0.5 before:w-5 before:origin-left before:-translate-y-1.5 before:rounded-sm before:bg-gray-900 before:transition-all before:duration-300 before:ease-in-out before:content-[''] after:absolute after:left-0 after:h-0.5 after:w-5 after:origin-left after:translate-y-1.5 after:rounded-sm after:bg-gray-900 after:transition-all after:duration-300 after:ease-in-out after:content-['']",
            {
              "-translate-x-3 bg-transparent before:w-[17px] before:translate-x-3 before:rotate-45 after:w-[17px] after:translate-x-3 after:-rotate-45":
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
          "absolute left-0 top-full -z-20 h-[calc(100vh-70px)] w-full bg-white shadow-md transition-transform duration-500 ease-in-out lg:hidden",
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
        <LanguageSwitch className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:hidden" />
      </nav>
      <LanguageSwitch className="absolute right-4 top-1 hidden lg:flex" />
    </Container>
  );
};

Header.displayName = "Header";

// TODO: aria-label translation
const MobileNavItem = (item: NavItem) => {
  const { label, href, subItems } = item;
  const [accordionOpen, setAccordionOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const t = useTranslations("nav");
  const router = useRouter();

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
          {t(label)}
        </a>
      ) : (
        <div>
          <button
            aria-label="Open Submenu"
            className="relative flex w-full justify-between"
            onClick={() => setAccordionOpen((prev) => !prev)}
          >
            <p
              className={cn("cursor-text text-gray-600", {
                "text-primary-700": isActiveGroup(item, router),
              })}
            >
              {t(label)}
            </p>
            <svg
              className={cn(
                "mr-2 size-6 transform text-gray-900 transition-transform duration-300",
                {
                  "-rotate-180": accordionOpen,
                  "text-primary-700": isActiveGroup(item, router),
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
                    <span className="size-6 text-primary-700">
                      {subItem.icon}
                    </span>
                  )}
                  <span className="inline-flex flex-col">
                    <span
                      className={cn({
                        "text-primary-700": isActiveSubItem(subItem, router),
                      })}
                    >
                      {t(subItem.label)}
                    </span>
                    {subItem.description && (
                      <span className="block text-sm font-light text-gray-500">
                        {t(subItem.description)}
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
