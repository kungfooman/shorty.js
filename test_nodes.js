import {Shorty} from './src/Shorty.js';
const s = new Shorty();
const deflated = s.deflate("test test test");
console.log("deflated", deflated);
console.log("s nodes", s.nodes);


const s2 = new Shorty();
console.log(s2.inflate('7FW7@\x10X'));
console.log("s2 nodes", s2.nodes);