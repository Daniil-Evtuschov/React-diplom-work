import AboutUser from "../../components/aboutUser/aboutUser"
import Search from "../../components/input/input"
import headerStyle  from "./header.module.css";

const Header = ()=>{
    return(

    <div className={headerStyle.headerWrap}>
            <Search />
            <AboutUser userName="Чмукичь Верутус" />
    </div>
    
    )
}
export default Header