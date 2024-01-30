import { useNavigate } from "react-router-dom";
import AboutUser from "../../components/aboutUser/aboutUser"
import Input from "../../components/input/input"
import headerStyle  from "./header.module.css";
import { useState } from "react";
import { searchPosts } from "../../store/actions/fetchReducer";
import { useDispatch } from "react-redux";

const Header = ()=>{
    const dispatch = useDispatch()
  const [searchValue , setSearchValue] = useState('');
  const navigate = useNavigate() 
    //@ts-ignore
    dispatch(searchPosts(searchValue))

    return(
    <div className={headerStyle.headerWrap}>
            <div className={headerStyle.search} onClick={()=>{navigate('/SearchResultContent')}}><Input value={searchValue} onChange={setSearchValue}/></div>
            <AboutUser userName="Чмукичь Верутус" />
    </div>
    
    )
}
export default Header