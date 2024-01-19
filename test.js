import {Shorty} from './src/Shorty.js';
/**
 * @param {string} original 
 * @param {number} [tokensize]
 */
function test(original, tokensize) {
  const deflated = new Shorty(tokensize).deflate(original);
  const inflated = new Shorty(tokensize).inflate(deflated);
  console.log("original", original);
  console.log("deflated", deflated);
  console.log("inflated", inflated);
  console.log("should be true", original === inflated);
  console.log('#####');
}
test("First test string, hello world! Hello world? Hello world!");
test(`<span class=\"icon icon-refresh\"></span> �má ÍK </span>`);
for (let i=0; i<20; i++) {
    //console.log("tokensize", i);
    //test(str, i);
}
