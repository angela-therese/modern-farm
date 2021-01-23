
import { createPlan } from './plan.js' //step 1: Harvest Plan step 2: individual seed functions
import { usePlants, addPlant } from './field.js' 
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js';



const yearlyPlan = createPlan();
console.log(yearlyPlan)

addPlant(yearlyPlan) //STEP 4 get array of plants from the field module



let plantObjects = plantSeeds(yearlyPlan) //plantSeeds creates an array of plant objects based on the plan array (yearlyPlan); this was in the instruction of Step 4 Sowing the Field
console.log(plantObjects) //logs the array of objects

const usingPlants = (usePlants())
console.log(usingPlants)

const harvest = harvestPlants(usingPlants) //call harvestPlants function to return an array of harvested plant objects--these will be the "for sale" harvest items in last step; uses usePlants() because that returns the copy of the array that has the randomly generated plant names. 
console.log(harvest)

console.log(catalog(harvest))

