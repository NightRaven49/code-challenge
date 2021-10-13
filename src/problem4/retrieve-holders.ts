import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider("https://bscscan.com/");

const contract1 = new ethers.Contract("0x123d475e13aa54a43a7421d94caa4459da021c77", [], provider);
const contract2 = new ethers.Contract("0x0020c5222a24e4a96b720c06b803fb8d34adc0af", [], provider);
const contract3 = new ethers.Contract("0xfe808b079187cc460f47374580f5fb47c82b87a5", [], provider);