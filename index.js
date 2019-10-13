const RequestNetwork = require('@requestnetwork/request-network.js');
const Web3 = require('web3');

const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = 'opinion maple cake sugar pudding cream honey rich smooth crumble sweet treat';

function setupRequestNetwork() {
  // Initialize web3 with infura provider
  const web3 = new Web3(new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io:443'));

  // Initialize the Request Network library
  const requestNetwork = new RequestNetwork.default({
    provider: web3.currentProvider,
    ethNetworkId: 4,
    useIpfsPublic: true,
  });

  return requestNetwork;
}

module.exports = {
  setupRequestNetwork,
  getRequestId,
  getCancelRequestCount,
}

// -- Do not edit anything above this line --

// getRequestId('0x8fc2e7f2498f1d06461ee2d547002611b801202b', 140) == '0x8fc2e7f2498f1d06461ee2d547002611b801202b000000000000000000000140'
function getRequestId(requestCoreAddress, requestNumber) {
  let precisionNumber = requestNumber.toPrecision();

  if((precisionNumber.toString().length > 24) || (requestCoreAddress.length != 42)) {
    return null;
  }
  else {
    let paddedInt = '0'.repeat(24-precisionNumber.toString().length);
    let requestId = requestCoreAddress + paddedInt + precisionNumber.toString();
    return requestId;
  }
}

async function getCancelRequestCount(requestNetwork, beginningRequestNumber, endRequestNumber) {
  let canceledRequestCounter = 0;
  for(i=beginningRequestNumber; i<= endRequestNumber; i++) {
    let requestId = getRequestId("0x8fc2e7f2498f1d06461ee2d547002611b801202b", i);
    let request = await requestNetwork.fromRequestId(requestId);
    let events = await request.getHistory();

    events.forEach((event) => {
      if(event.name == "Canceled") {
        canceledRequestCounter++
      }
    });
  }

  return canceledRequestCounter;
}