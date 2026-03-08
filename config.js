const CONFIG = {

CHAIN_ID: "0x38",

STC_ADDRESS: "0x12730990De18c6864e45d22f007EBebaFbf6c76b",
NC_ADDRESS: "0xA0db9B043EA0387BA0f7480189F0392EdAA72108",

ERC20_ABI: [

{
"name":"balanceOf",
"type":"function",
"stateMutability":"view",
"inputs":[{"name":"account","type":"address"}],
"outputs":[{"type":"uint256"}]
},

{
"name":"decimals",
"type":"function",
"stateMutability":"view",
"inputs":[],
"outputs":[{"type":"uint8"}]
},

{
"name":"transfer",
"type":"function",
"stateMutability":"nonpayable",
"inputs":[
{"name":"to","type":"address"},
{"name":"amount","type":"uint256"}
],
"outputs":[{"type":"bool"}]
}

]

}
