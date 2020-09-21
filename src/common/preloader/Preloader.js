import React from "react";
import classes from './Preloader.module.css';
import preloader from './preloader.gif';

const Preloader = () => {
    return (
        <>
            <img className={classes.preloader} src={preloader} alt=""/>
        </>
    );
};

export default Preloader;