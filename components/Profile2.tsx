import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
   
export function Profile2() {
  const { address, connector, isConnected } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ address });
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } =
      useConnect();
  const { disconnect } = useDisconnect();
  console.log(ensName);
  
  if (isConnected)
    return (
      <div>
        <img src={`/${ensAvatar}`} alt="ENS Avatar" />
        <div>{ensName ? `${{ensName}} (${address})` : address}</div>
        <div>Connected to {}</div>
        {/* <div>Connected to {"connector.name"}</div> */}
        <button onClick={()=>disconnect}>Disconnect</button>
      </div>
    );

  return (
    // <button 
    //   className="connect-btn"
    //   onClick={() => connect()}
    // >
    //     Connect Wallet
    // </button>
    <ConnectButton/>
  );
}