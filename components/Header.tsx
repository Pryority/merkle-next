import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex-col w-full justify-center items-center relative">
      <div className="flex flex-col items-end">
        <Link
          href={"/"}
          className="sm:text-2xl md:text-3xl lg:text-4xl font-extralight tracking-[16px] opacity-10 flex items-end"
        >
          <h1 className="">enchain</h1>
          <h1 className="tracking-[8px] text-base sm:text-lg md:text-xl lg:text-2xl">.eth</h1>
        </Link>
      </div>
    </header>
  );
}
