import { filmsCardsInt } from "../../interfases"

const favoriteMassiv: filmsCardsInt[]=[]

function deleteFromFavorite (item:filmsCardsInt,event:React.MouseEvent) {
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
  parceLocalStorageMassiv.map((item:filmsCardsInt)=>item?['']:parceLocalStorageMassiv.pop())

  let mass:any = [...favoriteMassiv,...parceLocalStorageMassiv]
  
  console.log(parceLocalStorageMassiv);

  let array = mass;
  
  let uniqueArray = removeDuplicates(array);
  console.log(uniqueArray);

localStorage.setItem('favorite',JSON.stringify(uniqueArray))

}
export default deleteFromFavorite
