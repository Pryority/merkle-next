import { motion } from "framer-motion";
import FAQ from "../components/FAQ";
import Header from "../components/Header";

type Props = {}

const index = (props: Props) => {
  return (
    <div className="flex flex-col w-full snap-y snap-mandatory h-screen overflow-scroll">
      <Header/>
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section id="intro"
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-start w-fit text-8xl justify-center text-start text-zinc-700 dark:text-zinc-300">
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
          className="flex w-screen items-center justify-center">
          <h2 className="text-7xl">
            But what will it take to get there?
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen  min-h-screen flex items-center justify-center">
        <motion.section 
          id="context" 
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5 }}
          className="max-w-5xl flex w-full items-center justify-center">
          <h2 className="text-7xl text-start">
            {"Systems must be established and adopted that aim to support a special type of Node, called a..."}
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div id="light-client" className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5  }}
          className="flex w-full items-center justify-center">
          <h2 className="text-[128px] tracking-widest font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-zinc-600 via-purple-700 to-violet-500">
            LIGHT CLIENT
          </h2>
        </motion.section>
      </div>
      {/* --------------------------------------- */}
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5  }}
          className="max-w-5xl flex w-full items-center justify-center">
          <h2 className="text-7xl text-end">
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
          className="max-w-5xl flex flex-col w-full items-center justify-center">
          <h2 className="text-7xl text-start">
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
          className="max-w-5xl flex flex-col w-full items-center justify-center">
          <h2 className="text-7xl text-end">
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
          className="max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h2 className="text-7xl text-start">
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
          className="max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h2 className="text-7xl text-end">
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
          className="max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h2 className="text-7xl text-start">
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
          className="max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h2 className="text-7xl text-end">
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
          className="max-w-5xl flex flex-col space-y-2 w-1/2 items-start justify-center text-8xl text-start font-extrabold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-br from-yellow-500 via-lime-500 to-green-400">
          <h2 className="text-3xl">
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
          className="max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h2 className="text-7xl text-end">
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
          className="max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h2 className="text-7xl text-start">
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
          className="max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h2 className="text-7xl text-end">
            The Portal Network will be comprised of one or more decentralized peer-to-peer networks which together provide the data and functionality necessary to expose the standard JSON-RPC API.
          </h2>
        </motion.section>
      </div>
      <div className="snap-start w-screen min-h-screen flex items-center justify-center">
        <motion.section 
          id="portal-network-5" 
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5 }}
          className="max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h2 className="text-7xl text-start">
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
          className="max-w-5xl flex flex-col space-y-8 w-full items-center justify-center">
          <h3 className="font-medium text-2xl text-teal-500">
            Frequently Asked Questions
          </h3>
          <FAQ />
        </motion.section>
      </div>
      {/* --------------------------------------- */}
    </div>
  );
};

export default index;