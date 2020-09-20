import React from "react";
import classes from './Neows.module.css';

const Neows = (props) => {
    return (
        <div className={classes.neows}>
            <div className={classes.neows__container}>
                <h1 className={classes.neows__title}>
                    NeoWs (Near Earth Object Web Service) - Веб-сервис объектов, сближающихся с Землей
                </h1>
                <p className={classes.neows__text}>
                    это веб-сервис для получения информации об астероидах, сближающихся с Землей. С помощью NeoWs
                    пользователь может: искать астероиды на основе даты их наибольшего приближения к Земле, искать
                    конкретный астероид с его идентификатором маленького тела NASA JPL, а также просматривать общий
                    набор данных
                </p>
                <div className={classes.neows__enterData}>
                    <button disabled={props.disableButton} className={classes.neows__enterData_button}
                            onClick={() => {
                                props.getInfoThunkCreator(props.startDate, props.endDate)
                            }}
                    >Получить
                    </button>
                    <input className={classes.neows__enterData_inputStart} type='date'
                           onChange={(e) => {
                               props.setStartDate(e.target.value);
                           }}
                    />
                    <input className={classes.neows__enterData_inputEnd} type='date'
                           onChange={(e) => {
                               props.setEndDate(e.target.value);
                           }}
                    />

                </div>
                {
                    props.error === null ? <div className={classes.neows__enterData_error}></div> :
                        <div className={classes.neows__enterData_error}>Ошибка: {props.error}</div>
                }
                        </div>

        </div>
    );
};

export default Neows;