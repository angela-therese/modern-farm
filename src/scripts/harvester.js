
export const harvestPlants = (plantsArray) => {
    let harvestedObjects = [];
    for(const plant of plantsArray) {
        let n = 0;
        if(plant.type === "Corn"){
            n = plant.output/2;
        }
        else {
            n = plant.output
        }
        for(let i = 0; i < n; i++){
        harvestedObjects.push(plant);
         }
        

    }
    
    return harvestedObjects

}


