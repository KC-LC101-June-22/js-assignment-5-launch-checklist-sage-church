// Write your helper functions here!
require('isomorphic-fetch');

function validateInput(testInput) {

    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

    let alertMessage = 
     "All fields are required. 'Pilot Name' and 'Co-pilot Name' fields must contain letters. 'Fuel Level (L)' and 'Cargo Mass (kg)\ must contain only numbers.";
    let empty = "Empty";
    let isANumber = "Is a Number";
    let notANumber = "Not a Number";
    let launchStatus = document.getElementById("launchStatus");

    if (
        validateInput(pilot) === empty || 
        validateInput(pilot) === isANumber ||
        validateInput(copilot) === empty ||
        validateInput(copilot) === isANumber ||
        validateInput(fuelLevel) === empty ||
        validateInput(fuelLevel) === notANumber ||
        validateInput(cargoMass) === empty ||
        validateInput(cargoMass) === notANumber
    ) {

        alert(alertMessage);

    } else if (
        Number(fuelLevel) < 10000 &&
        Number(cargoMass) > 10000
    ) {
        
        list.style.visibility = "visible";
        list.querySelector("#pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        list.querySelector("#copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
        list.querySelector("#fuelStatus").innerHTML = "Fuel level too low for launch";
        list.querySelector("#cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
        
    } else if (Number(fuelLevel) < 10000) {

        list.style.visibility = "visible";
        list.querySelector("#pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        list.querySelector("#copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
        list.querySelector("#fuelStatus").innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";

    } else if (Number(cargoMass) > 10000) {

        list.style.visibility = "visible";
        list.querySelector("#pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        list.querySelector("#copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
        list.querySelector("#cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        list.querySelector("#fuelStatus").innerHTML = "Fuel level high enough for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";

    } else {

        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
        list.querySelector("#cargoStatus").innerHTML = "Cargo mass low enough for launch";
        list.querySelector("#fuelStatus").innerHTML = "Fuel level high enough for launch";

    }
    
   
}

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML = 
        `<h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">`;

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {

    let planetsLength = planets.length;
    let randomIndex = Math.floor(Math.random() * planetsLength);

    return planets[randomIndex];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;