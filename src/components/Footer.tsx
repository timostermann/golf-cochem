import cn from "classnames";
import type { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <Container tag="footer" margin={ContainerMargin.SM}>
      <div className={cn("mt-8 flex flex-col", className)} {...props}>
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-3">
          <p className="flex items-center gap-3 self-start text-lg font-medium !leading-none text-gray-900">
            <Image
              src="/logo.png"
              alt="Golfclub Cochem"
              aria-hidden
              height="37"
              width="30"
            />
            Golfclub
            <wbr /> Cochem/Mosel&nbsp;e.V.
          </p>
          <ul className="grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-4 xl:gap-8">
            {columns.slice(0, 4).map((column) => (
              <li key={column.title} className="flex flex-col gap-2">
                <p className="text-sm text-gray-500">{column.title}</p>
                <ul className="flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="underline-effect text-gray-900"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-8 mt-12 h-px w-full bg-gray-200" />
        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date(Date.now()).getFullYear()} Golfclub Cochem/Mosel
            e.V.
          </p>
          <ul className="flex flex-col gap-2 xs:flex-row xs:gap-4">
            {lastRowLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="underline-effect text-gray-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

Footer.displayName = "Footer";
