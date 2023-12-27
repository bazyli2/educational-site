import { AbstractLine } from "@/icons/AbstractLine";
import { BoltIcon } from "@/icons/BoltIcon";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className='mt-12 mx-4 flex flex-col'>
      <div className="flex items-center gap-2 text-base font-semibold relative p-4 mb-4">
        <AbstractLine className="absolute -top-5 -left-2" />
        <div className="p-3 text-grey-15">
          <BoltIcon className="w-8" />
        </div>
        <span className="text-orange-50">Unlock</span> Your Creative Potential
      </div>
      <div className="text-grey-15 text-center mb-12">
        <h1 className="text-2xl font-medium ">
          with Online Design and Development Courses.
        </h1>
        <span className="text-sm">Learn from Industry Experts and Enhance Your Skills.</span>
      </div>
      <div className="flex gap-3 self-center">
        <Link href='/courses' className="px-5 py-3 bg-orange-50 rounded-lg text-white-100 text-sm font-semibold" >
          Explore Courses
        </Link>
        <Link href='/courses' className="px-5 py-3 text-black ">
          View Pricing
        </Link>
      </div>
    </section>
  )
}
