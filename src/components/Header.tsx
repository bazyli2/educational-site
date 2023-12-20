import { ArrowRight } from "@/icons/ArrowRight";
import { LogoShape } from "@/icons/LogoShape";
import { MenuIcon } from "@/icons/MenuIcon";
import Link from "next/link";
import { NavLink } from "./NavLInk";

function Banner() {
  return (
    <div className="flex items-center justify-between rounded-lg bg-orange-50 px-4 py-2 text-sm  text-white-100">
      Free Courses 🌟 Sale Ends Soon, Get It Now
      <ArrowRight className="w-5" />
    </div>
  );
}

function Logo() {
  return (
    <div className="rounded-lg bg-orange-50 p-1.5">
      <LogoShape className="h-8 w-8 overflow-hidden" />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <Logo />
      <div className="flex items-center gap-5">
        <Link href="/sign-up" className="text-sm">
          Sign Up
        </Link>
        <Link
          href="/sign-in"
          className="rounded-md bg-orange-50 px-5 py-3 text-white-100"
        >
          Login
        </Link>
        <MenuIcon className="w-8" />
      </div>
    </nav>
  );
}

function Links() {
  return (
    <ul className="flex items-center gap-6">
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
    <header className="px-4 pt-10">
      <Banner />
      <NavBar />
    </header>
  );
}
