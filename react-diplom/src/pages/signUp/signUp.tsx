import { useState } from "react";
import Input from "../../components/input/input";
import styleSignUp from "./signUp.module.css";
import { useNavigate } from "react-router-dom";
import { handleActivationCklic, handleSignUpCklic } from "./signUpFunctions";

const SignUpPanel = ()=> {
    const navigate = useNavigate()
    const [name , setName] = useState('');
    const [password , setPassword] = useState('');
    const [email , setEmail] = useState('');
    const [uid , setUid] = useState('');
    const [token , setToken] = useState('');    
    
    return(
        <div className={styleSignUp.signUpWrap}>
            <div>
                <div className={styleSignUp.inputWrap}>
                    <label className={styleSignUp.inputLabel}>Name</label>
                    <Input value={name} onChange={setName} placeHolder={"you name"}/>            
                </div>

                <div className={styleSignUp.inputWrap}>
                    <label className={styleSignUp.inputLabel}>Password</label>
                    <Input value={password} onChange={setPassword} placeHolder={"enter you password"}/>            
                </div>
                
                <div className={styleSignUp.inputWrap}>
                    <label className={styleSignUp.inputLabel}>Email</label>
                    <Input value={email} onChange={setEmail} placeHolder={"enter you email"}/>            
                </div>

                <button onClick={()=>{handleSignUpCklic(name,password,email)}} className={styleSignUp.formButton}>signUp</button>
            </div>

         <span className={styleSignUp.spanLine}></span>

            <div>
                <div className={styleSignUp.inputWrap}>
                    <label className={styleSignUp.inputLabel}>Uid</label>
                    <Input value={uid} onChange={setUid} placeHolder={"enter you Uid"}/>            
                </div>

                <div className={styleSignUp.inputWrap}>
                    <label className={styleSignUp.inputLabel}>Token</label>
                    <Input value={token} onChange={setToken} placeHolder={"enter you Token"}/>            
                </div>
                <button onClick={()=>{handleActivationCklic(uid,token,email,password)}} className={styleSignUp.formButton}>activation</button>
            </div>

            <span onClick={()=>{navigate('/SignIn')}} className={styleSignUp.signInLink}>- already have Pixema account -</span>
        </div>
    )
}

export default SignUpPanel