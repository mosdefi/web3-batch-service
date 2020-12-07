# web3-batch-service

## Installation
`npm install`

## Configuration
Insert your `PROVIDER_URL` pointing to infura and `ETHERSCAN_API_KEY` into a local .env file or pass them directly to npm.

## Usage

### Start the service
`npm start`

### Use the service 
`curl -X POST http://localhost:3000/ -d@sample_request.json -H 'Content-Type: application/json' | json_pp`
