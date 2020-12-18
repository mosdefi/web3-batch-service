import BatchCall from "web3-batch-call";
import regeneratorRuntime from "regenerator-runtime";
require('dotenv').config()
const { URL } = require('url');
const { parse: parseQuery } = require('querystring');

const provider = process.env.PROVIDER_URL;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;
const port = process.env.PORT || 3000;

const express = require('express');
const app = express();
const batchCall = new BatchCall({
  groupByNamespace: true,
  simplifyResponse: true,
  provider,
  etherscan: {
    apiKey: etherscanApiKey,
    delay: 300,
  },
});

const serverOrigin = `http://localhost:${port}`;

app.use(express.json());

app.listen(port, () => {
  console.log(`web3-batch-service listening at ${serverOrigin}`);
});

app.post('/', async (req, res) => {
  const url = new URL(req.url, serverOrigin);
  const callOptions = getBlockHeightAndResolution(url);
  const response = await web3BatchCall(req.body, callOptions);

  res.send(response);
});

async function web3BatchCall(contracts, callOptions) {
  return await batchCall.execute(contracts, callOptions);
}

function getBlockHeightAndResolution(url) {
  const parsedUrl = parseQuery(url.search.substr(1));
  let { blockHeight, blockResolution } = parsedUrl;
  blockHeight = parseInt(blockHeight) || 1;
  blockResolution = parseInt(blockResolution) || 1;

  return { blockHeight, blockResolution };
}
