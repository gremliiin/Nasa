import React, {useState} from "react";
import classes from './NeowsData.module.css';

const NeowsData = (props) => {

    let [isTouch, setIsTouch] = useState(false);
    let [iconTwo, setIconTwo] = useState('block');
    let [neowsDataInfo, setNeowsDataInfo] = useState('none');

    const expandEl = () => {
        if (isTouch === false) {
            setIconTwo(iconTwo = 'none');
            setNeowsDataInfo(neowsDataInfo = 'block');
            setIsTouch(isTouch = true);
        } else if (isTouch === true) {
            setIconTwo(iconTwo = 'block');
            setNeowsDataInfo(neowsDataInfo = 'none');
            setIsTouch(isTouch = false);
        }
    };

    return (
        <div className={classes.neowsData__infoContainer}>

            <div className={classes.neowsData__dateContainer}>
                <h3 className={classes.neowsData__dateContainer_title}>{props.date}</h3>
                <div className={classes.neowsData__dateContainer_button} onClick={() => {
                    expandEl();
                }}>
                    <span className={classes.neowsData__button_iconOne}/>
                    <span className={classes.neowsData__button_iconTwo} style={{display: iconTwo}}/>
                </div>
            </div>

            {props.data.map(el => {
                return <NeowsName
                    key={props.data.indexOf(el)}
                    neowsDataInfo={neowsDataInfo}
                    setNeowsDataInfo={setNeowsDataInfo}
                    data={el}
                />
            })
            }

        </div>
    );
};

const NeowsName = (props) => {

    let [isTouchFullInfo, setIsTouchFullInfo] = useState(false);
    let [fullInfo, setFullInfo] = useState('none');


    const expandElFullInfo = () => {
        if (isTouchFullInfo === false) {
            setFullInfo(fullInfo = 'block');
            setIsTouchFullInfo(isTouchFullInfo = true);
        } else if (isTouchFullInfo === true) {
            setFullInfo(fullInfo = 'none');
            setIsTouchFullInfo(isTouchFullInfo = false);
        }
    };


    return (
        <>
            <div className={classes.neowsData__info} style={{display: props.neowsDataInfo}}>
                <div className={classes.neowsData__objects}>
                    <h3 className={classes.neowsData__objects_name}>
                        <p className={classes.neowsData__name_title}>{props.data['name']}</p>
                        <p className={classes.neowsData__name_change} onClick={() => {
                            expandElFullInfo();
                        }}> {fullInfo === 'none' ? '+' : '-'}</p>
                    </h3>
                    <div className={classes.neowsData__blockFullInfo} style={{display: fullInfo}}>
                        <h3 className={classes.neowsData__objects_id}>{props.data['id']}</h3>
                        <h3 className={classes.neowsData__objects_jplUrl}><a href={props.data['nasa_jpl_url']}>Jet Propulsion Laboratory</a></h3>
                        <h3 className={classes.neowsData__objects_h}>Абсолютная звездная
                            величина: {props.data['absolute_magnitude_h']}</h3>
                        <div className={classes.neowsData__objects_diameter}>
                            <h4 className={classes.neowsData__diametr_title}>Расчетный диаметр: </h4>
                            <div className={classes.neowsData__objects_kilometers}>
                                <h5 className={classes.neowsData__kilometers_title}>Километры</h5>
                                <p className={classes.neowsData__kilometers_text}>
                                    Мин: {props.data['estimated_diameter']['kilometers']['estimated_diameter_min']}
                                </p>
                                <p className={classes.neowsData__kilometers_text}>
                                    Макс: {props.data['estimated_diameter']['kilometers']['estimated_diameter_max']}
                                </p>
                            </div>
                            <div className={classes.neowsData__objects_meters}>
                                <h5 className={classes.neowsData__meters_title}>Метры</h5>
                                <p className={classes.neowsData__meters_text}>
                                    Мин: {props.data['estimated_diameter']['meters']['estimated_diameter_min']}
                                </p>
                                <p className={classes.neowsData__meters_text}>
                                    Макс: {props.data['estimated_diameter']['meters']['estimated_diameter_max']}
                                </p>
                            </div>
                            <div className={classes.neowsData__objects_miles}>
                                <h5 className={classes.neowsData__miles_title}>Мили</h5>
                                <p className={classes.neowsData__miles_text}>
                                    Мин: {props.data['estimated_diameter']['miles']['estimated_diameter_min']}
                                </p>
                                <p className={classes.neowsData__miles_text}>
                                    Макс: {props.data['estimated_diameter']['miles']['estimated_diameter_max']}
                                </p>
                            </div>
                            <div className={classes.neowsData__objects_feet}>
                                <h5 className={classes.neowsData__feet_title}>Футы</h5>
                                <p className={classes.neowsData__feet_text}>
                                    Мин: {props.data['estimated_diameter']['feet']['estimated_diameter_min']}
                                </p>
                                <p className={classes.neowsData__feet_text}>
                                    Макс: {props.data['estimated_diameter']['feet']['estimated_diameter_max']}
                                </p>
                            </div>
                        </div>
                        <h3 className={classes.neowsData__objects_hazardous}>
                            Потенциально опасный: {
                            props.data['is_potentially_hazardous_asteroid'] === false ? 'Нет' : 'Да'
                        }
                        </h3>
                        <div className={classes.neowsData__objects_approachData}>
                            <h4 className={classes.neowsData__approachData_title}>Данные о приближении:</h4>
                            <div className={classes.neowsData__approachData}>
                                <p className={classes.neowsData__approachData_approachDate}>
                                    Дата приближения: {props.data['close_approach_data'][0]['close_approach_date_full']}
                                </p>
                                <div className={classes.neowsData__relativeVelocity}>
                                    <h5 className={classes.neowsData__relativeVelocity_title}>Относительная скорость</h5>
                                    <p className={classes.neowsData__relativeVelocity_kms}>
                                        км/с: {props.data['close_approach_data'][0]['relative_velocity']['kilometers_per_second']}
                                    </p>
                                    <p className={classes.neowsData__relativeVelocity_kmh}>
                                        км/ч: {props.data['close_approach_data'][0]['relative_velocity']['kilometers_per_hour']}
                                    </p>
                                    <p className={classes.neowsData__relativeVelocity_mh}>
                                        миль/ч: {props.data['close_approach_data'][0]['relative_velocity']['miles_per_hour']}
                                    </p>
                                </div>
                                <div className={classes.neowsData__missDistance}>
                                    <h5 className={classes.neowsData__missDistance_title}>Расстояние</h5>
                                    <p className={classes.neowsData__missDistance_astronomical}>
                                        Астрономический: {props.data['close_approach_data'][0]['miss_distance']['astronomical']}
                                    </p>
                                    <p className={classes.neowsData__missDistance_lunar}>
                                        Лунный: {props.data['close_approach_data'][0]['miss_distance']['lunar']}
                                    </p>
                                    <p className={classes.neowsData__missDistance_kilometers}>
                                        Киломметры: {props.data['close_approach_data'][0]['miss_distance']['kilometers']}
                                    </p>
                                    <p className={classes.neowsData__missDistance_miles}>
                                        Мили: {props.data['close_approach_data'][0]['miss_distance']['miles']}
                                    </p>
                                </div>
                                <h4 className={classes.neowsData__approachData_orbitingBody}>
                                    Вращающееся тело: {props.data['close_approach_data'][0]['orbiting_body']}
                                </h4>
                            </div>
                        </div>
                        <h3 className={classes.neowsData__objects_sentryObject}>
                            Является сторожевым объектом: {
                            props.data['is_sentry_object'] ? 'Да' : 'Нет'
                        }
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NeowsData;
