FROM node:13

RUN mkdir -p /app/web3-batch-service
WORKDIR /app/web3-batch-service
ADD . /app/web3-batch-service
RUN npm install
CMD npm start
