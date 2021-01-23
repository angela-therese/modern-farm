const plantsInField = []; //stores all the plants growing in the field; those plants are generated from the yearly plan file 


export const addPlant = (seedObject) => {
    if(Array.isArray(seedObject)){
        for(const item of seedObject){
            plantsInField.push(item)
        } 
    
    } else {
        plantsInField.push(seedObject)
    }
    


}

//returns the most recent version of the array to which we are pushing seeds above
export const usePlants = () => {

    return plantsInField.slice()

}

