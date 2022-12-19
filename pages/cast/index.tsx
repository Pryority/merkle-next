import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {}

const index = (props: Props) => {
  return (
    <div className="flex flex-col w-full snap-y snap-mandatory h-screen overflow-scroll">
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section id="intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5 }}
          className="flex flex-col items-start w-fit text-5xl justify-center text-start text-zinc-300">
          <h2 className="pb-2"><span className="text-zinc-50 uppercase tracking-tighter italic">Ethereum</span> will become the</h2>
          <h2>most <span className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-red-500 to-orange-400 font-bold">powerful</span>,</h2>
          <h2>most <span className="bg-clip-text text-transparent bg-gradient-to-bl from-teal-500 via-sky-500 to-purple-400 font-bold">used</span>,</h2>
          <h2>most <span className="bg-clip-text text-transparent bg-gradient-to-bl from-yellow-500 via-amber-500 to-orange-500 font-bold">credibly-neutral</span>, and</h2>
          <h2>most <span className="bg-clip-text text-transparent bg-gradient-to-br from-teal-500 via-lime-500 to-green-500 font-bold">energy-efficient</span></h2>
          <h2 className="pt-4">blockchain network in the world.</h2>
        </motion.section>
      </div>
      <div className="snap-start w-screen min-h-screen flex items-center justify-center text-8xl">
        <motion.section 
          id="question" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5 }}
          className="flex w-screen items-center justify-center">
          <h2 className="text-4xl">
            But what will it take to get there?
          </h2>
        </motion.section>
      </div>
      <div className="snap-start w-screen  min-h-screen flex items-center justify-center text-8xl">
        <motion.section 
          id="question" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5 }}
          className="flex w-full items-center justify-center">
          <h2 className="text-4xl">
            {"A particularly important area of Ethereum Research and Development has to do with a certain type of Node that makes up the distributed network, called a..."}
          </h2>
        </motion.section>
      </div>
      <div className="snap-start bg-cyan-200 w-screen min-h-screen flex items-center justify-center text-8xl">3</div>
      <div className="snap-start bg-fuchsia-200 w-screen min-h-screen flex items-center justify-center text-8xl">4</div>

    </div>
  );
};

export default index;