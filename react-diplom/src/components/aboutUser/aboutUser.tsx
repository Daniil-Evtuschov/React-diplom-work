import { aboutUserProps } from "../../interfases";
import  user  from "./aboutUser.module.css";

const AboutUser = (props:aboutUserProps)=>{

    function firstLiters(props:aboutUserProps){return  props.userName.split(' ').map(word => word.charAt(0)).join('')}   

    return(
        <div className={user.aboutUserWrap}>
            <div onClick={props.onClick} className={user.aboutUser}>
                <div className={user.aboutUserAvatar}>{firstLiters(props)}</div>
                <div className={user.userNameWrap}><p className={user.userName}>{props.userName}</p></div>
            </div>
        </div>
    )
}
export default AboutUser