import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col items-end">
        <Link
          href={"/"}
          className="text-4xl font-extrabold tracking-tighter italic"
        >
          Layer-1
        </Link>
        <h1 className={"font-light text-sm text-end"}>
          Interact with Ethereum from your Command Line
        </h1>
      </div>
    </header>
  );
}
