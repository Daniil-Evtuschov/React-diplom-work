import { useNavigate } from "react-router-dom";
import AboutUser from "../../components/aboutUser/aboutUser"
import Input from "../../components/input/input"
import headerStyle  from "./header.module.css";
import { useState } from "react";
import { searchPosts } from "../../store/actions/fetchReducer";
import { useDispatch } from "react-redux";

const Header = ()=>{
  const [filters,setFilter]=useState(false)
  const dispatch = useDispatch()
  const [searchValue , setSearchValue] = useState('');
  let StorageuserName:string|null = localStorage.getItem('userName');
  if (StorageuserName==null) {
    StorageuserName='NotFound' 
}

function insertSpace(name:string) {
  let mid = Math.floor(name.length / 2);
  return name.slice(0, mid) + ' ' + name.slice(mid);
}
const handleKeyPress = (event:any) => {
  if (event.key === 'Enter') {
    //@ts-ignore
    dispatch(searchPosts(searchValue))  
  }
};

let result = insertSpace(StorageuserName);

  const navigate = useNavigate() 

    return(
    <div className={headerStyle.headerWrap}>
          <div className={headerStyle.search} onClick={()=>{navigate('/SearchResultContent')}}>
            <Input onKeyDown={handleKeyPress} value={searchValue} onChange={setSearchValue} placeHolder={'search'}/>
            {/* <div onClick={()=>{setFilter(true)}} className={headerStyle.filtersWrap}>
              <span className={headerStyle.filtersLine}></span>
              <span className={headerStyle.filtersLine}></span>
              <span className={headerStyle.filtersLine}></span>
            </div>
            <div className={headerStyle.filtersListWrap}>
              <ul className={headerStyle.filtersList}>
                <li className={headerStyle.filtersListitem}></li>
                <li className={headerStyle.filtersListitem}></li>
                <li className={headerStyle.filtersListitem}></li>
                <li className={headerStyle.filtersListitem}></li>
              </ul>
            </div> */}
          </div>
          <AboutUser userName={result}/>
    </div>
    
    )
}
export default Header