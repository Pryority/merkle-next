import { ArrowTopRightOnSquareIcon, ArrowUpIcon, ArrowUpOnSquareStackIcon, ArrowUpRightIcon, MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import FAQ from "../components/FAQ";
import Header from "../components/Header";

export default function Home() {
  const [showFAQ2, setShowFAQ2] = useState(false);
  const toggleFAQ2 = () => {
    setShowFAQ2(!showFAQ2);
  };
  const [showFAQ3, setShowFAQ3] = useState(false);
  const toggleFAQ3 = () => {
    setShowFAQ3(!showFAQ3);
  };
  const [showFAQ4, setShowFAQ4] = useState(false);
  const toggleFAQ4 = () => {
    setShowFAQ4(!showFAQ4);
  };
  return (
    <div className="flex flex-col w-full snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden">
      <Head>
        <title>enchain.eth</title>
        <meta name="description" content="An Ethereum Portal Network educational website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header/>
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section id="intro"
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-start w-fit text-xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl justify-center text-start text-zinc-700 dark:text-zinc-300">
          <h2 className="pb-2"><span className="text-zinc-900 dark:text-zinc-50 uppercase tracking-tighter italic font-extrabold">Ethereum</span> will become the</h2>
          <h2>most <span className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-red-500 to-orange-400 font-bold">powerful</span>,</h2>
          <h2>most <span className="bg-clip-text text-transparent bg-gradient-to-bl from-teal-500 via-sky-500 to-purple-400 font-bold">used</span>,</h2>
          <h2>most <span className="bg-clip-text text-transparent bg-gradient-to-bl from-yellow-500 via-amber-500 to-orange-500 font-bold">credibly-neutral</span>, and</h2>
          <h2>most <span className="bg-clip-text text-transparent bg-gradient-to-br from-teal-500 via-lime-500 to-green-500 font-bold">energy-efficient</span></h2>
          <h2 className="pt-4">blockchain network in the world.</h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="question" 
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5 }}
          className="p-4 flex w-screen items-center justify-center">
          <h2 className="text-lg sm:text-4xl md:text-7xl">
            But what will it take to get there?
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="systems" 
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5 }}
          className="p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex items-center justify-center">
          <h2 className="text-lg sm:text-4xl md:text-7xl text-start">
            {"Systems must be established and adopted that aim to support a special type of Node, called a..."}
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div id="light-client" className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5  }}
          className="flex w-full items-center justify-center">
          <h2 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[88px] xl:text-[128px] tracking-widest font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-zinc-600 via-purple-700 to-violet-500">
            LIGHT CLIENT
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5  }}
          className="p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex w-full items-center justify-center">
          <h2 className="text-lg sm:text-4xl md:text-7xl text-end">
            {"Eventually, light clients AKA \"light nodes\" will run on mobile phones or embedded devices (IoT)."}
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="explanation-p1" 
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5 }}
          className="p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex flex-col w-full items-center justify-center">
          <h2 className="text-lg sm:text-4xl md:text-7xl text-start">
              Rather than downloading every block like full nodes, light nodes download <span className="underline">block headers</span>.
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="explanation-p1" 
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5 }}
          className="p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex flex-col w-full items-center justify-center">
          <h2 className="text-lg sm:text-4xl md:text-7xl text-end">
              These headers only contain summary information about the contents of the blocks.
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="question" 
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5 }}
          className="p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h2 className="text-lg sm:text-4xl md:text-7xl text-start">
            The light node can independently verify the data they receive against the state roots in the block headers.
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="question" 
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5 }}
          className="p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h2 className="text-lg sm:text-4xl md:text-7xl text-end">
            Any other information required by the light node gets requested from a full node.
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="question" 
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5 }}
          className="p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h2 className="text-lg sm:text-4xl md:text-7xl text-start">
            Light nodes enable users to participate in the Ethereum network without the powerful hardware or high bandwidth required to run full nodes ❤️
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="question" 
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5 }}
          className="p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h2 className="text-lg sm:text-4xl md:text-7xl text-end">
            Talented and dedicated Ethereum developers have been experimenting with light client solutions.
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="portal-network" 
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="p-4 sm:max-w-3xl  xl:max-w-5xl flex flex-col space-y-2 w-4/5 items-start justify-center text-4xl sm:text-6xl md:text-8xl text-start font-extrabold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-br from-yellow-500 via-lime-500 to-green-400">
          <h2 className="text-xs sm:text-xl md:text-2xl lg:text-3xl">
            The
          </h2>
          <h2>
            Portal
          </h2>
          <h2>
            Network
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="portal-network-2" 
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5 }}
          className="p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h2 className="text-lg sm:text-4xl md:text-7xl text-end">
            {"The \"Portal Network\" is an ongoing endeavour to enable lightweight protocol access to resource constrained devices."}
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="portal-network-3" 
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5 }}
          className="p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h2 className="text-lg sm:text-4xl md:text-7xl text-start">
            {"The term \"portal\" is used to indicate that these networks provide a view into the protocol but are not critical to the operation of the core Ethereum protocol."}
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="portal-network-4" 
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5 }}
          className="p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h2 className="text-lg sm:text-4xl md:text-6xl text-end">
            The Portal Network will be comprised of one or more decentralized peer-to-peer networks which together provide the data and functionality necessary to expose the standard JSON-RPC API.
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="portal-network-5" 
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5 }}
          className="p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h2 className="text-lg sm:text-4xl md:text-6xl text-start">
            These networks are being specially designed to ensure that clients participating in these networks can do so with minimal expendature of networking bandwidth, CPU, RAM, and HDD resources.
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="question" 
          initial={{ opacity: 0, y: -300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="p-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h3 className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-teal-500">
            Frequently Asked Questions
          </h3>
          <FAQ />
          <section className="flex flex-col w-full justify-start items-center space-y-2">
            <div className="flex flex-col w-full space-y-4 bgpr p-4 rounded-md">
              <div className="flex items-center w-full justify-between">
                <h4 className="flex leading-[24px] text-sm sm:text-base md:text-[18px] lg:text-lg text-sky-900 dark:text-sky-300 font-bold">
                  {"Why aren't there financial incentives?"}
                </h4>
                <span className="" />
                <div className={`${"flex items-center"}`}>
                  {!showFAQ2 ? (
                    <PlusCircleIcon
                      className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                      onClick={toggleFAQ2}
                    />
                  ) : (
                    <MinusCircleIcon
                      className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                      onClick={toggleFAQ2}
                    />
                  )}
                </div>
              </div>
              <div
                className={showFAQ2 ? "flex flex-col space-y-2 items-center" : "hidden"}
              >
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"Simply put: Incorrectly implemented incentives lead to perverse incentives."}
                </p>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"Using financial incentives is a natural choice for many crypto/blockchain protocols. Well-designed incentives can be a powerful tool to encourage proper-use and discourage malicious behavior. Incentives might seem especially well-suited for the Portal Network, where the strength of the network is correlated to the number of participants and the amount of contributed computing resources. However, at the current point in time, Portal Network developers have opted out from implementing financial incentives."}
                </p>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"The problems with financial incentives is they are complex and difficult to implement correctly. They also provide mechanisms for people to game the system and extract value, rather than contribute towards overall network health. The Portal Network relies on producing a useful, lightweight client for developers, along with altruism and laziness to encourage network adoption and sufficient computing resources."}
                </p>
                <p className="leading-7 w-full flex justify-center py-8 text-sky-700 dark:text-sky-100">
                  {"\""}<span className="italic">Never underestimate the power of laziness and software defaults</span>{"\" - Piper Merriam"}
                </p>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"Protocols like Bittorrent and IPFS are proof that this is a feasible strategy. Furthermore, there already exist protocols like the Filecoin and The Graph Network that are using financial incentives to accomplish similar goals to the Portal Network."}
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col w-full justify-start items-center space-y-2">
            <div className="flex flex-col w-full space-y-4 bgpr p-4 rounded-md">
              <div className="flex items-center w-full justify-between">
                <h4 className="flex leading-[24px] text-sm sm:text-base md:text-[18px] lg:text-lg text-sky-900 dark:text-sky-300 font-bold">
                  {"What is the Portal network?"}
                </h4>
                <span className="" />
                <div className={`${"flex items-center"}`}>
                  {!showFAQ3 ? (
                    <PlusCircleIcon
                      className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                      onClick={toggleFAQ3}
                    />
                  ) : (
                    <MinusCircleIcon
                      className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                      onClick={toggleFAQ3}
                    />
                  )}
                </div>
              </div>
              <div
                className={showFAQ3 ? "flex flex-col space-y-2 items-center" : "hidden"}
              >
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"The \"Portal Network\" is an in progess effort to enable lightweight protocol access to resource constrained devices. The term \"portal\" is used to indicate that these networks provide a view into the protocol but are not critical to the operation of the core Ethereum protocol."}
                </p>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"The Portal Network will be comprised of one or more decentralized peer-to-peer networks which together provide the data and functionality necessary to expose the standard JSON-RPC API. These networks are being specially designed to ensure that clients participating in these networks can do so with minimal expendature of networking bandwidth, CPU, RAM, and HDD resources."}
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col w-full justify-start items-center space-y-2">
            <div className="flex flex-col w-full space-y-4 bgpr p-4 rounded-md">
              <div className="flex items-center w-full justify-between">
                <h4 className="flex leading-[24px] text-sm sm:text-base md:text-[18px] lg:text-lg text-sky-900 dark:text-sky-300 font-bold">
                  {"Why do we need the Portal network?"}
                </h4>
                <span className="" />
                <div className={`${"flex items-center"}`}>
                  {!showFAQ4 ? (
                    <PlusCircleIcon
                      className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                      onClick={toggleFAQ4}
                    />
                  ) : (
                    <MinusCircleIcon
                      className="h-8 w-8 text-slate-50 dark:text-slate-600 fill-slate-400/40 dark:fill-black/40 hover:text-slate-300 hover:fill-black/60 t-75 cursor-pointer"
                      onClick={toggleFAQ4}
                    />
                  )}
                </div>
              </div>
              <div
                className={showFAQ4 ? "flex flex-col space-y-2 items-center" : "hidden"}
              >
                <p className="leading-7 w-full flex justify-center text-sky-700 dark:text-sky-100">
                  {"This effort is motivated by two overlapping goals:"}
                </p>
                <p className="leading-7 w-full flex justify-center pt-2 text-xl font-medium text-blue-700 dark:text-sky-100">
                  {"Full Functionality for Stateless Clients"}
                </p>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"The core Ethereum protocol is moving towards a \"stateless\" model of block verification. Under this model a client will be able to fully verify the execution of a block using a witness. Such a client would no longer need to keep or maintain any of the Ethereum \"state\" data. Such a client is very valuable in the context of the core protocol, as it facilitates a cleaner merge of the Eth1 and Eth2 chains."}
                </p>
                <div className="pt-2 pb-4">
                  <Link 
                    href="https://dankradfeist.de/ethereum/2021/02/14/why-stateless.html" 
                    target={"_blank"}
                    className="flex space-x-2 items-center rounded-lg bg-teal-100 border border-teal-400 visited:text-teal-900 visited:hover:text-teal-900/60 text-teal-700 hover:text-sky-900 focus:bg-teal-600 py-[0.34px] px-4 font-base text-xs t-1 hover:bg-sky-200 hover:border-sky-400"
                  >
                    <p className="leading-7 w-full dark:text-sky-100">
                      {"Why stateless is so important to the Eth1/Eth2 merge?"}
                    </p>
                    <ArrowTopRightOnSquareIcon className="h-3 w-3"/>
                  </Link>
                </div>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"What is easy to overlook is that such a \"stateless\" client will be unable to much else without additional infrastructure. Specifically it would be unable to serve the vast majority of the JSON-RPC apis. The Portal Network provides this additional infrastructure, allowing stateless clients to also expose the external APIs that support the web3 ecosystem."}
                </p>
                <p className="leading-7 w-full flex justify-center pt-8 text-xl font-medium text-blue-700 dark:text-sky-100">
                  {"Scalable Lightweight Clients"}
                </p>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"The term \"light client\" tends to refer to a client of the existing DevP2P LES network. This network is designed using a client/server architecture. The LES network has a total capacity dictated by the number of \"servers\" on the network. In order for this network to scale, the \"server\" capacity has to increase. This also means that at any point in time the network has some total capacity which if exceeded will cause service degredation across the network. Because of this the LES network is unreliable when operating near capacity."}
                </p>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"The Portal Network aims to solve this problem by designing our networks so that each additional client that joints the network adds additional capacity to the network. The end result should be a network which becomes more robust and powerful as more nodes join the network."}
                </p>
                <p className="leading-7 w-full text-sky-700 dark:text-sky-100">
                  {"The Portal Network will be comprised of one or more decentralized peer-to-peer networks which together provide the data and functionality necessary to expose the standard JSON-RPC API. These networks are being specially designed to ensure that clients participating in these networks can do so with minimal expendature of networking bandwidth, CPU, RAM, and HDD resources."}
                </p>
                <div className="flex space-x-4 w-full items-center">
                  <div className="pt-2 pb-4 flex w-full justify-center">
                    <Link 
                      href="https://dankradfeist.de/ethereum/2021/02/14/why-stateless.html" 
                      target={"_blank"}
                      className="flex space-x-2 items-center rounded-lg bg-teal-100 border border-teal-400 visited:text-teal-900 visited:hover:text-teal-900/60 text-teal-700 hover:text-sky-900 focus:bg-teal-600 py-[0.34px] px-4 font-base text-xs t-1 hover:bg-sky-200 hover:border-sky-400"
                    >
                      <p className="leading-7 w-full dark:text-sky-100 capitalize">
                        {"The winding road to functional light clients"}
                      </p>
                      <ArrowTopRightOnSquareIcon className="h-3 w-3"/>
                    </Link>
                  </div>
                  <div className="pt-2 pb-4 flex w-full justify-center">
                    <Link 
                      href="https://dankradfeist.de/ethereum/2021/02/14/why-stateless.html" 
                      target={"_blank"}
                      className="flex space-x-2 items-center rounded-lg bg-teal-100 border border-teal-400 visited:text-teal-900 visited:hover:text-teal-900/60 text-teal-700 hover:text-sky-900 focus:bg-teal-600 py-[0.34px] px-4 font-base text-xs t-1 hover:bg-sky-200 hover:border-sky-400"
                    >
                      <p className="leading-7 w-full dark:text-sky-100">
                        {"Democratizing Ethereum"}
                      </p>
                      <ArrowTopRightOnSquareIcon className="h-3 w-3"/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="portal-network-5" 
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="p-4 flex space-x-2 w-full items-center justify-center">
          <Link href={"#intro"} className="flex items-center space-x-2 text-lg bg-zinc-100 hover:bg-slate-100 rounded-lg hover:shadow-sm transition-all ease-in-out duration-150 hover:border px-6 py-2 uppercase text-start">
            <p>Go to Top of Page</p>
            <ArrowUpIcon className="h-4 w-4"/>
          </Link>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
    </div>
  );
};