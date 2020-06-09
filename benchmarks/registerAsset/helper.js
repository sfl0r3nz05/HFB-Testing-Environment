"use strict";

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

let txIndex = 0;

module.exports.AddAsset = async function (bc, contx, args, rfid, hash) {
  while (txIndex < args.assets) {
    txIndex++;
    rfid = rfids[Math.floor(Math.random() * rfids.length)];
    hash = hashs[Math.floor(Math.random() * hashs.length)];

    let myArgs = {
      chaincodeFunction: "AddAsset",
      chaincodeArguments: [rfid, hash],
    };

    await bc.invokeSmartContract(contx, "registerAsset", "v1", myArgs, 30);
  }
};
