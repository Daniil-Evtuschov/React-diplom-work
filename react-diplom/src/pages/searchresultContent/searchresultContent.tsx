import { useSelector } from "react-redux";
import { InitialStateInt, filmsCardsInt } from "../../interfases";
import SearchResult from "../../components/searchResult/searchResult";

const SearchResultContent =()=>{
    const films = useSelector((state:InitialStateInt)=>state.searchFilms); 

    return(
        <>
        <div>
            {/* кинопоиск */}
            {(films || []).map((item:filmsCardsInt)=><SearchResult 
            id={item.id}
            rating={item.rating.imdb} 
            poster={item.poster ? item.poster.url:''} 
            filmName={item.name} 
            year={item.year} 
            description={item.description} 
            genres={item.genres.map((item:any)=>item.name +' ')}
            key={item.id}/>)}
        </div>
         </>
    )
}

export default SearchResultContent
