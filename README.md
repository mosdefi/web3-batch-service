# web3-batch-service
This is a small wrapper service for the [web3-batch-call](https://github.com/x48-crypto/web3-batch-call) library.
It's helpful if you want to use its functionality outside of JS world by simply posting the JSON directly to it.

## Installation
`npm install`

## Configuration
Insert your `PROVIDER_URL` pointing to infura and `ETHERSCAN_API_KEY` into a local .env file or pass them directly to npm.

## Usage

### Start the service
`npm start`

### Use the service 
`curl -X POST http://localhost:3000/ -d@sample_request.json -H 'Content-Type: application/json' | json_pp`
