import { useState } from "react";
import Input from "../../components/input/input";
import styleSignUp from "../signUp/signUp.module.css";
import { handleAuthCklic, handleRefreshClik} from "./signInFunctions";

const SignInPanel = ()=> {
    const [inputvalue , setInputvalue] = useState('');
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

                <button onClick={()=>{handleAuthCklic(email,password)}} className={styleSignUp.formButton}>activation</button>
            
         <span className={styleSignUp.spanLine}></span>


            <div>
                <div className={styleSignUp.inputWrap}>
                    <label className={styleSignUp.inputLabel}>Refresh Token</label>
                    <Input value={inputvalue} onChange={setInputvalue} placeHolder={"You Refresh Token"}/>            
                </div>

                <button onClick={()=>{handleRefreshClik(inputvalue)}} className={styleSignUp.formButton}>activation</button>
            </div>
        </div>
    )
}

export default SignInPanel