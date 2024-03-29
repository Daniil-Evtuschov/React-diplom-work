import { filmCardProps, filmsCardsInt } from "../../interfases"

const favoriteMassiv: filmsCardsInt[]=[]

function deleteFromFavorite (item:filmCardProps,event:React.MouseEvent) {
  event.stopPropagation() ;

  let localStorageMassiv:any|null = localStorage.getItem('favorite');
  let parceLocalStorageMassiv:any|null = JSON.parse(localStorageMassiv);
  
  
  if (parceLocalStorageMassiv===null) {parceLocalStorageMassiv=['']}
  
  parceLocalStorageMassiv.map((item:filmsCardsInt)=>item?['']:parceLocalStorageMassiv.pop())


  let mass:filmsCardsInt[]|null = [...favoriteMassiv,...parceLocalStorageMassiv]

  const updatedCards = mass.filter((card:filmsCardsInt) => card.id !== item.id);

  localStorage.setItem('favorite',JSON.stringify(updatedCards))  
}

export default deleteFromFavorite
