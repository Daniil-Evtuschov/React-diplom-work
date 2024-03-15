import { useState } from "react";
import Input from "../../components/input/input";
import styleSignUp from "../signUp/signUp.module.css";
import { handleAuthCklic} from "./signInFunctions";

const SignInPanel = ()=> {
    const [password , setPassword] = useState('');
    const [email , setEmail] = useState('');
    return(
        <div className={styleSignUp.signUpWrap}>

                <div className={styleSignUp.inputWrap}>
                    <label className={styleSignUp.inputLabel}>Password</label>
                    <Input value={password} onChange={setPassword} placeHolder={"enter you password"}/>            
                </div>
                
                <div className={styleSignUp.inputWrap}>
                    <label className={styleSignUp.inputLabel}>Email</label>
                    <Input value={email} onChange={setEmail} placeHolder={"enter you email"}/>            
                </div>

                <span className={styleSignUp.spanLine}></span>

                <button onClick={()=>{handleAuthCklic(email,password)}} className={styleSignUp.formButton}>activation</button>
        </div>
    )
}

export default SignInPanel