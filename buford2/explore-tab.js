// -------------------------------------poplulate explore tab

function populateExplore(indexData) {
    console.log("Index of Buford2 received:", indexData);

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

    let explore = document.body.getElementsByClassName("main-list")[0];
    for (const key in indexData) {
        let item = indexData[key];
        if (item.type === "dir") {
            explore.appendChild(makeDirElement(item.name))
        }
    }
}

fetch("../lib/buford2/index.json")
    .then(res => res.json())
    .then(populateExplore)