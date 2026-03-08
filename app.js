let web3;
let account;

async function connectWallet(){

if(window.ethereum){

web3 = new Web3(window.ethereum);

await window.ethereum.request({
method:'eth_requestAccounts'
});

const accounts = await web3.eth.getAccounts();

account = accounts[0];

document.getElementById("wallet").innerText =
"Connected: "+account;

}

}

async function batchAirdrop(){

const tokenType = document.getElementById("token").value;

let tokenAddress;

if(tokenType==="STC"){
tokenAddress = CONFIG.STC_ADDRESS;
}else{
tokenAddress = CONFIG.NC_ADDRESS;
}

const token = new web3.eth.Contract(
CONFIG.ERC20_ABI,
tokenAddress
);

const decimals = await token.methods.decimals().call();

const wallets = document
.getElementById("wallets")
.value
.split("\n");

const amount = document
.getElementById("amount")
.value;

const value = web3.utils.toBN(amount)
.mul(web3.utils.toBN(10).pow(web3.utils.toBN(decimals)));

for(let i=0;i<wallets.length;i++){

const w = wallets[i].trim();

if(w){

document.getElementById("progress").innerText =
"Sending "+(i+1)+" / "+wallets.length;

await token.methods.transfer(w,value).send({
from:account
});

}

}

document.getElementById("progress").innerText =
"Airdrop Completed";

}
