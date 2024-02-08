import { filmCardProps, filmsCardsInt } from "../../interfases"

const favoriteMassiv: filmCardProps[]=[]

function addToFavorite(item:filmCardProps,event:React.MouseEvent) {
    event.stopPropagation() 
    favoriteMassiv.push(item)

    function removeDuplicates(arr: any[]): any[] {
    return arr.filter((obj, index) => {
      return (
        index === arr.findIndex((item) => JSON.stringify(item) === JSON.stringify(obj))
      );
    });
  }
  
  let localStorageMassiv:any = localStorage.getItem('favorite')
  
  let parceLocalStorageMassiv:any = JSON.parse(localStorageMassiv) 
  
  if (parceLocalStorageMassiv===null) {parceLocalStorageMassiv=['']}
  parceLocalStorageMassiv.map((item:filmCardProps)=>item?['']:parceLocalStorageMassiv.pop())

  let mass:any = [...favoriteMassiv,...parceLocalStorageMassiv]
  
  let uniqueArray = removeDuplicates(mass);

 localStorage.setItem('favorite',JSON.stringify(uniqueArray))

}
export default addToFavorite

