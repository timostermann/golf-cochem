import type { ComponentPropsWithoutRef } from "react";

export type SVGIconProps = ComponentPropsWithoutRef<"svg"> & {
  title?: string;
};
