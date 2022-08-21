// Write your JavaScript code here!

window.addEventListener("load", function() {

   let form = document.querySelector("form");
   let pilotFieldValue = document.getElementById("pilotName").value;
   let copilotFieldValue = document.getElementById("copilotName").value;
   let fuelLevelFieldValue = document.getElementById("fuelLevel").value;
   let cargoMassFieldValue = document.getElementById("cargoMass").value;
   let faultyItems = document.getElementById("faultyItems");
   faultyItems.style.visibility = "hidden";

   form.addEventListener("submit", function(event) {

        event.preventDefault();
        formSubmission(document, faultyItems, pilotFieldValue, copilotFieldValue, fuelLevelFieldValue, cargoMassFieldValue);

   });


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {

       listedPlanets = result;
       console.log(listedPlanets);

   }).then(function () {

       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let randomPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(
            document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image
        );

   })
   
});