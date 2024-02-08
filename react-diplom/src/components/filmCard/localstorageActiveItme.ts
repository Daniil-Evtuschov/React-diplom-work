import { filmCardProps, filmsCardsInt } from "../../interfases"

function setLocalStorageItem(item:filmCardProps) {
    localStorage.setItem('local',JSON.stringify(item))
}

export default setLocalStorageItem