import { harvestPlants } from "./harvester.js"

export const catalog = (harvestedArray) => {
    let plantContainer = document.querySelector("#plant")
for(const item of harvestedArray){
    console.log(item)
    plantContainer.innerHTML += `<section class="plant">${item.type}</section>`
    }
}

