// get function
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const funcName = urlParams.get("func")
console.log("Function:", funcName);


// make page
function makePage(json) {
    
    document.querySelector("body > .title").textContent = funcName;
}


// get json
fetch("../lib/buford2/index.json")
    .then(res => res.json())
    .then(makePage);


