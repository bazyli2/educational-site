import { ArrowRight } from "@/icons/ArrowRight";
import { LogoShape } from "@/icons/LogoShape";
import { MenuIcon } from "@/icons/MenuIcon";
import Link from "next/link";
import { NavLink } from "./NavLInk";

function Banner() {
  return (
    <div className="text-nowrap flex items-center justify-between rounded-lg bg-orange-50 px-4 py-2 text-sm text-white-100 sm:justify-center sm:gap-6">
      Free Courses 🌟 Sale Ends Soon, Get It Now
      <ArrowRight className="w-5" />
    </div>
  );
}

function Logo() {
  return (
    <div className="rounded-lg bg-orange-50 p-1.5">
      <LogoShape className="w-8" />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex items-center gap-12">
        <Logo />
        <Links />
      </div>
      <div className="flex items-center gap-5">
        <Link href="/sign-up" className="text-sm">
          Sign Up
        </Link>
        <Link
          href="/sign-in"
          className="rounded-md bg-orange-50 px-5 py-3 text-sm text-white-100"
        >
          Login
        </Link>
        <MenuIcon className="w-8 md:hidden" />
      </div>
    </nav>
  );
}

function Links() {
  return (
    <ul className="flex hidden items-center gap-6 md:flex">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/courses">Courses</NavLink>
      <NavLink href="/about-us">About us</NavLink>
      <NavLink href="/pricing">Pricing</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </ul>
  );
}

export function Header() {
  return (
    <header className="px-4 pt-10 md:pt-5">
      <Banner />
      <NavBar />
    </header>
  );
}
