console.log("Welcome to the main module")
import { createPlan } from './plan.js'

import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower} from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant, usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from "./harvester.js";


const testSeedObject = {

    type: "asparagus",
    height: 24, 
    output: 4

}
//this is a test to see if the addPlants and usePlants function works--TILLING THE FIELDS
addPlant(testSeedObject)
let getPlantsInField = usePlants()
console.log(getPlantsInField)
//

//SOWING THE FIELDS
// In the main.js module, invoke the function that plants all of the seeds, 
const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
// and then get the plants array from the fields.js module. Then use console.log() to see if the plants array has been populated correctly.
console.log(usePlants())



 // COLLECTING THE HARVEST In the main.js module, get the array of plants from the field module,  and then harvest them by invoking the appropriate function that you defined in the harvester.js file
 let getPlantsFromField = usePlants();
 console.log(getPlantsFromField);
 console.log(harvestPlants(getPlantsFromField))
 

 
//  Make sure you specify the array of plants as an argument to the harvesting function.Then use console.log() to see your new array of harvested food to sell.





































// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)
// const cornSeed = createCorn()
// console.log(cornSeed)
// const potatoSeed = createPotato()
// console.log(potatoSeed)
// const soybeanSeed = createSoybean()
// console.log(soybeanSeed)
// const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)
// const wheatSeed = createWheat()
// console.log(wheatSeed)

// addPlant(potatoSeed)
// const fieldPlants = usePlants()
// console.log(fieldPlants)
// addPlant(wheatSeed)
// console.log(fieldPlants)
// addPlant(cornSeed)
// console.log(fieldPlants)