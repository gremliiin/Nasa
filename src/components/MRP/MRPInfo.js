import React, {useState} from "react";
import classes from './MRP.module.css';
import cancel from '../../common/images/icons/cancel.svg';
import right from '../../common/images/icons/right.svg';
import left from '../../common/images/icons/left.svg';

const MRPInfo = (props) => {

    let [activeModal, setActiveModal] = useState(false);
    let [activeData, setActiveData] = useState(null);

    return (
        <div className={classes.mrp__info}>
            <div className={classes.mrp__container}>
                {
                    props.data['photos'].map(photo => {
                       return <MRPInfoLite
                            key={props.data['photos'].indexOf(photo)}
                            activeModal={activeModal}
                            setActiveModal={setActiveModal}
                            photo={photo}
                            setActiveData={setActiveData}
                        />
                    })

                }
                { activeModal === true ?
                    <MRPInfoFull
                        activeModal={activeModal}
                        setActiveModal={setActiveModal}
                        photo={activeData}
                        data={props.data}
                    /> :
                    null
                }
            </div>
        </div>
    );
};

const MRPInfoLite = (props) => {
  return(
      <div className={classes.mrp__imageinfo} onClick={() => {
          props.setActiveModal(true);
          props.setActiveData(props.photo);

      }}>
          <img className={classes.mrp__imageinfo_img}
               src={props.photo['img_src']}
               alt=""/>
          <div className={classes.mrp__names}>
              <h3 className={classes.mrp__camera_title}>Камера</h3>
              <p className={classes.mrp__names_camera}>{props.photo['camera']['full_name']}</p>
              <h3 className={classes.mrp__rover_title}>Название марсохода</h3>
              <p className={classes.mrp__names_rover}>{props.photo['rover']['name']}</p>
          </div>
          <div className={classes.mrp__date}>
              <h3 className={classes.mrp__sol_title}>Сол</h3>
              <p className={classes.mrp__date_sol}>{props.photo['sol']}</p>
              <h3 className={classes.mrp__earth_title}>Земная дата</h3>
              <p className={classes.mrp__date_earth}>{props.photo['earth_date']}</p>
          </div>
      </div>
  );
};

const MRPInfoFull = (props) => {
    let [photo, setPhoto] = useState(props.photo);
  return(
    <div className={classes.mrp__modalWindow}>
        <div className={classes.mrp__modalWindow_window}>
            <div className={classes.mrp__images_container}>
                <img className={classes.mrp__images_image} src={photo['img_src']} />
                <img className={classes.mrp__images_right} src={right} alt=""
                     onClick={() => {

                         let index = props.data.photos.indexOf(photo);
                         let data = props.data.photos[index + 1];
                         if (index !== (props.data.photos.length - 1)) {
                             setPhoto(data);
                         } else {
                             setPhoto(photo);
                         }
                     }}
                />
                <img className={classes.mrp__images_left} src={left} alt=""
                     onClick={() => {
                         let index = props.data.photos.indexOf(photo);
                         let data = props.data.photos[index - 1];
                         if (index !== 0) {
                             setPhoto(data);
                         } else {
                             setPhoto(photo);
                         }
                     }}
                />
            </div>
            <div className={classes.mrp__modalWindow_info}>
                <p className={classes.mrp__info_id}>id: {photo['id']}</p>
                <p className={classes.mrp__info_sol}>sol: {photo['sol']}</p>
                <h4 className={classes.mrp__camera_title}>Камера</h4>
                <p className={classes.mrp__camera_id}>id: {photo['camera']['id']}</p>
                <p className={classes.mrp__camera_name}>Имя: {photo['camera']['name']}</p>
                <p className={classes.mrp__camera_fullName}>Полное имя: {photo['camera']['full_name']}</p>
                <h4 className={classes.mrp__rover_title}>Марсоход</h4>
                <p className={classes.mrp__rover_id}>id: {photo['rover']['id']}</p>
                <p className={classes.mrp__rover_name}>Имя: {photo['rover']['name']}</p>
                <p className={classes.mrp__rover_landingDate}>Дата посадки: {photo['rover']['landing_date']}</p>
                <p className={classes.mrp__rover_launchDate}>Дата запуска: {photo['rover']['launch_date']}</p>
                <p className={classes.mrp__rover_status}>Статус: {photo['rover']['status']}</p>

            </div>
        </div>
        <img className={classes.mrp__images_cancel} src={cancel} alt="" onClick={() => {
            props.setActiveModal(false);
        }}/>
    </div>
  );
};


export default MRPInfo;