import  styleInput  from "./input.module.css";
interface inputProps{
    value:string;
    onChange:(value:string)=>void;
    placeHolder:string
    onKeyDown?:any
}
const Input = (props:inputProps)=>{

    return(
        <input onKeyDown={props.onKeyDown} value={props.value} onChange={(e) => props.onChange ? props.onChange(e.target.value) : null} className={styleInput.input} type="text"  placeholder={props.placeHolder}/>
    )
}

export default Input