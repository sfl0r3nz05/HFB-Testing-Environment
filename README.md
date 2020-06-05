# 2Org1PeerGoleveldbRaft

1. npm i @hyperledger/caliper-cli
2. npm init -y
3. npm install --only=prod @hyperledger/caliper-cli
4. npx caliper bind --caliper-bind-sut fabric --caliper-bind-sdk 2.0.0
5. npx caliper launch master --caliper-workspace . --caliper-benchconfig benchmarks/fabcar/config.yaml --caliper-networkconfig networks/connection-profile/2org1peergoleveldb_raft/fabric-go-tls.yaml
