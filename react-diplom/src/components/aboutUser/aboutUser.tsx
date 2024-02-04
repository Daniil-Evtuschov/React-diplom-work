import { useEffect, useState } from "react";
import { aboutUserProps } from "../../interfases";
import  user  from "./aboutUser.module.css";
import { useNavigate } from "react-router-dom";

const AboutUser = (props:aboutUserProps)=>{
    const [userPane,setUserPoanel]=useState(false)
    function firstLiters(props:aboutUserProps) {
        return  props.userName.split(' ').map((word: string) => word.charAt(0)).join('');
    }    
    const navigate = useNavigate()

    return(
    <>
        <div className={user.userConteiner}>
            <div onClick={()=>{setUserPoanel(!userPane)}} className={user.aboutUserWrap}>
                <div onClick={props.onClick} className={user.aboutUser}>
                    <div className={user.aboutUserAvatar}>{firstLiters(props)}</div>
                    <div className={user.userNameWrap}><p className={user.userName}>{props.userName}</p></div>
                </div>
            </div>

            {userPane&&<div className={user.acountPanelListWrap}>
                <ul>
                    <li onClick={()=>{navigate('SignIn')}} className={user.acountPanelItem}>Sign In</li>
                    <li onClick={()=>{navigate('SignUp')}} className={user.acountPanelItem}>Sign Up</li>
                    <li className={user.acountPanelItem}>Log Out</li>
                </ul>
            </div>}

        </div>
    </>
    )
}
export default AboutUser