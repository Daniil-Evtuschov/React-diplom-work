import { filmsCardsInt } from "../../interfases"

function setLocalStorageItem(item:filmsCardsInt) {
    localStorage.setItem('local',JSON.stringify(item))
}

export default setLocalStorageItem