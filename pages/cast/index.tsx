import Link from "next/link";
import React from "react";

type Props = {}

const index = (props: Props) => {
  return (
    <div className="flex flex-col w-full space-y-8">
      <h2 id="overview-of-cast">
        <a className="text-3xl" href="#overview-of-cast">Cast</a>
      </h2>
      <p className="text-lg font-light">{"Cast is Foundry's command-line tool for performing Ethereum RPC calls. You can make smart contract calls, send transactions, or retrieve any type of chain data - all from your command-line!"}</p>
      <h3 id="how-to-use-cast"><a className="" href="#how-to-use-cast">How to use Cast</a></h3>
      <p>To use Cast, run the <a href="../reference/cast/cast.html"><code>cast</code>
      </a> command followed by a subcommand:</p>
      <pre className="w-fit">
        <code className="copy">$ cast &lt;subcommand&gt;
        </code>
      </pre>
      <div className="flex flex-col space-y-4">
        <h4 id="examples"><a className="" href="#examples">Examples</a></h4>
        <div className="flex flex-col space-y-1">
          <p>{"Let's use "}<code>cast</code> to retrieve the total supply of the DAI token:</p>
          <pre className="overflow-x-scroll scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-teal-400 scrollbar-track-w copy">
            <code className="pb-2">$ cast call 0x6b175474e89094c44da98b954eedeac495271d0f &quot;totalSupply()(uint256)&quot; --rpc-url https://eth-mainnet.alchemyapi.io/v2/Lc7oIGYeL_QvInzI0Wiu_pOZZDEKBrdf
860385318200,3814300330472690
            </code>
          </pre>
        </div>
        <div className="flex flex-col space-y-1">
          <p>
            <code>cast</code> also provides many convenient subcommands, such as for decoding calldata:
          </p>
          <pre className="overflow-x-scroll scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-teal-400 scrollbar-track-w copy">
            <code className="pb-2">$ cast 4byte-decode 0x1F1F897F676d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003e71) &quot;fulfillRandomness(bytes32,uint256)&quot;
0x676d000000000000000000000000000000000000000000000000000000000000
999
            </code>
          </pre>
        </div>
        <div className="flex flex-col space-y-1">
          <p>You can also use <code>cast</code>{" to send arbitrary messages. Here's an example of sending a message between two Anvil accounts."}</p>
          <pre className="overflow-x-scroll scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-teal-400 scrollbar-track-w copy">
            <code className="pb-2">$ cast send --private-key &lt;Your Private Key&gt; 0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc $(cast --from-utf8 &quot;hello world&quot;) --rpc-url http://127.0.0.1:8545/
            </code>
          </pre>
        </div>
      </div>

      <blockquote>
        <p>📚 <strong>Reference</strong></p>
        <p>See the <Link href="https://book.getfoundry.sh/reference/cast/"><code>cast</code> Reference</Link> for a complete overview of all the available subcommands.</p>
      </blockquote>

    </div>
  );
};

export default index;