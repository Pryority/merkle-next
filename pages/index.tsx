import Head from "next/head";
import Image from "next/image";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Foundry from "../components/Foundry";
import Kevlar from "../components/Kevlar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-start p-8">
      <Head>
        <title>Layer-1</title>
        <meta name="description" content="Ethereum" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={"flex flex-col space-y-8 items-center max-w-lg w-full"}>
        <Header />
        <Kevlar />
        <Foundry />
        {/* INSTALLED */}
        <article className="flex flex-col space-y-2 items-center">
          <div className="pt-4 flex flex-col w-full items-center">
            <p className="text-sm text-center">
              If Foundry is installed, you will have three{" "}
              <Link
                href={
                  "https://softwareengineering.stackexchange.com/questions/121224/what-are-binaries"
                }
                target="_blank"
                className="hover:underline t-2"
              >
                binaries
              </Link>{" "}
              at your disposal:
            </p>
            <div className="grid grid-cols-3 items-center w-full">
              <div className="flex w-full justify-center p-2 uppercase tracking-wider font-bold">
                <Link href={""} className={"hover:text-yellow-500 t-2"}>
                  forge
                </Link>
              </div>
              <div className="flex w-full justify-center p-2 uppercase tracking-wider font-bold">
                <Link href={""} className={"hover:text-yellow-500 t-2"}>
                  cast
                </Link>
              </div>
              <div className="flex w-full justify-center p-2 uppercase tracking-wider font-bold">
                <Link href={""} className={"hover:text-yellow-500 t-2"}>
                  anvil
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
