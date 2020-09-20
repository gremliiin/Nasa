import React from "react";
import classes from './MRP.module.css';
import {NavLink, Route} from "react-router-dom";

let MRP = (props) => {
    return (
        <div className={classes.mrp}>
            <div className={classes.mrp__container}>
                <h1 className={classes.mrp__title}>
                    Mars Rover Photos
                </h1>
                <p className={classes.mrp__text}>
                    У каждого марсохода есть собственный набор фотографий, хранящихся в базе данных, которые можно
                    запросить отдельно.
                    Фотографии упорядочены по солнцу (марсианскому вращению или дню), в которое они были сделаны,
                    отсчитывая от даты приземления марсохода. Например, фотография, сделанная на 1000-м марсианском соле
                    Curiosity, исследующем Марс, будет иметь атрибут sol, равный 1000. Если вместо этого вы
                    предпочитаете искать по земной дате, когда была сделана фотография, вы тоже можете сделать это.

                    Наряду с запросом по дате, результаты также могут быть отфильтрованы по камере, с которой они были
                    сняты.
                </p>
                <div className={classes.mrp__navlink}>
                    <ul className={classes.mrp__navlink_items}>
                        <li className={classes.mrp__navlink_item}>
                            <NavLink activeClassName={classes.mrp__navlink_active}
                                className={classes.mrp__navlink_link} to={'/mrp/sol'}>
                                По солу
                            </NavLink>

                        </li>
                        <li className={classes.mrp__navlink_item}>
                            <NavLink activeClassName={classes.mrp__navlink_active}
                                     className={classes.mrp__navlink_link} to={'/mrp/date'}>
                                По дате
                            </NavLink>
                        </li>
                    </ul>

                </div>
                <Route exact path='/mrp' render={() => (
                    <MrpTo to={'sol'}
                        disable={props.disableButton}
                           sol={props.sol}
                           camera={props.camera}
                           earthDate={props.earthDate}
                           isEarthDate={props.isEarthDate}
                           setSol={props.setSol}
                           setCamera={props.setCamera}
                           setIsEarthDate={props.setIsEarthDate}
                           getDataEarthDate={props.getDataEarthDate}
                    />
                )} />
                <Route path='/mrp/sol' render={() => (
                    <MrpTo to={'sol'}
                           disable={props.disableButton}
                           sol={props.sol}
                           camera={props.camera}
                           earthDate={props.earthDate}
                           isEarthDate={props.isEarthDate}
                           setSol={props.setSol}
                           setCamera={props.setCamera}
                           setIsEarthDate={props.setIsEarthDate}
                           getDataEarthDate={props.getDataEarthDate}
                    />
                )} />
                <Route path='/mrp/date' render={() => (
                    <MrpTo to={'date'}
                           disable={props.disableButton}
                           camera={props.camera}
                           earthDate={props.earthDate}
                           isEarthDate={props.isEarthDate}
                           setCamera={props.setCamera}
                           setEarthDate={props.setEarthDate}
                           getDataEarthDate={props.getDataEarthDate}
                           setIsEarthDate={props.setIsEarthDate}
                    />
                )} />
            </div>
            {
                props.error === null ? <div className={classes.mrp__enterData_error}></div> :
                    <div className={classes.mrp__enterData_error}>{props.error}</div>
            }
        </div>
    );
};

let MrpTo = (props) => {
    if (props.to === 'sol') {
        props.setIsEarthDate(false);
    } else {
        props.setIsEarthDate(true);
    }
    return (
        <div className={classes.mrp__submit}>
            <button disabled={props.disableButton} className={classes.mrp__submit_button} onClick={() => {
                    props.getDataEarthDate(props.isEarthDate, props.earthDate, props.sol, props.camera);
            }}>Получить</button>
            {
                props.to === 'sol' ?
                    <input placeholder={'Введите sol'} type="text" className={classes.mrp__submit_sol} onChange={(e) => {
                        props.setSol(e.target.value);
                    }}/> :
                    <input placeholder={'Введите дату'} type="date" className={classes.mrp__submit_sol}  onChange={(e) => {
                        props.setEarthDate(e.target.value);
                        props.setIsEarthDate(true);
                    }}/>
            }

            <select className={classes.mrp__camera} onChange={(e) => {
                props.setCamera(e.target.value);
            }}>
                <option disabled="disabled" className={classes.mrp__select_option}>
                    Выберите камеру
                </option>
                <option className={classes.mrp__select_option}>FHAZ</option>
                <option className={classes.mrp__select_option}>RHAZ</option>
                <option className={classes.mrp__select_option}>MAST</option>
                <option className={classes.mrp__select_option}>CHEMCAM</option>
                <option className={classes.mrp__select_option}>MAHLI</option>
                <option className={classes.mrp__select_option}>MARDI</option>
                <option className={classes.mrp__select_option}>NAVCAM</option>
                <option className={classes.mrp__select_option}>PANCAM</option>
                <option className={classes.mrp__select_option}>MINITES</option>
            </select>
        </div>
    );
};

export default MRP;