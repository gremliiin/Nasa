import React from "react";
import classes from "./Header.module.css";
import logo from "../common/images/logo.png";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__container}>

                <div className={classes.header__logo}>
                    <img className={classes.header__img} src={logo} alt=""/>
                </div>

                <nav className={classes.header__menu}>
                    <ul className={classes.header__menu_items}>
                        <li className={classes.header__menu_item}>
                            <NavLink className={classes.header__menu_link}
                                     activeClassName={classes.header__menu_active} to={'/apod'} >APOD</NavLink>

                        </li>
                        <li className={classes.header__menu_item}>
                            <NavLink className={classes.header__menu_link}
                                     activeClassName={classes.header__menu_active} to="/neows">NeoWs</NavLink>
                        </li>
                        <li className={classes.header__menu_item} >
                                <NavLink className={classes.header__menu_link}
                                activeClassName={classes.header__menu_active} to={'/mrp'}>MRP</NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    );
};

export default Header;