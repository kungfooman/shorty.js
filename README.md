# shorty.js - Efficient compression of short strings

<IMG SRC="shorty.jpg">

shorty.js implements an adaptive huffman algorithm that will allow you to efficiently compress streams of short strings without buffering, like the updates to your player's position, or chat messages .. 

Info, Docs and live sample on my blog : <https://enkimute.github.io/shorty.js/>

Usage from `node`:

```js
const {Shorty} = (await import("./src/Shorty.js"));
const deflated = new Shorty().deflate("First test string, hello world! Hello world? Hello world!");
const inflated = new Shorty().inflate(deflated);
console.log("inflated", inflated);
```