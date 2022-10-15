import { useEffect } from "react";
import Web3 from "web3";
import { MetaAbi } from "../Abi/abi";
 const ContractAddress = "0xFF0998Ee1C1e6423b2448364e244698F305fFC2D";
  const web3=new Web3(Web3.givenProvider );
   const MetaContract = new web3.eth.Contract(MetaAbi, ContractAddress);
 const ConnetContract = async () => {
  const accounts = await  web3.eth.getAccounts();
    const account = accounts[0];
    const gasPrice = await web3.eth.getGasPrice();
 }
    export default ConnetContract;