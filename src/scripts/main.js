console.log("Welcome to the main module")
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower} from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant } from './field.js'
import { usePlants } from './field.js'

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)
const cornSeed = createCorn()
console.log(cornSeed)
const potatoSeed = createPotato()
console.log(potatoSeed)
const soybeanSeed = createSoybean()
console.log(soybeanSeed)
const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)
const wheatSeed = createWheat()
console.log(wheatSeed)

addPlant(potatoSeed)
const fieldPlants = usePlants()
console.log(fieldPlants)
addPlant(wheatSeed)
console.log(fieldPlants)
addPlant(cornSeed)
console.log(fieldPlants)