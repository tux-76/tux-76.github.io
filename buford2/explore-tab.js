// -------------------------------------poplulate explore tab
function makeDirElement(name) {
    let el = document.createElement('li');
    if (basePath === "./")
        el.innerHTML = `<button class="collapsible">${name}</button><ul class="dropdown-list"></ul>`;
    else
        el.innerHTML = `<button class="collapsible">${name}</button><ul class="dropdown-list"></ul>`;
    return el;
}
function makeFuncElement(name) {
    let el = document.createElement('li');
    el.innerHTML = `<a class="func">${name}</a>`;
    return el;
}

function populateDir(jsonDir, appendTo) {
    for (const key in jsonDir) {
        let jsonItem = jsonDir[key];

        if (jsonItem.type === "dir") {
            let newEl = makeDirElement(jsonItem.name);
            populateDir(jsonItem, newEl.children[1]);

            appendTo.appendChild(newEl);
        } else if (jsonItem.type === "func") {
            let newEl = makeFuncElement(jsonItem.name);

            newEl.children[0].href = `${basePath}function/?func=${key}`;

            appendTo.appendChild(newEl);
        }
    }
}

// set event listeners for collapsibles
function setEventListeners() {
    let colls = document.getElementsByClassName("collapsible");

    for (let i = 0; i < colls.length; i++) {
        colls[i].addEventListener("click", () => {
            colls[i].classList.toggle("active");
            let dropdown = colls[i].nextElementSibling
            if (dropdown.style.display === "none") dropdown.style.display = "block";
            else dropdown.style.display = "none";
        });
        if (basePath !== "./") colls[i].nextElementSibling.style.display = "none";
    };
}

function populateExplore(indexData) {
    console.log("Index of Buford2 received:", indexData);

    let explore = document.body.getElementsByClassName("main-list")[0];
    populateDir(indexData, explore)
    setEventListeners()
}

let basePath = "./";

fetch("../lib/buford2/index.json")
    .then(res => res.json())
    .then(populateExplore)
    .catch((err) => {
        basePath = "../"
        fetch("../../lib/buford2/index.json")
        .then(res => res.json())
        .then(populateExplore)
    })