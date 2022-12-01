let nav = document.querySelector("body > .nav");
let hostname = window.location.origin;

fetch(hostname + "/buford2/navigation.json").then(response => response.json).then(function (navJSON) {
    navJSON.keys
});
