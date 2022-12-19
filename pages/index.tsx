import Head from "next/head";
import FAQ from "../components/FAQ";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center">
      <Head>
        <title>Enchain</title>
        <meta name="description" content="Ethereum" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={"flex flex-col justify-center w-full items-center h-fit max-w-3xl snap-y snap-mandatory overflow-y-scroll"}>
        <motion.section id="intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5 }}
          className="font-semibold text-5xl flex flex-col text-zinc-300 text-start snap-container">
          <h2 className="pb-2"><span className="text-zinc-50 uppercase tracking-tighter italic">Ethereum</span> will become the</h2>
          <h2>most <span className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-red-500 to-orange-400 font-bold">powerful</span>,</h2>
          <h2>most <span className="bg-clip-text text-transparent bg-gradient-to-bl from-teal-500 via-sky-500 to-purple-400 font-bold">used</span>,</h2>
          <h2>most <span className="bg-clip-text text-transparent bg-gradient-to-bl from-yellow-500 via-amber-500 to-orange-500 font-bold">credibly-neutral</span>, and</h2>
          <h2>most <span className="bg-clip-text text-transparent bg-gradient-to-br from-teal-500 via-lime-500 to-green-500 font-bold">energy-efficient</span></h2>
          <h2 className="pt-4">blockchain network in the world.</h2>
        </motion.section>

        <motion.section 
          id="question" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5 }}
          className="snap-container bg-yellow-500">
          <h2 className="text-4xl">
            But what will it take to get there?
          </h2>
        </motion.section>

        <motion.section 
          id="question" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5 }}
          className="snap-container bg-orange-500">
          <h2 className="text-4xl">
            {"A particularly important area of Ethereum Research and Development has to do with a certain type of Node that makes up the distributed network, called a..."}
          </h2>
        </motion.section>

        <motion.section id="question"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5 }}
          className={"snap-container bg-red-500"}
        >
          <h2 className="text-8xl tracking-widest">
            LIGHT CLIENT
          </h2>
        </motion.section>

        <motion.section 
          id="question" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5 }}
          className="snap-container bg-blue-500">
          <h2 className="text-4xl">
            Instead of downloading every block, light nodes download block headers. These headers only contain summary information about the contents of the blocks. Any other information required by the light node gets requested from a full node. The light node can then independently verify the data they receive against the state roots in the block headers. Light nodes enable users to participate in the Ethereum network without the powerful hardware or high bandwidth required to run full nodes. Eventually, light nodes might run on mobile phones or embedded devices.
          </h2>
        </motion.section>

        <motion.section 
          id="question" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5 }}
          className="snap-container bg-indigo-500">
          <h3 className="font-medium text-2xl text-teal-500">
            Frequently Asked Questions
          </h3>
          <FAQ />
        </motion.section>

        {/* <article className="flex flex-col space-y-2 items-center">
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
                <Link href={"/cast"} className={"hover:text-yellow-500 t-2"}>
                  cast
                </Link>
              </div>
              <div className="flex w-full justify-center p-2 uppercase tracking-wider font-bold">
                <Link href={"/anvil"} className={"hover:text-yellow-500 t-2"}>
                  anvil
                </Link>
              </div>
            </div>
          </div>
        </article> */}
      </main>
    </div>
  );
}
