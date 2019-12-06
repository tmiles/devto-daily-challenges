// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let str = "apples are cool";
console.log(str.split(" ").map((word) => word.replace(/^./, word[0].toUpperCase())).join(""))