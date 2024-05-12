import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { type ComponentPropsWithoutRef } from "react";

export const LanguageSwitch = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"ul">) => {
  const router = useRouter();

  return (
    <ul className={cn("flex gap-1", className)} {...props}>
      {router.locales?.map((locale) => (
        <li key={locale}>
          <Link
            href=""
            locale={locale}
            className={cn(
              "p-0.5 text-sm font-light opacity-50 transition-colors hover:opacity-100 focus-visible:opacity-100",
              {
                "font-medium opacity-100": locale === router.locale,
              },
            )}
          >
            {locale.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
};

LanguageSwitch.displayName = "LanguageSwitch";
