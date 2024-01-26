import  styleInput  from "./input.module.css";

const Search = ()=>{
    return(
        <input className={styleInput.input} type="text"  placeholder="Search"/>
    )
}

export default Search