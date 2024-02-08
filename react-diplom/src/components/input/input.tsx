import  styleInput  from "./input.module.css";
interface inputProps{
    value:string;
    onChange:(value:string)=>void;
}
const Input = (props:inputProps)=>{

    return(
        <input value={props.value} onChange={(e) => props.onChange ? props.onChange(e.target.value) : null} className={styleInput.input} type="text"  placeholder="Search"/>
    )
}

export default Input