let allPlantsInField = []


//pushes the seedObject plant into the array we created above
export const addPlant = (seedObject) => {
    
   
    allPlantsInField.push(seedObject)


}

//returns the most recent version of the array to which we are pushing seeds above
export const usePlants = () => {

    return allPlantsInField

}

