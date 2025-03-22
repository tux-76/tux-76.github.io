// Sets the colors for the site to make it interesting

// colormind.io API format:
// 
// Input and output format: all in rgb
//   [light-shades, light-accent, main, dark-accent, dark-shades]
// 
// Light shades: background
// Light accent: a light accessory color
// Primary: main brand color
// Dark accent: a dark accessory color
// Dark shades: text
// 
// Note: you can invert the roles of light and dark shades
// 
// Input can specify certain colors and let the api do the rest
//   ["N","N",[255, 50, 50],"N","N"]

// Set colors
// ==============
function setCSS(attribute, rgb, elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style = `${attribute}:rgb(${rgb.toString()});`
    }
}

function setSiteColorsFromPalette(palette) {
    // Set palette
    console.log("Color palette:", palette)
    let colorLS = palette[0], colorLA = palette[1], colorMain = palette[2], colorDA = palette[3], colorDS = palette[4]
    console.log("Light Shades:", colorLS)
    console.log("Light Accent:", colorLA)
    console.log("Main:", colorMain)
    console.log("Dark Accent:", colorDA)
    console.log("Dark Shades:", colorDS)

    // Text colors
    setCSS("color", colorLS, document.getElementsByClassName("textColor-li-shade"))
    setCSS("color", colorLA, document.getElementsByClassName("textColor-li-accent"))
    setCSS("color", colorMain, document.getElementsByClassName("textColor-primary"))
    setCSS("color", colorDA, document.getElementsByClassName("textColor-da-accent"))
    setCSS("color", colorDS, document.getElementsByClassName("textColor-da-shade"))

    // Background colors
    setCSS("background-color", colorLS, document.getElementsByClassName("background-li-shade"))
    setCSS("background-color", colorLA, document.getElementsByClassName("background-li-accent"))
    setCSS("background-color", colorMain, document.getElementsByClassName("background-primary"))
    setCSS("background-color", colorDA, document.getElementsByClassName("background-da-accent"))
    setCSS("background-color", colorDS, document.getElementsByClassName("background-da-shade"))

    document.body.style = "display:block;"
}


// Do all the fetching and crap
// ==============================
function setSiteColors(input, model="default") {
    console.log("Randomizing Colors...")
    var url = "http://colormind.io/api/";
    var data = {
        model : model,
        input : input
    }

    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            try {
                setSiteColorsFromPalette(JSON.parse(http.responseText).result);
            } catch {
                console.error("Response was not handled well:", http.responseText)
            }
        }
    }

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
}

// Check the search params to see if colors have been activated
let urlParams = new URLSearchParams(window.location.search)
let colorInput = urlParams.get("c")
console.log("Site Color Input:", colorInput)

// See if a color has been inputted
if (colorInput !== null) {
    if (colorInput === "any")
        setSiteColors(["N","N","N","N","N"])
    else if (colorInput === "main")
        setSiteColors(["N","N",[255,147,0],"N","N"])
    else
        setSiteColors(JSON.parse(colorInput));
}