import {Shorty} from './src/Shorty.js';
const deflated = new Shorty().deflate("First test string, hello world! Hello world? Hello world!");
const inflated = new Shorty().inflate(deflated);
console.log("deflated", deflated);
console.log("inflated", inflated);
