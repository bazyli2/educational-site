import clsx from "clsx";
import { ComponentProps, ElementType } from "react";
import { twMerge } from "tailwind-merge";

export function Button<T extends ElementType = "button">(props: Props<T>) {
  const { variant: variantProp, as, ...rest } = props;
  const Component = props.as ?? "button";
  const variant = variantProp ?? "contained";
  return (
    <Component
      {...rest}
      className={twMerge(
        clsx("cursor-pointer rounded-lg px-9 py-3.5", {
          "bg-orange-50 text-white-100 ": variant === "contained",
          "border-white-95 bg-white-100 ": variant === "outlined",
        }),
      )}
    />
  );
}

type MyProps<T> = {
  variant?: "contained" | "outlined";
  as?: T;
};
type Props<T extends ElementType> = MyProps<T> &
  Omit<ComponentProps<T>, keyof MyProps<T>>;
