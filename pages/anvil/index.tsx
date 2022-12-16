import Link from "next/link";
import React from "react";

type Props = {}

const index = (props: Props) => {
  return (
    <div className="flex flex-col w-full space-y-8">
      <h2 id="overview-of-anvil">
        <a className="text-3xl" href="#overview-of-anvil">Anvil</a>
      </h2>
      <h2 id="overview-of-anvil"><a className="header" href="#overview-of-anvil">Overview of Anvil</a></h2>
      <div className="flex flex-col space-y-2 text-lg font-light">
        <p>Anvil is a <span className="underline">local testnet node</span> shipped with Foundry.</p>
        <p>You can use it for testing your contracts from frontends or for interacting over RPC.</p>
        <p className="text-amber-800 animate-pulse">Recommended: You can use the RPC Proxy endpoint of a Kevlar instance!</p>
      </div>

      <blockquote>
        <p>{"Note: If you have an older version of Foundry installed, you'll need to re-install "}<code>foundryup</code> in order for Anvil to be downloaded.</p>
      </blockquote>
      <div className="flex flex-col space-y-4">
        <h3 id="how-to-use-anvil"><a className="header" href="#how-to-use-anvil">How to use Anvil</a></h3>
        <p>To use Anvil, simply type <code>anvil</code>. You should see a list of accounts and private keys available for use, as well as the address and port that the node is listening on. </p>
        <p>Anvil is highly configurable. You can run <code>anvil -h</code> to see all the configuration options.</p>
        <div className="flex flex-col space-y-4 p-4">
          <p className="font-medium">Some basic options are:</p>
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-1 w-fit">
              <p>Number of dev accounts to generate and configure. [default: 10]</p>
              <code className="copy">
anvil -a, --accounts &lt;ACCOUNTS&gt;
              </code>
            </div>
            <div className="flex flex-col space-y-1 w-fit">
The EVM hardfork to use. [default: latest]
              <code className="copy">
anvil --hardfork &lt;HARDFORK&gt;
              </code>
            </div>
            <div className="flex flex-col space-y-1 w-fit">
Port number to listen on. [default: 8545]
              <code className="copy">
anvil  -p, --port &lt;PORT&gt;
              </code>
            </div>
          </div>
        </div>
      </div>

      <blockquote>
        <p>📚 <strong>Reference</strong></p>
        <p>See the <Link href="https://book.getfoundry.sh/reference/anvil/"><code>anvil</code> Reference</Link> for in depth information on Anvil and its capabilities.</p>
      </blockquote>
    </div>
  );
};

export default index;