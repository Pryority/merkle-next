import {
  ArrowTopRightOnSquareIcon,
  DocumentDuplicateIcon,
  InformationCircleIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Kevlar = (props: Props) => {
  const [showInstall, setShowInstall] = useState(false);
  const toggleShowInstall = () => setShowInstall(!showInstall);
  const [showHelp, setShowHelp] = useState(false);
  const toggleShowHelp = () => setShowHelp(!showHelp);
  const [showKevlar, setShowKevlar] = useState(false);
  const toggleShowKevlar = () => {
    setShowKevlar(!showKevlar);
  };
  return (
    <>
      <section className="flex flex-col items-start space-y-2 w-full">
        <h2 className="text-xl">Install Kevlar</h2>
        {showHelp ? (
          <div className="flex flex-col items-start space-y-8 text-base sm:text-md md:text-lg w-full max-w-5xl rounded-md bg-stone-300/20 p-4">
            <div className="flex flex-col space-y-4 items-start">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center space-x-2 text-slate-600 hover:text-teal-600 t-1 relative">
                  <button onClick={toggleShowHelp}>What is Kevlar?</button>
                </div>
                <XCircleIcon
                  className="h-5 w-5 cursor-pointer text-zinc-600 hover:text-zinc-300 hover:fill-zinc-800 t-2"
                  onClick={toggleShowHelp}
                />
              </div>
              <p className="text-start text-slate-700 font-light">
                Kevlar is a light client-based RPC Proxy for PoS Ethereum that makes your Blockchain Wallet (RPC-based) completely trustless!
              </p>
              <p className="text-start text-slate-700 font-light">
                When Kevlar starts, it syncs to the latest header of the <Link href={"https://beaconcha.in/"} className={"text-pink-600 hover:text-orange-500 t-2"}>Beacon Chain</Link> and then starts an RPC server. This local RPC server can be added to MetaMask or any other RPC-based wallet.
              </p>
              <p className="text-start text-slate-700 font-light">
                Every RPC call the connected wallet makes is verified using Merkle Inclusion proofs to the latest block header.
              </p>
              <p className="text-start text-slate-700 font-light">
                Currently Kevlar supports two kinds of sync methods: the <span className="font-normal">Light Sync</span> based on the light client sync protocol specified by the Ethereum Specification and the <span className="font-normal">Optimistic Sync</span> (which is 100x faster than Light Sync) based on construction from the research paper <Link href={"https://arxiv.org/abs/2209.08673"} target="_blank" className="t-1 text-blue-400 hover:text-blue-600">Proofs of Proof of Stake in Sublinear Complexity</Link>.
              </p>
              <div className="flex w-full items-center justify-center">
                <Link
                  href={
                    "https://github.com/lightclients/kevlar"
                  }
                  target="_blank"
                  className="rounded-lg flex space-x-2 items-center bg-teal-100 border border-teal-400 text-teal-900 hover:text-teal-900/60 focus:bg-teal-600 py-1 px-4 font-base text-sm t-1 hover:bg-teal-300"
                >
                  <p>Learn More</p>
                  <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="flex items-center space-x-2 text-slate-600 hover:text-teal-600 t-1"
            onClick={toggleShowHelp}
          >
            <button>What is Kevlar?</button>
            <InformationCircleIcon className="h-5 w-5 cursor-pointer" />
          </div>
        )}
      </section>
      <div className="flex w-full justify-between items-center space-x-4">
        <div className="flex w-full h-[1px] bg-zinc-300" />
        <MinusCircleIcon
          className={
            showKevlar
              ? "h-5 w-5 text-zinc-300 t-1 hover:fill-zinc-800 cursor-pointer hover:text-zinc-200"
              : "hidden"
          }
          onClick={toggleShowKevlar}
        />
        <PlusCircleIcon
          className={
            !showKevlar
              ? "h-5 w-5 text-zinc-300 t-1 hover:fill-zinc-800 cursor-pointer hover:text-zinc-200"
              : "hidden"
          }
          onClick={toggleShowKevlar}
        />
      </div>
      {/* INSTALL */}
      <div
        className={
          showKevlar
            ? "grid h-full space-y-4 md:space-y-6 lg:space-y-8 cursor-default items-center w-full"
            : "hidden"
        }
      >
        <section className="flex flex-col w-full items-center space-y-2">
          <div className="flex flex-col w-full space-y-4 bg-zinc-100/50 border dark:bg-slate-900/30 p-4 rounded-md">
            <div className="flex items-center w-full justify-between">
              <h3 className="text-lg w-full text-sky-900 font-bold">
                npm
              </h3>
              <div className={`${"flex w-full items-center justify-end"}`}>
                {!showInstall ? (
                  <PlusCircleIcon
                    className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                    onClick={toggleShowInstall}
                  />
                ) : (
                  <MinusCircleIcon
                    className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                    onClick={toggleShowInstall}
                  />
                )}
              </div>
            </div>
            <div
              className={showInstall ? "flex flex-col space-y-2" : "hidden"}
            >
              <p className="dependency-description">
                First, install Kevlar as a global package
              </p>
              <div className="copy">
                <code className="text-lg">
                  npm i -g @lightclients/kevlar
                </code>
                <DocumentDuplicateIcon className="h-6 w-6 t-75 hover:text-orange-400 cursor-pointer" />
              </div>
              <div className="pt-4 flex flex-col">
                <p className="dependency-description">
                  Next, start the private light client server by running:
                </p>
                <div className="copy">
                  <code className="text-lg">kevlar</code>
                  <DocumentDuplicateIcon className="h-6 w-6 t-75 hover:text-orange-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Kevlar;
