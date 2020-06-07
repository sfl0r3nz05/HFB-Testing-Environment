"use strict";

module.exports.info = "Changing car owner.";

const helper = require("./helper");

let txIndex = 0;
let owners = [
  "Tomoko",
  "Brad",
  "Jin Soo",
  "Max",
  "Adrianna",
  "Michel",
  "Aarav",
  "Pari",
  "Valeria",
  "Shotaro",
];
let bc, contx, clientArgs;

module.exports.init = async function (blockchain, context, args) {
  bc = blockchain;
  contx = context;
  clientArgs = args;

  await helper.createCar(bc, contx, args);

  return Promise.resolve();
};

module.exports.run = function () {
  txIndex++;
  let carNumber = "Client" + contx.clientIdx + "_CAR" + txIndex.toString();
  let newCarOwner = owners[Math.floor(Math.random() * owners.length)];

  let args = {
    chaincodeFunction: "changeCarOwner",
    chaincodeArguments: [carNumber, newCarOwner],
  };

  if (txIndex === clientArgs.assets) {
    txIndex = 0;
  }

  return bc.invokeSmartContract(contx, "fabcar", "v1", args, 60);
};

module.exports.end = async function () {
  return Promise.resolve();
};
