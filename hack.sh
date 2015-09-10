# vulcanize fails on octal values in code
sed -i.bak "s/ 0777/ 511/" node_modules/ipfs-api/dist/ipfsapi.js 
