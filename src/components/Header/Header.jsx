import Menu from "../Menu/Menu.jsx";
import logo from '../../assets/logo.svg';
import './Header.css';
import Search from "../Search/Search.jsx";
import {useState, useEffect} from "react";
function Header({search, setSearchInput}){
    const [mobMenu, setMobMenu] = useState(false);
    const [hideNav, setHideNav] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > 200 && currentScroll > lastScroll) {
                setHideNav(true);
            } else {
                setHideNav(false);
            }
            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return (
        <header className={hideNav ? "nav-hide" : ""}>
            <div className="header__top">
                <div className="container">
                    <div className="header__top--content">
                        <button className="mobile__menu" onClick={(e)=>{
                            e.preventDefault();
                            setMobMenu(true);
                        }}></button>
                        <div className="logo">
                            <a href="/">
                                <img src={ logo } alt="logo"/>
                            </a>
                        </div>
                       <Search search={search} setSearchInput={setSearchInput}/>
                    </div>
                </div>
            </div>

            <nav className={`nav ${mobMenu ? "show" : ""}`}>
                <div className="nav__top">
                    <a href="/">
                        <img src={ logo } alt="logo"/>
                    </a>
                    <button  className="menu__close" onClick={(e) => {
                        e.preventDefault();
                        setMobMenu(false);
                    }}></button>
                </div>
                <div className="container">

                    <Menu/>
                </div>
            </nav>
        </header>
    )
}
export default Header