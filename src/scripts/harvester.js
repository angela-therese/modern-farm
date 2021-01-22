
// Create a scripts/harvester.js module.
// In this module, define and export a harvestPlants function.
// The harvestPlants function must accept the plants array as input.
// The function will return an array of seed objects.
// Iterate the array of growing plants. On each plant, get the value of the output property.
// Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 2...
// {
//     type: "Peanut",
//     height: 30,
//     output: 2
// }
// Then the array that the function returns should have two identical objects added to it.
// [
//     {
//         type: "Peanut",
//         height: 30,
//         output: 2
//     },
//     {
//         type: "Peanut",
//         height: 30,
//         output: 2
//     }
// ]
// Again, the exception is corn. Half of your corn will be sold to cattle ranchers, so only half of the output of each corn plant will be added to the array that this function returns.
// Checking Your Logic
// In the main.js module, get the array of plants from the field module, and then harvest them by invoking the appropriate function that you defined above. Make sure you specify the array of plants as an argument to the harvesting function.

// Then use console.log() to see your new array of harvested food to sell.




export const harvestPlants = (plantsArray) => {
    let harvestedObjects = []
    for(const plant of plantsArray) {
        let n = 0;
        if(plant.type === "corn"){
            n = plant.output/2
        }
        else {
            n = plant.output
        }
        for(let i = 0; i < n; i++){
        harvestedObjects.push(plant)
         }
        

    }
    
    return harvestedObjects

}

