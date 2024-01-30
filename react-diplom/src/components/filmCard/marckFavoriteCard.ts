import { filmCardProps } from "../../interfases";

function markFavoriteCard(props:filmCardProps) {
    let localStorageMassiv:any = localStorage.getItem('favorite')
    let parceLocalStorageMassiv:filmCardProps[] = JSON.parse(localStorageMassiv)
    let markCard = parceLocalStorageMassiv.find((item:filmCardProps)=>item.id===props.id)
    if (markCard) {
        return 'activeCard'
    }
    else{return'favorite'}
}

export default markFavoriteCard