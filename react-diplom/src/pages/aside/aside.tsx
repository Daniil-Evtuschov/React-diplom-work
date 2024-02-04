import { faBookmark, faFireFlameCurved, faGear, faHouse, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import asideStyle from "./aside.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkThemeOn, lightThemeOn } from "../../store/actions/lifgtAndDarkTheme";
import App from "../../App";
import { InitialStateInt } from "../../interfases";

const Aside = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let [logo,setLogo]=useState('#fff')
    let [home,setHome]=useState('rgb(100, 55, 224)')
    let [trends,setTrends]=useState('rgb(62, 66, 68)')
    let [favorie,setFavoirite]=useState('rgb(62, 66, 68)')
    let [darkTheme,setDarkTheme]=useState('rgb(62, 66, 68)')
    let [lightTheme,setLightTheme]=useState('rgb(100, 55, 224)')

    const handleClickSetTreands = () => {
        setTrends('rgb(100, 55, 224)' );
        setHome('rgb(62, 66, 68)')
        setFavoirite('rgb(62, 66, 68)')
      };
      
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


    const handleClickSetHome = () => {
        setTrends('rgb(62, 66, 68)');
        setHome('rgb(100, 55, 224)')
        setFavoirite('rgb(62, 66, 68)')
    };
    
    const handleClickSeFavorite = () => {
        setTrends('rgb(62, 66, 68)');
        setHome('rgb(62, 66, 68)')
        setFavoirite('rgb(100, 55, 224)')
    };
    return(
    <aside className={asideStyle.asideWrap}>
            <div onClick={()=>{navigate('/home')}} className={asideStyle.titleWrap}>
                <h1 className={asideStyle.mainTitle}>Pix</h1><span style={{color:logo}} className={asideStyle.mainTitle}>ema</span>
            </div>

            <div className={asideStyle.asideListWrap}>
                    <div className={asideStyle.asideNav}>
                        <ul className={asideStyle.asideNavList}>
                            <li onClick={()=>{navigate('/home');setHome('rgb(100, 55, 224)');handleClickSetHome()}} className={asideStyle.asideNavItem}style={{ color: home }}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faHouse} />Home</li>
                            <li onClick={()=>{navigate('TrendsContent') ;setTrends('rgb(100, 55, 224)');handleClickSetTreands()}} className={asideStyle.asideNavItem} style={{ color: trends }}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faFireFlameCurved} />Trends</li>
                            <li onClick={()=>{navigate('/favoritFilmsContent');handleClickSeFavorite()}} style={{ color: favorie }} className={asideStyle.asideNavItem}><FontAwesomeIcon className={asideStyle.asideIcosn} icon={faBookmark} />Favorities</li>
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