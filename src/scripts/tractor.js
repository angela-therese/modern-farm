import { addPlant, usePlants} from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

 export const plantSeeds = (planArray) => {
        for(const subArray of planArray){
            for(const plant of subArray){
                if(plant === "asparagus"){
                    addPlant(createAsparagus())
                }
                else if(plant === "corn"){
                    addPlant(createCorn())
                }
                else if(plant === "potato"){
                    addPlant(createPotato())
                }
                else if(plant === "soybean"){
                    addPlant(createSoybean())
                }
                else if(plant === "sunflower"){
                    addPlant(createSunflower())
                }
                else if(plant === "wheat"){
                    addPlant(createWheat())
                }
            }


        }

        return usePlants()

 }

