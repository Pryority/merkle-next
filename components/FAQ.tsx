import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

type Props = {};

const FAQ = (props: Props) => {
  const [showInstall, setShowInstall] = useState(false);
  const toggleShowInstall = () => setShowInstall(!showInstall);
  return (
    <section className="flex flex-col w-full justify-start items-center space-y-2">
      <div className="flex flex-col w-full space-y-4 bgpr p-4 rounded-md">
        <div className="flex items-center w-full justify-between">
          <h4 className="flex leading-[24px] text-sm sm:text-base md:text-[18px] lg:text-lg text-sky-900 dark:text-sky-300 font-bold">How can I contribute to Portal Network development?</h4>
          <span className="" />
          <div className={`${"flex items-center"}`}>
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
          <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
            {"The ETH Portal Network development effort is an open, multi-team effort. If you're interested in helping contribute towards the desgin and implementation, join the ongoing discussion happening on the #portal-network channel on ETH R&D discord server. There is also a weekly call, Tuesdays @ 3PM UTC, where we discuss the latest developments and open questions."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
