mkdir -p build

node_modules/.bin/vulcanize --inline-css --inline-scripts index.html | node_modules/.bin/crisper -h build/index.html -j build/script.js

ipfs add -r build | tail -1 | awk '{print $2}'
