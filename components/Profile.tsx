import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useAccount,
  useConnect,
  useContract,
  useContractRead,
  useContractWrite,
  useNetwork,
  useSigner, //<<<<<<<
  useProvider,
  useDisconnect,
  useWaitForTransaction,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

type Props = {}

export default function Profile({}: Props) {
  const { address, isConnected } = useAccount();
  const provider = useProvider();

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  
  if (isConnected)
    return (
      <div className="flex items-center space-x-4">
        <p>Connected: {address}</p>
        <button
          className='disconnect-btn' 
          onClick={() => disconnect()}
        >Disconnect</button>
      </div>
    );
  return (
    <button 
      className="connect-btn"
      onClick={() => connect()}
    >
      Connect Wallet
    </button>
  );
}