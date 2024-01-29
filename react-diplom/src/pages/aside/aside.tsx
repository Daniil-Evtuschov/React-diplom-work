import { faBookmark, faFireFlameCurved, faGear, faHouse } from "@fortawesome/free-solid-svg-icons";
import asideStyle from "./aside.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Aside = ()=>{
    const navigate = useNavigate()
    return(
    <aside className={asideStyle.asideWrap}>
            <div onClick={()=>{navigate('/home')}} className={asideStyle.titleWrap}>
                <h1 className={asideStyle.mainTitle}>Pix</h1><span className={asideStyle.mainTitle}>ema</span>
            </div>

            <div className={asideStyle.asideListWrap}>
                    <div className={asideStyle.asideNav}>
                        <ul className={asideStyle.asideNavList}>
                            <li onClick={()=>{navigate('/home')}} className={asideStyle.asideNavItem}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faHouse} />Home</li>
                            <li className={asideStyle.asideNavItem}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faFireFlameCurved} />Trends</li>
                            <li onClick={()=>navigate('/favoritFilmsContent')} className={asideStyle.asideNavItem}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faBookmark} />Favorities</li>
                            <li className={asideStyle.asideNavItem}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faGear} />Settings</li>
                        </ul>
                    </div>

                    <div className={asideStyle.footerWrap}><p className={asideStyle.asideNavItem}>All Rights Reserved</p></div>
            </div>
    </aside>
    )
}
export default Aside