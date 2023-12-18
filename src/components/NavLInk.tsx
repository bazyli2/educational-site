"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function NavLink(props: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const active = pathname === props.href;
  return (
    <Link
      {...props}
      className={cn(
        "text-lg transition-all duration-200 ease-in-out",
        { "rounded-lg bg-white-95 px-5 py-3": active },
        props.className,
      )}
    />
  );
}
