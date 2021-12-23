import { FC, useState } from "react";
import { ethers } from "ethers";
//import { <contract__factory> } from "../contracts/types";

const Index: FC = () => {
  //set up provider and signer
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [account, setAccount] = useState<string>();
  const [signer, setSigner] = useState<ethers.Signer>();

  //set up provider and signer
  const connect = async () => {
    if (!window.ethereum?.request) {
      alert("MetaMask is not installed!");
      return;
    }
  
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    provider.on("network", (newNetwork, oldNetwork) => {
      if (oldNetwork) {
          window.location.reload();
      }
    });
  
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  
    setProvider(provider);
    setSigner(provider.getSigner(accounts[0]));
    setAccount(accounts[0]);
  };

  // //create contract objects
  // const contract_address = "<address>";
  // const contract = <contract__factory>.connect(contract_address, signer);



  return (
    <>
      <button onClick={connect}>Connect</button>
      <p>Account: {account}</p>
    </>
  );
};

export default Index;
