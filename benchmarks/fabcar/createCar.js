"use strict";

module.exports.info = "Creating cars.";

let txIndex = 0;
let colors = [
  "blue",
  "red",
  "green",
  "yellow",
  "black",
  "purple",
  "white",
  "violet",
  "indigo",
  "brown",
];
let makes = [
  "Toyota",
  "Ford",
  "Hyundai",
  "Volkswagen",
  "Tesla",
  "Peugeot",
  "Chery",
  "Fiat",
  "Tata",
  "Holden",
];
let models = [
  "Prius",
  "Mustang",
  "Tucson",
  "Passat",
  "S",
  "205",
  "S22L",
  "Punto",
  "Nano",
  "Barina",
];
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
let bc, contx;

module.exports.init = function (blockchain, context, args) {
  bc = blockchain;
  contx = context;

  return Promise.resolve();
};

module.exports.run = function () {
  txIndex++;
  let carNumber = "Client" + contx.clientIdx + "_CAR" + txIndex.toString();
  let carColor = colors[Math.floor(Math.random() * colors.length)];
  let carMake = makes[Math.floor(Math.random() * makes.length)];
  let carModel = models[Math.floor(Math.random() * models.length)];
  let carOwner = owners[Math.floor(Math.random() * owners.length)];

  let args = {
    chaincodeFunction: "createCar",
    chaincodeArguments: [carNumber, carMake, carModel, carColor, carOwner],
  };

  return bc.invokeSmartContract(contx, "fabcar", "v1", args, 30);
};

module.exports.end = function () {
  return Promise.resolve();
};
