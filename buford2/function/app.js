import bu2 from "../../lib/buford2/main.js"

// get function
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const funcName = urlParams.get("func")
console.log("Function:", funcName);


function createInput(name, type) {
    let el = document.createElement('li');
    el.innerHTML = `<input class="param" type="${type}" spellcheck=false></input> <span class="li-title">${name}</span>`;
    return el;
}


// calculate input
function calculateInput(inputElements) {
    let values = [];
    for (let i = 0; i < inputElements.length; i++) values.push(inputElements[i].value);

    values = values.map(val => {
        return val
    });
    console.log("=====================Calculate=====================\n", values);

    let output = bu2Func(...values);
    document.querySelector("body > .output > .out").textContent = output;

    console.log("Calculation output:", output);
    return output;
}

// make page
let func;
let bu2Func = bu2;
function makePage(json) {
    // find function
    let dynamicDir = [];
    let funcKeys;
    function findFunction(dir) {
        for (const key in dir) {
            if (dir[key].type === "func" && key === funcName) {
                dynamicDir.push(key);
                func = dir[key];
                funcKeys = dynamicDir.slice();
            } else if (dir[key].type === "dir") {
                dynamicDir.push(key);
                findFunction(dir[key]);
                dynamicDir.splice(dynamicDir.length-1, 1);
            }
        }
    }
    findFunction(json);
    console.log("Function path:", funcKeys);
    console.log("Function JSON:", func);

    //get real function
    funcKeys.forEach(directory => {
        bu2Func = bu2Func[directory];
    });
    console.log("Actual function", bu2Func);

    // set things
    document.querySelector("body > .title").textContent = func.name;
    document.head.children[0].textContent = func.name;
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


