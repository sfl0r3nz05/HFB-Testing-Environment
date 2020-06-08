# 2Org1PeerGoleveldbRaft

- benchmarks folder
  Contains the configuration files in order to test the smart contract.
- network folder
  Contains:
  network options to deploy in docker-compose files
  crypto configuration files (certificates, channel, genesis block, configtx.yaml, crypto-config.yaml)
  connection-profile to enable caliper to recognize the network
  prometheus/grafana configuration

1. npm i @hyperledger/caliper-cli
2. npm init -y
3. npm install --only=prod @hyperledger/caliper-cli
4. npx caliper bind --caliper-bind-sut fabric --caliper-bind-sdk 2.0.0

- Run a network of 2ORG 1PEER 3ORDERER RAFT CONSENSUS GOLEVELDB

5. npx caliper launch master --caliper-workspace . --caliper-benchconfig benchmarks/fabcar/config.yaml --caliper-networkconfig networks/connection-profile/2org1peergoleveldb_raft/fabric-go-tls.yaml

- Run a network of 2ORG 1PEER 3ORDERER RAFT CONSENSUS COUCHDB

6. npx caliper launch master --caliper-workspace . --caliper-benchconfig benchmarks/fabcar/config.yaml --caliper-networkconfig networks/connection-profile/2org1peergoleveldb_raft/fabric-go-tls-prometheus.yaml

- Run a network of 2ORG 1PEER 3ORDERER RAFT CONSENSUS GOLEVELDB

7. npx caliper launch master --caliper-workspace . --caliper-benchconfig benchmarks/fabcar/config.yaml --caliper-networkconfig networks/connection-profile/2org1peergoleveldb_kafka/fabric-go-tls-prometheus.yaml

- Run a network of 2ORG 1PEER 3ORDERER RAFT CONSENSUS COUCHDB

7. docker rm -f \$(docker ps -a -q)
8. docker volume rm \$(docker volume ls -q)
