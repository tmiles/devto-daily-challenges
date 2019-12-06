// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


// let str = "http://github.com/thepracticaldev/dev.to";
// let str = "https://twitter.com/explore";
// let str = "http://www.youtube.com";
let str = "http://blog.youtube.com";
const domainName = url => url.replace(/https?:\/\/(?:www\.)?/, "").split(".")[0];


console.log(domainName(str));

