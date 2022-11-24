// -------------------------------------poplulate explore tab

function makeDirElement(name) {
    let el = document.createElement('li');
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

            newEl.children[0].href = `./function/?func=${key}`;

            appendTo.appendChild(newEl);
        }
    }
}

function populateExplore(indexData) {
    console.log("Index of Buford2 received:", indexData);

    let explore = document.body.getElementsByClassName("main-list")[0];
    populateDir(indexData, explore)
}

fetch("../lib/buford2/index.json")
    .then(res => res.json())
    .then(populateExplore)