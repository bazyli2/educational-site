import { ArrowRight } from "@/icons/ArrowRight";
import { LogoShape } from "@/icons/LogoShape";
import { NavLink } from "./NavLInk";

function Banner() {
  return (
    <div className="flex items-center justify-center gap-6 rounded-lg bg-orange-50 py-5  text-white-100">
      Free Courses 🌟 Sale Ends Soon, Get It Now
      <ArrowRight />
    </div>
  );
}

function Logo() {
  return (
    <div className="rounded-lg bg-orange-50 p-2">
      <LogoShape />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="flex content-between px-16 pb-5 pt-4">
      <div className="flex gap-12">
        <Logo />
        <Links />
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
    <header className="px-5 pt-5">
      <Banner />
      <NavBar />
    </header>
  );
}
