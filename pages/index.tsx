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
    <div className="flex flex-col w-full snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden p-8">
      <Head>
        <title>MerleTree.js</title>
        <meta name="description" content="A renovated " />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1 className="text-4xl pb-8">MerkleTree.js</h1>
        <div className="flex flex-col w-full bg-stone-300 p-4">
          <details open>
            <summary>Input</summary>
            <form id="form" className="flex flex-col w-full space-y-4">
              <div className="flex flex-col">
                <label className="font-medium text-2xl">Leaves <span className="font-light text-xs">(enter input json array or newline separated)</span></label>
                <textarea id="input" rows={10} className="flex flex-col w-full border border-stone-400 focus:outline-stone-500 rounded p-2">
                  {`[
  "0xca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb",
  "0x3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d",
  "0x2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6"
]`}
                </textarea>
              </div>
              <div className="flex flex-col w-full items-center space-y-2">
                <label className="font-medium uppercase tracking-tighter text-lg">Hash function</label>
                <div className="flex space-x-8 justify-center">
                  <div className="flex items-center space-x-1">
                    <input type="radio" name="hash" value="sha256" id="sha256" checked/>
                    <label htmlFor="sha256">SHA-256</label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <input type="radio" name="hash" value="keccak256" id="keccak256"/>
                    <label htmlFor="keccak256">Keccak-256</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full items-center space-y-2">
                <label className="font-medium uppercase tracking-tighter text-lg">Options</label>
                <div className="flex items-center justify-center space-x-8 w-full">
                  <div className="flex items-center space-x-1">
                    <input type="checkbox" name="option" value="hashLeaves" id="hashLeaves"/>
                    <label htmlFor="hashLeaves">hashLeaves</label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <input type="checkbox" name="option" value="sortLeaves" id="sortLeaves"/>
                    <label htmlFor="sortLeaves">sortLeaves</label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <input type="checkbox" name="option" value="sortPairs" id="sortPairs"/>
                    <label htmlFor="sortPairs">sortPairs</label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <input type="checkbox" name="option" value="duplicateOdd" id="duplicateOdd"/>
                    <label htmlFor="duplicateOdd">duplicateOdd</label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <input type="checkbox" name="option" value="isBitcoinTree" id="isBitcoinTree"/>
                    <label htmlFor="isBitcoinTree">isBitcoinTree</label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <input type="checkbox" name="option" value="fillDefaultHash" id="fillDefaultHash"/>
                    <label htmlFor="fillDefaultHash">fillDefaultHash</label>
                  </div>
                </div>
              </div>
              <div id="fillDefaultHashView" style={{display:"none"}}>
                <label>Fill default hash</label>
                <small>
                  <a href='#' id="addressZero">addressZero</a>
                  <a href='#' id="hashAddressZero">hash(addressZero)</a>
                </small>
                <input type="text" id="fillDefaultHashValue" />
              </div>
              <div className="flex flex-col w-full items-center pt-6">
                <button type="submit" className="flex items-center space-x-2 text-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-lg transition-all ease-in-out duration-150 dark:hover:border-zinc-300 px-6 py-2 uppercase text-start">Compute</button>
              </div>
            </form>
          </details>
        </div>
        {/* -------------------------------------------------------- */}
        <div>
          <details open>
            <summary>Verify</summary>
            <form id="verifyForm">
              <label>Proof</label>
              <div>
                <textarea id="verifyProof" rows={3}></textarea>
              </div>
              <label>Leaf</label>
              <div>
                <input type="text" id="verifyLeaf" />
              </div>
              <label>Root</label>
              <div>
                <input type="text" id="verifyRoot" />
              </div>
              <div>
                <button type="submit">Verify</button>
              </div>
              <label>Verified</label>
              <div>
                <pre id="verified"></pre>
              </div>
            </form>
          </details>
        </div>
        <div>
          <details open>
            <summary>Proof</summary>
            <form id="proofForm">
              <div>
                <label>Leaf</label>
                <div>
                  <select id="leaveSelect"></select>
                </div>
              </div>
              <div>
                <label>Proof</label>
                <pre id="proof"></pre>
              </div>
            </form>
          </details>
        </div>
        <div className="bg-red-200">
          <details open>
            <summary>Output</summary>
            <div id="output" className="flex flex-col space-y-4">
              <div>
                <label>Root</label>
                <pre id="root"></pre>
              </div>
              <div>
                <label>Leaves</label>
                <pre id="leaves"></pre>
              </div>
              <div>
                <label>Layers</label>
                <pre id="layers"></pre>
              </div>
              <div>
                <label>Flat Layers</label>
                <pre id="flatLayers"></pre>
              </div>
              <div>
                <label>Tree</label>
                <pre id="tree"></pre>
              </div>
            </div>
          </details>
        </div>
      </main>
    </div>
  );
};