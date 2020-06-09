"use strict";

module.exports.info = "Adding assets.";

let txIndex = 0;
let rfids = [
  "0xc8308d2d2f048d1d04294cc9",
  "0xc7308d2d2f048d1d04294cc9",
  "0xc6308d2d2f048d1d04294cc9",
  "0xc5308d2d2f048d1d04294cc9",
  "0xc4308d2d2f048d1d04294cc9",
  "0xc3308d2d2f048d1d04294cc9",
  "0xc2308d2d2f048d1d04294cc9",
  "0xc1308d2d2f048d1d04294cc9",
  "0xc0308d2d2f048d1d04294cc9",
  "0xc1308d2d2f048d1d04294cc9",
];
let hashs = [
  "Qmeq4hW6kK2abdbpE2vc7FjSX1xmn1tphg2hGrHFGxqk16",
  "Qmeq5hW6kK2abdbpE2vc7FjSX1xmn1tphg2hGrHFGxqk16",
  "Qmeq6hW6kK2abdbpE2vc7FjSX1xmn1tphg2hGrHFGxqk16",
  "Qmeq7hW6kK2abdbpE2vc7FjSX1xmn1tphg2hGrHFGxqk16",
  "Qmeq8hW6kK2abdbpE2vc7FjSX1xmn1tphg2hGrHFGxqk16",
  "Qmeq9hW6kK2abdbpE2vc7FjSX1xmn1tphg2hGrHFGxqk16",
  "Qmeq0hW6kK2abdbpE2vc7FjSX1xmn1tphg2hGrHFGxqk16",
  "Qmeq1hW6kK2abdbpE2vc7FjSX1xmn1tphg2hGrHFGxqk16",
  "Qmeq2hW6kK2abdbpE2vc7FjSX1xmn1tphg2hGrHFGxqk16",
  "Qmeq3hW6kK2abdbpE2vc7FjSX1xmn1tphg2hGrHFGxqk16",
];

let bc, contx;

module.exports.init = function (blockchain, context, args) {
  bc = blockchain;
  contx = context;

  return Promise.resolve();
};

module.exports.run = function () {
  txIndex++;

  let rfid = rfids[Math.floor(Math.random() * rfids.length)];
  let hash = hashs[Math.floor(Math.random() * hashs.length)];

  let args = {
    chaincodeFunction: "addAsset",
    chaincodeArguments: [rfid, hash],
  };

  return bc.invokeSmartContract(contx, "registerAsset", "v1", args, 30);
};

module.exports.end = function () {
  return Promise.resolve();
};
