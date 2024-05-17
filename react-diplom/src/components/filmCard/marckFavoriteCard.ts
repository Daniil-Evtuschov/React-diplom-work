import { filmCardProps } from "../../interfases";

function markFavoriteCard(props:filmCardProps) {
    let localStorageMassiv:any = localStorage.getItem('favorite')
    let parceLocalStorageMassiv:filmCardProps[] = JSON.parse(localStorageMassiv)
    if (parceLocalStorageMassiv===undefined) {
        localStorage.setItem('favorite',JSON.stringify([]))
    }else{}
    if (parceLocalStorageMassiv!=undefined) {
        let markCard = parceLocalStorageMassiv.find((item:filmCardProps)=>item.id===props.id)  
    if (markCard) {
        return 'activeCard'
    }
    else{return'favorite'}
    }else{}
    

}

export default markFavoriteCard