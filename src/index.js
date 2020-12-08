import BatchCall from "web3-batch-call";
import regeneratorRuntime from "regenerator-runtime";
require('dotenv').config()

const provider = process.env.PROVIDER_URL;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;
const port = process.env.PORT || 3000

const express = require('express');
const app = express();
app.use(express.json());

app.listen(port, () => {
  console.log(`web3-batch-server listening at http://localhost:${port}`);
});

app.post('/', async (req, res) => {
  res.send(await web3BatchCall(req.body));
});

async function web3BatchCall(contracts) {
  const batchCall = new BatchCall({
    groupByNamespace: true,
    provider,
    etherscan: {
      apiKey: etherscanApiKey,
      delay: 300,
    },
  });
  
  return await batchCall.execute(contracts);
}