import * as bu2 from "../../lib/buford2/main.js"

// get function
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const funcName = urlParams.get("func")
console.log("Function:", funcName);


function createInput(name, type) {
    let el = document.createElement('li');
    el.innerHTML = `<input class="param" type="${type}"></input> <span class="li-title">${name}</span>`;
    return el;
}


// calculate input
function calculateInput(inputElements) {
    let values = [];
    for (let el in inputElements) values.push(el);

    values = values.map(val => {
        return val
    });

    console.log("Calculate", inputElements, bu2.alge)
}

// make page
function makePage(json) {
    // find function
    let func;
    function findFunction(dir) {
        for (const key in dir) {
            if (dir[key].type === "func" && key === funcName) func = dir[key];
            else if (dir[key].type === "dir") findFunction(dir[key])
        }
    }
    findFunction(json);
    console.log("Function JSON:", func);

    // set things
    document.querySelector("body > .title").textContent = func.name;
    document.querySelector(".description > p").textContent = func.desc;
    let inputList = document.querySelector(".run > ol");
    func.inputs.forEach((inName, i) => {
        inputList.append(createInput(inName, func.inTypes[i]));
    });

    // set event listeners
    let inputElements = document.querySelectorAll(".run > ol li > .param");
    let listElements = document.querySelectorAll(".run > ol li")
    inputElements.forEach((input, i) => {
        input.onkeypress = (e) => {
            if (e.key === "Enter") {
                if (listElements[i].nextElementSibling !== null)
                    listElements[i].nextElementSibling.children[0].focus()
                else calculateInput(inputElements);
            }
        }
    });
}


// get json
fetch("../../lib/buford2/index.json")
    .then(res => res.json())
    .then(makePage);


