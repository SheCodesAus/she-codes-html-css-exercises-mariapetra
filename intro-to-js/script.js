window.onload = function() {
    // start
    const starterDiv = document.getElementById("starter-div");
    const firstHeading = document.createElement("h2");
    const secondHeading = document.createElement("h2");

    firstHeading.innerText = "This is an H2 created with JS";
    firstHeading.classList.add("js-header");
    starterDiv.appendChild(firstHeading);

    secondHeading.innerText = "This is the second heading";
    secondHeading.classList.add("js-header");
    secondHeading.id = "second-h2";
    starterDiv.appendChild(secondHeading);

    // end
}


function showName(){
    console.log('showName');
    // start
    let name = document.getElementById("name").value;
    document.getElementById("greeting-text").innerText = `Hi ${name}`
    // end
}

function changeColour(colour) {
    // start
    document.body.style.backgroundColor = colour;
    // end
}

function resetColour() {
    document.body.style.backgroundColor = '#FCE166';
}

function toggleLightbulb() {
    // start
    const lightbulb = document.getElementById("light");
    lightbulb.classList.toggle("on")
    // end
}
