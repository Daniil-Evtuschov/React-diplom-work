import FilmCard from "../filmCard/filmCard"
import  styleMainContent  from "./mainContent.module.css";

const MainContent =()=>{
    return(
        <div className={styleMainContent.MainContentLayout}>
            <FilmCard />
        </div>
    )
}

export default MainContent