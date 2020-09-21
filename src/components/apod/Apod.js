import React from "react";
import classes from "./Apod.module.css"
import Preloader from "../../common/preloader/Preloader.js";

const Apod = (props) => {

    return (
        <div className={classes.apod}>
            <div className={classes.apod__container}>

                <div className={classes.apod__header}>
                    <h1 className={classes.apod__title}>
                        {props.title}
                    </h1>
                    <p className={classes.text}>
                        {props.text}
                    </p>
                    <div className={classes.apod__enterData}>
                        <button className={classes.apod__push} disabled={props.stateButton} onClick={(date) => {
                            date = props.activeDate;
                            props.setDate(date);
                        }}>Получить
                        </button>
                        <input className={classes.apod__enter} type="date" onChange={(e) => {
                            props.getDate(e.target.value);
                        }}/>
                    </div>
                </div>

                {props.isFetching === true ? <Preloader /> : <div className={classes.apod__data}>
                    {
                        props.responseError === null
                            ? <div className={classes.error}></div>
                            : <div className={classes.error}>Ошибка: {props.responseError}</div>
                    }
                    <div className={classes.apod__data_blockImage}>
                        {
                            props.isVideo === false ?
                            <img className={classes.apod__data_image}
                                 src={props.imageSrc} alt=""/> :
                            < iframe className = {classes.apod__data_video}
                                     width="560"
                                     height="315"
                                     src={props.imageSrc}
                                     frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen />
                        }
                    </div>
                    <div className={classes.apod__data__info}>
                        <p className={classes.apod__info_date}>
                            {props.date}
                        </p>
                        <h2 className={classes.apod__info_copyright}>
                            {props.copyright}
                        </h2>
                        <p className={classes.apod__info_about}>
                            {props.explanation}
                        </p>
                    </div>
                </div>}

            </div>
        </div>
    );
};


export default Apod;