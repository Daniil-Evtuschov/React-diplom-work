import { faBookmark, faFireFlameCurved, faGear, faHouse, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import asideStyle from "./aside.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { darkThemeOn, lightThemeOn } from "../../store/actions/lifgtAndDarkTheme";


const Aside = ()=>{
    const dispatch = useDispatch()    
    const {category,id} = useParams()  

    let [logo,setLogo]=useState('#fff')
    let [darkTheme,setDarkTheme]=useState('rgb(62, 66, 68)')
    let [lightTheme,setLightTheme]=useState('rgb(100, 55, 224)')

    const handleClickSetDarkTheme= () => {
        setDarkTheme('rgb(100, 55, 224)');
        setLightTheme('rgb(62, 66, 68)');
        setLogo('black')
      };

    const handleClickSetlightTheme= () => {
        setDarkTheme('rgb(62, 66, 68)');
        setLightTheme('rgb(100, 55, 224)');
        setLogo('#fff')
      };

    return(
    <aside className={asideStyle.asideWrap}>
            <Link to='/'>
            <div  className={asideStyle.titleWrap}>
                <h1 className={asideStyle.mainTitle}>Pix</h1><span style={{color:logo}} className={asideStyle.mainTitle}>ema</span>
            </div>
            </Link>

            <div className={asideStyle.asideListWrap}>
                    <div className={asideStyle.asideNav}>
                        <ul className={asideStyle.asideNavList}>
                            <NavLink to='/' >
                                <li className={asideStyle.asideNavItem}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faHouse} />Home</li>
                            </NavLink>
                            
                            <NavLink to='/TrendsFilms' >
                            <li className={asideStyle.asideNavItem}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faFireFlameCurved} />Trends</li>
                            </NavLink>
                            
                            <NavLink to='/favoritFilms' >
                            <li className={asideStyle.asideNavItem}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faBookmark} />Favorities</li>
                            </NavLink>
                        </ul>

                        <div className={asideStyle.darkThemeWrap}>
                            <span onClick={()=>{handleClickSetlightTheme();dispatch(darkThemeOn())}} style={{ color: lightTheme }}><FontAwesomeIcon className={asideStyle.lightTheme} icon={faMoon} /></span>
                            <span onClick={()=>{handleClickSetDarkTheme();dispatch(lightThemeOn())}} style={{ color: darkTheme }}><FontAwesomeIcon className={asideStyle.darkTheme} icon={faSun} /></span>
                        </div>

                    </div>
                    <div className={asideStyle.footerWrap}><p className={asideStyle.asideNavItem}>All Rights Reserved</p></div>
            </div>
    </aside>
    )
}
export default Aside