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
import Link from "next/link";
import { Chevron } from "@/icons";
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
  onClick?: () => void;
};

export type HeaderProps = ComponentPropsWithoutRef<"header"> & {
  homeHref: string;
  items: Array<NavItem>;
};

const isActiveGroup = (item: NavItem, router: NextRouter) =>
  router.asPath === item.href ||
  item.subItems?.some((subItem) => subItem.href === router.asPath);

const isActiveSubItem = (subItem: SubItem, router: NextRouter) =>
  router.asPath === subItem.href;

export const Header = ({
  items,
  homeHref,
  className,
  ...props
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subItemClicked, setSubItemClicked] = useState(false);
  const [blockFocus, setBlockFocus] = useState(false);
  const t = useTranslations("nav");
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSubItemClicked(false);
    }, 400);
    return () => clearTimeout(timeout);
  }, [subItemClicked]);

  return (
    <Container
      tag="header"
      className={cn(
        "sticky top-0 z-40 h-[72px] items-center border-b border-gray-100 bg-white shadow-sm xl:h-20",
        className,
      )}
      innerClassName="flex justify-between gap-3"
      margin={ContainerMargin.NONE}
      {...props}
    >
      <Link
        className="xl:gap- inline-flex items-center gap-3 font-medium !leading-none text-gray-900 sm:text-lg xl:text-base"
        href={homeHref}
      >
        <Image src="/logo.png" alt="" aria-hidden height="37" width="30" />
        Golfclub
        <wbr /> Cochem/Mosel&nbsp;e.V.
      </Link>
      <nav className="hidden xl:flex">
        <ul className="flex gap-4">
          {items.map((item, index) => (
            <li
              key={item.label}
              className="group relative flex items-center"
              onFocus={() => setBlockFocus(!!item.subItems)}
              onBlur={() => setBlockFocus(false)}
            >
              {isActiveGroup(item, router) && (
                <span className="absolute -bottom-[21px] h-0.5 w-full translate-y-px bg-primary-700" />
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    "flex h-fit items-center whitespace-nowrap text-gray-600 transition-colors hover:text-primary-600",
                    {
                      "text-primary-700": isActiveGroup(item, router),
                    },
                  )}
                >
                  {t(item.label)}
                  {item.subItems && (
                    <Chevron
                      className={cn("h-5 w-5 text-gray-900", {
                        "text-primary-700": isActiveGroup(item, router),
                      })}
                    />
                  )}
                </Link>
              ) : (
                <button
                  className={cn(
                    "flex h-fit cursor-text items-center gap-1 whitespace-nowrap text-gray-600",
                    {
                      "text-primary-700": isActiveGroup(item, router),
                    },
                  )}
                >
                  {t(item.label)}
                  {item.subItems && (
                    <Chevron
                      className={cn("h-5 w-5 text-gray-900", {
                        "text-primary-700": isActiveGroup(item, router),
                      })}
                    />
                  )}
                </button>
              )}
              {item.subItems && (
                <ul
                  className={cn(
                    "invisible absolute left-0 top-full z-50 flex w-80 -translate-y-4 flex-col gap-2 rounded-lg border border-gray-100 bg-white py-4 opacity-0 shadow-md transition-[opacity,_transform]",
                    "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
                    {
                      "group-[&:not(:focus-within)]:!invisible": blockFocus,
                      "!invisible": subItemClicked,
                      "!left-auto right-0": index > items.length - 3,
                    },
                  )}
                >
                  {item.subItems.map((subItem) => (
                    <li key={subItem.label}>
                      <Link
                        href={subItem.href}
                        className="flex gap-4 px-4 py-2 text-gray-900 hover:bg-gray-100"
                        onClick={() => setSubItemClicked(true)}
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
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <button
        aria-label={t("mainNavigation")}
        className={cn(
          "relative top-3 h-3 w-5 cursor-pointer items-center justify-center transition-all duration-300 ease-in-out xl:hidden",
        )}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-expanded={isMenuOpen}
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
      <div className="absolute inset-0 -translate-y-full bg-white" />
      <nav
        className={cn(
          "absolute left-0 top-full -z-20 h-[calc(100vh-72px)] w-full overflow-y-auto bg-white shadow-md transition-transform duration-500 ease-in-out xl:hidden",
          {
            "translate-y-0": isMenuOpen,
            "-translate-y-full": !isMenuOpen,
          },
        )}
      >
        <div className="relative flex min-h-full flex-col justify-between">
          <ul className="flex flex-col gap-6 p-4 pt-6">
            {items.map((item) => (
              <MobileNavItem
                key={item.label}
                onClick={() => setIsMenuOpen(false)}
                {...item}
              />
            ))}
          </ul>
          <LanguageSwitch className="relative left-1/2 w-fit -translate-x-1/2 pb-4 xl:hidden" />
        </div>
      </nav>
      <LanguageSwitch className="absolute right-4 top-1 hidden xl:flex" />
    </Container>
  );
};

Header.displayName = "Header";

const MobileNavItem = (item: NavItem) => {
  const { label, href, subItems, onClick } = item;
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
        <Link
          href={href}
          className="w-full text-gray-600 hover:bg-gray-900"
          onClick={onClick}
        >
          {t(label)}
        </Link>
      ) : (
        <div>
          <button
            className="relative flex w-full justify-between"
            onClick={() => setAccordionOpen((prev) => !prev)}
            aria-expanded={accordionOpen}
          >
            <span
              className={cn("cursor-text text-gray-600", {
                "text-primary-700": isActiveGroup(item, router),
              })}
            >
              {t(label)}
            </span>
            <Chevron
              className={cn(
                "mr-2 size-6 transform text-gray-900 transition-transform duration-300",
                {
                  "-rotate-180": accordionOpen,
                  "text-primary-700": isActiveGroup(item, router),
                },
              )}
            />
          </button>
          <ul
            ref={dropdownRef}
            className="w-full overflow-hidden bg-white transition-[max-height,_visibility] duration-300 ease-out"
          >
            {subItems?.map((subItem) => (
              <li
                key={subItem.label}
                className="flex flex-col gap-2 first:mt-2 last:mb-4"
              >
                <Link
                  href={subItem.href}
                  className="flex w-full items-center gap-4 rounded-lg p-2 text-gray-900 hover:bg-gray-100"
                  onClick={onClick}
                >
                  {subItem.icon && (
                    <span className="size-6 shrink-0 text-primary-700">
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
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
