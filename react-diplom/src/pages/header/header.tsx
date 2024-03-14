import { Link, useNavigate } from "react-router-dom";
import AboutUser from "../../components/aboutUser/aboutUser"
import Input from "../../components/input/input"
import headerStyle  from "./header.module.css";
import { useState } from "react";
import { searchPosts } from "../../store/actions/fetchReducer";
import { useDispatch } from "react-redux";

const Header = ()=>{
  const dispatch = useDispatch()
  const [searchValue , setSearchValue] = useState('');
  let StorageuserName:string|null = localStorage.getItem('userName');
  if (StorageuserName==null) {
    StorageuserName='NotFound' 
}

const handleKeyPress = (event:any) => {
  if (event.key === 'Enter') {
    //@ts-ignore
    dispatch(searchPosts(searchValue))  
  }
};

    return(
    <div className={headerStyle.headerWrap}>
      <div className={headerStyle.search}>
        <Link to='SearcFilms'>
          <Input onKeyDown={handleKeyPress} value={searchValue} onChange={setSearchValue} placeHolder={'search'}/>
        </Link>
      </div>
      <AboutUser userName={StorageuserName}/>
    </div>
    
    )
}
export default Header