'use strict';

module.exports.info  = 'My Network Performance Test';

const removeExisting = require('../composer-test-utils').clearAll;
const os = require('os');

const namespace = 'org.my-network';
const uuid = os.hostname() + process.pid; // UUID for client within test

let bc;
let busNetConnection;
let testAssetNum;
let testTransaction;
let factory;


module.exports.init = async function (blockchain, context, args) {
    bc = blockchain;
    busNetConnection = context;
    //If more business network connections
    //busNetConnections = new Map();
    //busNetConnections.set('admin', context);
    testAssetNum = args.assetNumber;


    //CODE HERE
};

module.exports.run = function() {
    let transaction;
    switch (testTransaction) {
        case '1': {
            //CODE HERE
            break;
        }
        case '2': {
            //CODE HERE
            break;
        }

        default: {
            throw new Error('No valid test Transaction specified');
        }
    }
    return bc.bcObj.submitTransaction(busNetConnection, transaction);
};

module.exports.end = function() {
    return Promise.resolve(true);
};
