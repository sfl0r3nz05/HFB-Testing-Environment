"use strict";

module.exports.info = "Getting an asset.";

const helper = require("./helper");

let txIndex = 0;
let limitIndex, bc, contx;

module.exports.init = async function (blockchain, context, args) {
  bc = blockchain;
  contx = context;
  limitIndex = args.assets;
  console.log("args", args);

  await helper.addAsset(bc, contx, args);

  return Promise.resolve();
};

module.exports.run = function () {
  txIndex++;

  let args = {
    chaincodeFunction: "getAsset",
    chaincodeArguments: [rfid],
  };

  if (txIndex === limitIndex) {
    txIndex = 0;
  }

  return bc.bcObj.querySmartContract(contx, "registerAsset", "v1", args, 30);
};

module.exports.end = function () {
  return Promise.resolve();
};
