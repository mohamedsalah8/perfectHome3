let startJourny = document.getElementById("startJourny");
let showJourny = document.getElementById("showJourny");
let cctv = document.getElementById("CCTV");
let journy = document.querySelectorAll(".journy");
let cardinfo = document.getElementById("card-info");
let svg = document.getElementById("svg");
let smartGarage = document.getElementById("smartGarage");
let energy = document.getElementById("energy");
let smartCurtains = document.getElementById("smartCurtains")
let smartLightBtn = document.getElementById("smartLight")
// Variables
let smartCamElements = svg.querySelectorAll(".smartCam");
let rect = svg.querySelectorAll("rect, circle");

let transWithAction = document.querySelectorAll('.transWithAction');

let garageElements = svg.querySelectorAll(".garage");
let otherElements = svg.querySelectorAll("rect:not(.smartCam)");
let otherElements2 = svg.querySelectorAll("rect:not(.garage)");
let smartEnergy = svg.querySelectorAll(".smartEnergy");
let otherElements3 = svg.querySelectorAll("rect:not(.smartEnergy):not(.garage)");

let smartLightElements = svg.querySelectorAll(".smartLight");
 let otherElementsSmartLight = svg.querySelectorAll("rect:not(.smartLightRect)");

let smartCurtainsElements = svg.querySelectorAll(".smartCurtains");
let otherElementsCurtains = svg.querySelectorAll("rect:not(.smartCurtainsParent)");


// Constants
const classes = ['translevel1', 'translevel2', 'translevel3', 'translevel4', 'translevel5', 'translevel6'];

// Event Listeners
startJourny.addEventListener("click", () => {
    cardinfo.classList.replace('hideText', 'showText');
    svg.classList.add('svgTransform');

    for (let i = 0; i < journy.length; i++) {
        journy[i].classList.add('hideText');
    }
    for (let i = 0; i < classes.length; i++) {
        let level = document.getElementById("level" + (i + 1));
        level.classList.add(classes[i]);
    }
    highlightSmartCam();
});

showJourny.addEventListener("click", () => {
    for (let i = 0; i < journy.length; i++) {
        journy[i].classList.replace('hideText', 'showText');
    }
    cardinfo.classList.replace('showText', 'hideText');
    svg.classList.remove('svgTransform');
    resetFill();
});

cctv.addEventListener("click", () => {
    resetGrage()
    resetCurtains()
    resetSmartEnergy()
    resetSmartLight()
    highlightSmartCam();

})
smartGarage.addEventListener("click", () => {
    resetCurtains()
    resetSmartEnergy()
    resetSmartLight()
    resetSmartEnergy()
    resetCurtains()
    highlightGrage();
});

energy.addEventListener("click", () => {
    resetGrage()
    resetCurtains()
    resetCam()
    resetSmartLight()
     highlightSmartEnergy();
    highlightGrage();
});
smartCurtains.addEventListener("click", () => {
    resetCam()
    resetSmartLight()
    resetSmartEnergy()
    highlightCurtains()
})
smartLightBtn.addEventListener("click", () => {
    resetGrage()
    resetSmartEnergy()
    resetCurtains()
    resetCam()
    highlighSmartLight()
})



// Functions
function highlightSmartCam() {
    smartCamElements.forEach(function (element) {
        element.setAttribute("stroke", "#E99A00");
        element.setAttribute("stroke-width", "2");
        element.setAttribute("rx", "48");
        element.setAttribute("opacity", "1");

    });
    otherElements.forEach(function (element) {
        element.setAttribute("opacity", "0.5");
    });
}
function resetCam() {
    smartCamElements.forEach(function (element) {
        element.removeAttribute("stroke");
        element.removeAttribute("stroke-width");
        element.removeAttribute("rx");
    });

}

function highlightGrage() {
    garageElements.forEach(function (element) {
        element.setAttribute("opacity", "1");
    });
    otherElements2.forEach(function (element) {
        element.setAttribute("opacity", "0.5");
    });
    resetCam()
}
function resetGrage() {
    garageElements.forEach(function (element) {
        element.removeAttribute("opacity");
    });
    otherElements2.forEach(function (element) {
        element.removeAttribute("opacity");
    });
}
// 
//  
function highlightSmartEnergy() {
    smartEnergy.forEach(function (element) {
        element.setAttribute("stroke", "#E99A00");
        element.setAttribute("stroke-width", "2");
        element.setAttribute("r", "50");
        element.setAttribute("cy", "550");
        element.setAttribute("cx", "210");
    });
    otherElements3.forEach(function (element) {
        element.setAttribute("opacity", "0.5");
    });
}
function resetSmartEnergy() {
    smartEnergy.forEach(function (element) {
        element.removeAttribute("stroke");
        element.removeAttribute("stroke-width");
        element.removeAttribute("r");
        element.removeAttribute("cy");
        element.removeAttribute("cx");
    });
    otherElements3.forEach(function (element) {
        element.removeAttribute("opacity", "0.5");
    });
}
function highlightCurtains() {
    smartCurtainsElements.forEach(function (element) {
        element.setAttribute("stroke", "#E99A00");
        element.setAttribute("stroke-width", "2");
        element.setAttribute("rx", "48");
        element.setAttribute("opacity", "1");

        transWithAction.forEach(transWithAction => {
            transWithAction.classList.add('translevelWithAction');
        });
        otherElementsCurtains.forEach(function (element) {
            element.setAttribute("opacity", "0.5");
        });

    });
}
function resetCurtains() {
    smartCurtainsElements.forEach(function (element) {
        element.removeAttribute("stroke");
        element.removeAttribute("stroke-width");
        element.removeAttribute("rx");
        transWithAction.forEach(transWithAction => {
            transWithAction.classList.remove('translevelWithAction');
        });
        otherElementsCurtains.forEach(function (element) {
            element.removeAttribute("opacity");
        });
    });
}

function highlighSmartLight() {
    smartLightElements.forEach(function (element) {
        element.setAttribute("stroke", "#E99A00");
        element.setAttribute("stroke-width", "3");
        element.setAttribute("rx", "48");
 
        otherElementsSmartLight.forEach(function (element) {
            element.setAttribute("opacity", "0.5");
        });
    });
}

function resetSmartLight() {
    smartLightElements.forEach(function (element) {
        element.removeAttribute("stroke", "#E99A00");
        element.removeAttribute("stroke-width", "2");
        element.removeAttribute("rx", "48");

        otherElementsSmartLight.forEach(function (element) {
            element.removeAttribute("opacity", "0.5");
        });
    });
}


function resetFill() {
    rect.forEach(function (element) {
        element.removeAttribute("stroke");
        element.removeAttribute("rx");
        element.removeAttribute("r");
        element.removeAttribute("cy");
        element.removeAttribute("cx");
        element.classList.remove("translevelWithAction");

    });
    otherElements.forEach(function (element) {
        element.removeAttribute("opacity", "1");
    });

}
