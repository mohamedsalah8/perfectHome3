let startJourny = document.getElementById("startJourny");
let showJourny = document.getElementById("showJourny");
let cctv = document.getElementById("CCTV");
let journy = document.querySelectorAll(".journy");
let cardinfo = document.querySelectorAll(".card-info");
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
let otherElements3 = svg.querySelectorAll("rect:not(.smartEnergy)");
let smartLightElements = svg.querySelectorAll(".smartLight");

let smartLightElements1 = svg.querySelectorAll("#smartLight1");
let smartLightElements2 = svg.querySelectorAll("#smartLight2");
let smartLightElements3 = svg.querySelectorAll("#smartLight3");
let smartLightElements4 = svg.querySelectorAll("#smartLight4");
let smartLightElementsOthers = svg.querySelectorAll("rect:not(.smartLight)");

let otherElementsSmartLight = svg.querySelectorAll("rect:not(.smartLightRect)");

let smartCurtainsElements1 = svg.querySelectorAll("#smartCurtains1");
let smartCurtainsElements2 = svg.querySelectorAll("#smartCurtains2");
let smartCurtainsElements3 = svg.querySelectorAll("#smartCurtains3");
let otherElementsCurtains = svg.querySelectorAll("rect:not(.smartCurtainsParent)");
// hero
let hero = document.getElementById("hero");

// Constants
const classes = ['translevel1', 'translevel2', 'translevel3', 'translevel4', 'translevel5', 'translevel6'];

// Event Listeners
startJourny.addEventListener("click", () => {
    for (let i = 0; i < cardinfo.length; i++) {
        cardinfo[i].classList.replace('hideText', 'showText');
    }
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
    for (let i = 0; i < cardinfo.length; i++) {
        cardinfo[i].classList.replace('showText', 'hideText');

    }
    svg.classList.remove('svgTransform');
    resetFill();
});

cctv.addEventListener("click", () => {
    resetGrage()
    resetCurtains1()
    resetCurtains2()
    resetCurtains3()
    resetSmartEnergy()
    resetSmartLight1()
    resetSmartLight2()
    resetSmartLight3()
    resetSmartLight4()

    highlightSmartCam();

})
smartGarage.addEventListener("click", () => {
    resetCurtains1()
    resetCurtains2()
    resetCurtains3()
    resetSmartEnergy()
    resetSmartLight1()
    resetSmartLight2()
    resetSmartLight3()
    resetSmartLight4()

    resetSmartEnergy()
    highlightGrage();
});

energy.addEventListener("click", () => {
    resetGrage()
    resetCurtains1()
    resetCurtains2()
    resetCurtains3()
    resetCam()
    resetSmartLight1()
    resetSmartLight2()
    resetSmartLight3()
    resetSmartLight4()

    highlightSmartEnergy();
 });
smartCurtains.addEventListener("click", () => {
    resetCam()
    resetSmartLight1()
    resetSmartLight2()
    resetSmartLight3()
    resetSmartLight4()

    resetSmartEnergy()
    highlightCurtains1()
    highlightCurtains2()
    highlightCurtains3()
})
smartLightBtn.addEventListener("click", () => {
    resetGrage()
    resetSmartEnergy()
    resetCurtains1()
    resetCurtains2()
    resetCurtains3()
    resetCam()
    highlighSmartLight1()
    highlighSmartLight2()
    highlighSmartLight3()
    highlighSmartLight4()

})



// Functions
function highlightSmartCam() {
    smartCamElements.forEach(function (element) {
        element.setAttribute("stroke", "#E99A00");
        element.setAttribute("stroke-width", "3"
        );
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
        element.setAttribute("stroke-width", "3");
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
function highlightCurtains1() {
    smartCurtainsElements1.forEach(function (element) {
        element.setAttribute("stroke", "#E99A00");
        element.setAttribute("stroke-width", "3"
        );
        element.setAttribute("rx", "48");
        element.setAttribute("opacity", "1");
        element.setAttribute("r", "55");
        element.setAttribute("cy", "150");
        element.setAttribute("cx", "430");

        transWithAction.forEach(transWithAction => {
            transWithAction.classList.add('translevelWithAction');
        });
        otherElementsCurtains.forEach(function (element) {
            element.setAttribute("opacity", "0.5");
        });

    });
}
function highlightCurtains2() {
    smartCurtainsElements2.forEach(function (element) {
        element.setAttribute("stroke", "#E99A00");
        element.setAttribute("stroke-width", "3"
        );
        element.setAttribute("rx", "48");
        element.setAttribute("opacity", "1");
        element.setAttribute("r", "35");
        element.setAttribute("cy", "230");
        element.setAttribute("cx", "240");

        transWithAction.forEach(transWithAction => {
            transWithAction.classList.add('translevelWithAction');
        });
        otherElementsCurtains.forEach(function (element) {
            element.setAttribute("opacity", "0.5");
        });

    });
}

function highlightCurtains3() {
    smartCurtainsElements3.forEach(function (element) {
        element.setAttribute("stroke", "#E99A00");
        element.setAttribute("stroke-width", "3"
        );
        element.setAttribute("rx", "48");
        element.setAttribute("opacity", "1");
        element.setAttribute("r", "60");
        element.setAttribute("cy", "470");
        element.setAttribute("cx", "830");

        transWithAction.forEach(transWithAction => {
            transWithAction.classList.add('translevelWithAction');
        });
        otherElementsCurtains.forEach(function (element) {
            element.setAttribute("opacity", "0.5");
        });

    });
}

function resetCurtains1() {
    smartCurtainsElements1.forEach(function (element) {
        element.removeAttribute("stroke");
        element.removeAttribute("stroke-width");
        element.removeAttribute("rx");
        element.removeAttribute("opacity");
        element.removeAttribute("r");
        element.removeAttribute("cy");
        element.removeAttribute("cx");
        transWithAction.forEach(transWithAction => {
            transWithAction.classList.remove('translevelWithAction');
        });
        otherElementsCurtains.forEach(function (element) {
            element.removeAttribute("opacity");
        });
    });
}
function resetCurtains2() {
    smartCurtainsElements2.forEach(function (element) {
        element.removeAttribute("stroke");
        element.removeAttribute("stroke-width");
        element.removeAttribute("rx");
        element.removeAttribute("opacity");
        element.removeAttribute("r");
        element.removeAttribute("cy");
        element.removeAttribute("cx");
        transWithAction.forEach(transWithAction => {
            transWithAction.classList.remove('translevelWithAction');
        });
        otherElementsCurtains.forEach(function (element) {
            element.removeAttribute("opacity");
        });
    });
}
function resetCurtains3() {
    smartCurtainsElements3.forEach(function (element) {
        element.removeAttribute("stroke");
        element.removeAttribute("stroke-width");
        element.removeAttribute("rx");
        element.removeAttribute("opacity");
        element.removeAttribute("r");
        element.removeAttribute("cy");
        element.removeAttribute("cx");
        transWithAction.forEach(transWithAction => {
            transWithAction.classList.remove('translevelWithAction');
        });
        otherElementsCurtains.forEach(function (element) {
            element.removeAttribute("opacity");
        });
    });
}

function highlighSmartLight1() {
    smartLightElements1.forEach(function (element) {
        element.setAttribute("stroke", "#E99A00");
        element.setAttribute("stroke-width", "3");
        element.setAttribute("cx", "420");
        element.setAttribute("cy", "380");
        element.setAttribute("r", "30");

        otherElementsSmartLight.forEach(function (element) {
            element.setAttribute("opacity", "0.5");
        });
    });
}
function highlighSmartLight2() {
    smartLightElements2.forEach(function (element) {
        element.setAttribute("stroke", "#E99A00");
        element.setAttribute("stroke-width", "3");
        element.setAttribute("cx", "730");
        element.setAttribute("cy", "435");
        element.setAttribute("r", "30");

        otherElementsSmartLight.forEach(function (element) {
            element.setAttribute("opacity", "0.5");
        });
    });
}
function highlighSmartLight3() {
    smartLightElements3.forEach(function (element) {
        element.setAttribute("stroke", "#E99A00");
        element.setAttribute("stroke-width", "3");
        element.setAttribute("cx", "620");
        element.setAttribute("cy", "480");
        element.setAttribute("r", "25");

        otherElementsSmartLight.forEach(function (element) {
            element.setAttribute("opacity", "0.5");
        });
    });
}
function highlighSmartLight4() {
    smartLightElements4.forEach(function (element) {
        element.setAttribute("stroke", "#E99A00");
        element.setAttribute("stroke-width", "3");
        element.setAttribute("cx", "510");
        element.setAttribute("cy", "180");
        element.setAttribute("r", "25");

        otherElementsSmartLight.forEach(function (element) {
            element.setAttribute("opacity", "0.5");
        });
    });
}
function resetSmartLight1() {
    smartLightElements1.forEach(function (element) {
        element.removeAttribute("stroke", "#E99A00");
        element.removeAttribute("stroke-width", "3");
        element.removeAttribute("cx", "510");
        element.removeAttribute("cy", "180");
        element.removeAttribute("r", "25");
        otherElementsSmartLight.forEach(function (element) {
            element.removeAttribute("opacity", "0.5");
        });
    });
}
function resetSmartLight2() {
    smartLightElements2.forEach(function (element) {
        element.removeAttribute("stroke", "#E99A00");
        element.removeAttribute("stroke-width", "3");
        element.removeAttribute("cx", "510");
        element.removeAttribute("cy", "180");
        element.removeAttribute("r", "25");
        otherElementsSmartLight.forEach(function (element) {
            element.removeAttribute("opacity", "0.5");
        });
    });
}
function resetSmartLight3() {
    smartLightElements3.forEach(function (element) {
        element.removeAttribute("stroke", "#E99A00");
        element.removeAttribute("stroke-width", "3");
        element.removeAttribute("cx", "510");
        element.removeAttribute("cy", "180");
        element.removeAttribute("r", "25");
        otherElementsSmartLight.forEach(function (element) {
            element.removeAttribute("opacity", "0.5");
        });
    });
}
function resetSmartLight4() {
    smartLightElements4.forEach(function (element) {
        element.removeAttribute("stroke", "#E99A00");
        element.removeAttribute("stroke-width", "3");
        element.removeAttribute("cx", "510");
        element.removeAttribute("cy", "180");
        element.removeAttribute("r", "25");
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

// staticBackdrop 

window.addEventListener('resize', function () {
    var body = document.querySelector('body');
    var windowWidth = window.innerWidth;
    var staticBackdrop = document.getElementById("staticBackdrop")
    if (windowWidth < 992) {
        body.classList.add('small-screen');
        staticBackdrop.classList.replace('offcanvas-start', 'offcanvas-bottom');
        startJourny.addEventListener("click", function () {
            hero.classList.add("pt-5")
        })
    } else {
        body.classList.remove('small-screen');
        staticBackdrop.classList.replace('offcanvas-bottom', 'offcanvas-start')


    }
});

window.dispatchEvent(new Event('resize'));