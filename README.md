starlog
=======

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io) [![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://ipfs.io/) [![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs) [![Dependency Status](https://david-dm.org/ipfs/starlog.svg?style=flat-square)](https://david-dm.org/ipfs/starlog)

> 

wip

# Description

Starlog is a way of publishing a blog-type feed, without requiring any specific servers to store it. This is accomplished through IPFS content addressable data structures.

Each user running the app for the first time, will be asked to initialize a feed. This is done by checking if the local ipns name points to an object with `{"type": "starlog"}` encoded as JSON in the data portion of the object.

## Root object

The root starlog object has a data portion with the name of the log, and also a link to the actual data structure representation of the log.

It can optionally also contain a link to an image, used as the blog icon.

## The log structure

A [Finger Tree](https://en.wikipedia.org/wiki/Finger_tree) is used to store the log entries. This is an append-only version of this structure, requiring no balancing. This layout of data allows constant time access to the first and last elements of the feed.

See also [krl/aolog](https://github.com/krl/aolog).

## Search

Search is implemented by taking the text of the entries in the leaves of the tree, and construct a bloom filter out of them.

When you search for one or more words, they are also made into a (very sparse) [bloom filter](https://en.wikipedia.org/wiki/Bloom_filter). You can then check this against whole subtrees, and throw them away if they give a negative.

# Dev

### Install

Starlog uses both [npm](https://www.npmjs.com/) and [Bower](http://bower.io/) to install dependencies. If you do not have them, you'll need to install them first.

```bash
bower install
npm install
````

### Run

Make sure your ipfs daemon is running with API_ORIGIN set to '*':

```bash
export API_ORIGIN="*"
ipfs daemon
```

Leave that running, and then run the followingin a new console window:

```bash
$ npm run serve
# open in localhost:8082
```

## subcommands

* ```npm run serve``` - Opens the app in your local browser on 8082, redirects `/ipfs` and `/api` calls to your ipfs daemon on port 5001.  

* ```npm run local``` - Packs up the app with vulcanize, adds it to ipfs, and opens the resulting hash in your local api gateway.  
For this command to avoid 403, the ipfs daemon must be started in unrestricted-api mode:  

  ```bash
  ipfs daemon --unrestricted-api
  ```

* ```npm run gateway``` - Packs the app up and runs it from the ipfs.io gateway.
