import { useSelector } from "react-redux";
import  searchResultContent  from "./searchresultContent.module.css";
import { InitialStateInt, filmsCardsInt, filmsCardsProps } from "../../interfases";
import SearchResult from "../../components/searchResult/searchResult";

const SearchResultContent =()=>{
    const films = useSelector((state:InitialStateInt)=>state.searchFilms); 

    return(
        <>
        <div className={searchResultContent.MainContentLayout}>
            {/* кинопоиск */}
            {(films || []).map((item:filmsCardsInt)=><SearchResult 
            id={item.id}
            rating={item.rating.imdb} 
            poster={item.poster ? item.poster.url:''} 
            filmName={item.name} 
            year={item.year} 
            description={item.description} 
            genres={item.genres.map(item=>item.name +' ')}
            key={item.id}/>)}
        </div>
         </>
    )
}

export default SearchResultContent

//previewUrl