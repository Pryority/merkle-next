import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { 
  getDefaultWallets, 
  RainbowKitProvider,
  darkTheme 
} from "@rainbow-me/rainbowkit";
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import type { AppProps } from "next/app";
import Footer from "../components/Footer";


const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ apiKey: `${process.env.ALCHEMY_ID}`}),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider  
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider 
        chains={chains}
        theme={darkTheme({
          accentColor: "#0f3a85"
        })}  
      >
        <div className="justify-center flex flex-col w-full items-center bg-gradient-to-bl from-stone-700 via-blue-900 to-slate-600 no-scroll">
          <div className="justify-center min-h-screen flex flex-col w-5/6 items-center">
            {/* <Header /> */}
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
