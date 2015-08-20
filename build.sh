node_modules/.bin/vulcanize --inline-css --inline-scripts index.html | ipfs add | awk '{print $2}'
