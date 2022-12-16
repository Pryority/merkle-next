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

const Foundry = (props: Props) => {
  const [showLinuxMacOs, setShowLinuxMacOs] = useState(false);
  const toggleLinuxMacOs = () => setShowLinuxMacOs(!showLinuxMacOs);
  const [showWindows, setWindows] = useState(false);
  const toggleWindows = () => setWindows(!showWindows);
  const [showWError, setShowError] = useState(false);
  const toggleShowWError = () => setShowError(!showWError);
  const [showHelp, setShowHelp] = useState(false);
  const toggleShowHelp = () => setShowHelp(!showHelp);
  const [showFoundry, setShowFoundry] = useState(false);
  const toggleShowFoundry = () => {
    setShowFoundry(!showFoundry);
  };
  return (
    <>
      <section className="flex flex-col items-start space-y-2 w-full">
        <h2 className="text-xl">Install Foundry</h2>
        {showHelp ? (
          <div className="flex flex-col items-start space-y-8 text-base sm:text-md md:text-lg w-full max-w-5xl rounded-md bg-stone-300/20 p-4">
            <div className="flex flex-col space-y-4 items-start">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center sn hover:text-amber-600">
                  <button onClick={toggleShowHelp}>What is Foundry?</button>
                </div>
                <XCircleIcon
                  className="h-5 w-5 cursor-pointer text-zinc-600 hover:text-zinc-300 hover:fill-zinc-800 t-2"
                  onClick={toggleShowHelp}
                />
              </div>
              <p className="text-start font-light pr">
                Foundry is a blazing fast, portable and modular smart contract development toolchain for
                Ethereum applications, written in <Link href={"https://www.rust-lang.org/learn/get-started"} className={"text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-600 t-1"}>Rust</Link>.
              </p>

              <div className="flex w-full items-center justify-center">
                <Link
                  href={
                    "https://book.getfoundry.sh/"
                  }
                  className="rounded-lg flex space-x-2 items-center bg-amber-100 border border-amber-400 text-amber-900 hover:text-amber-900/60 focus:bg-amber-600 py-1 px-4 font-base text-sm t-1 hover:bg-amber-300"
                >
                  <p>Learn More</p>
                  <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="flex items-center space-x-2 text-slate-600 hover:text-amber-600 t-1"
            onClick={toggleShowHelp}
          >
            <button>What is Foundry?</button>
            <InformationCircleIcon className="h-5 w-5 cursor-pointer" />
          </div>
        )}
      </section>
      <div className="flex w-full justify-between items-center space-x-4">
        <div className="flex w-full h-[1px] bg-zinc-300 dark:bg-zinc-700" />
        <MinusCircleIcon
          className={
            showFoundry
              ? "h-5 w-5 text-zinc-300 hover:text-zinc-200 dark:text-zinc-700 dark:hover-zinc-600 t-1 hover:fill-zinc-800 cursor-pointer"
              : "hidden"
          }
          onClick={toggleShowFoundry}
        />
        <PlusCircleIcon
          className={
            !showFoundry
              ? "h-5 w-5 text-zinc-300 hover:text-zinc-200 dark:text-zinc-700 dark:hover-zinc-600 t-1 hover:fill-zinc-800 cursor-pointer"
              : "hidden"
          }
          onClick={toggleShowFoundry}
        />
      </div>
      <div
        className={
          showFoundry
            ? "grid h-full space-y-4 md:space-y-6 lg:space-y-8 cursor-default items-center w-full"
            : "hidden"
        }
      >
        {/* LINUX MAC */}
        <section className="flex flex-col w-full items-center space-y-2">
          <div className="flex flex-col w-full space-y-4 bgpr p-4 rounded-md">
            <div className="flex items-center w-full justify-between">
              <h3 className="text-lg w-full text-sky-900 dark:text-teal-700 font-bold">
                Linux and macOS
              </h3>
              <div className={`${"flex w-full items-center justify-end"}`}>
                {!showLinuxMacOs ? (
                  <PlusCircleIcon
                    className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                    onClick={toggleLinuxMacOs}
                  />
                ) : (
                  <MinusCircleIcon
                    className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                    onClick={toggleLinuxMacOs}
                  />
                )}
              </div>
            </div>
            <div
              className={showLinuxMacOs ? "flex flex-col space-y-2" : "hidden"}
            >
              <p className="dependency-description">
                Open your terminal and type in the following command to download
                foundryup:
              </p>
              <div className="copy">
                <code className="text-md">
                  curl -L https://foundry.paradigm.xyz | bash
                </code>
                <DocumentDuplicateIcon className="h-6 w-6 t-75 hover:text-orange-400 cursor-pointer" />
              </div>
              <div className="pt-4 flex flex-col">
                <p className="dependency-description">
                  Next, install Foundry by running:
                </p>
                <div className="copy">
                  <code className="text-md">foundryup</code>
                  <DocumentDuplicateIcon className="h-6 w-6 t-75 hover:text-orange-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* WINDOWS */}
        <section className="flex flex-col items-center space-y-2">
          <div className="flex flex-col w-full space-y-4 bgpr p-4 rounded-md">
            <div className="flex items-center w-full justify-between">
              <h3 className="text-lg w-full text-sky-900 dark:text-teal-700 font-bold">Windows</h3>
              <div className={`${"flex w-full items-center justify-end"}`}>
                {!showWindows ? (
                  <PlusCircleIcon
                    className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                    onClick={toggleWindows}
                  />
                ) : (
                  <MinusCircleIcon
                    className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                    onClick={toggleWindows}
                  />
                )}
              </div>
            </div>
            <div className={showWindows ? "flex flex-col space-y-2" : "hidden"}>
              <p className="dependency-description">
                Download and run rustup-init from{" "}
                <Link
                  href="https://win.rustup.rs/x86_64"
                  target="_blank"
                  className="t-1 hover:text-purple-500 font-semibold"
                >
                  rustup.rs
                </Link>
                . It will start the installation in a console.
              </p>

              <div className="flex flex-col">
                <div className="flex items-center">
                  <div className={`${"flex items-center justify-end"}`}>
                    <button
                      onClick={toggleShowWError}
                      className="t-2 hover:text-red-600 text-red-600 text-sm"
                    >
                      Error?
                    </button>
                    <XCircleIcon
                      className={
                        showWError
                          ? "h-4 w-4 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                          : "hidden"
                      }
                      onClick={toggleShowWError}
                    />
                  </div>
                </div>
                <p
                  className={showWError ? "text-red-800 font-light" : "hidden"}
                >
                  If you encounter an error, it is most likely the case that you
                  do not have the VS Code Installer which you can{" "}
                  <Link
                    href={"https://visualstudio.microsoft.com/downloads/"}
                    className="underline"
                  >
                    download here
                  </Link>{" "}
                  and install.
                </p>
              </div>

              <p className="dependency-description">
                After this, run the following to build Foundry from source:
              </p>
              <div className="copy">
                <code className="text-md">
                  cargo install --git https://github.com/foundry-rs/foundry foundry-cli anvil --bins --locked
                </code>
                <DocumentDuplicateIcon className="h-6 w-6 t-75 hover:text-orange-400 cursor-pointer" />
              </div>
              <div className="pt-4 flex flex-col">
                <p className="dependency-description">
                  This will download foundryup. Then install Foundry by running:
                </p>
                <div className="copy">
                  <code className="text-md">foundryup</code>
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

export default Foundry;
