import React from "react";
import Neows from "./Neows";
import classes from "./NeowsData/NeowsData.module.css";
import NeowsData from "./NeowsData/NeowsData";
import {connect} from "react-redux";
import {getInfoThunkCreator, setEndDateAC, setStartDateAC,} from "../../redux/NeowsReducer";
import Preloader from "../common/preloader/Preloader";

class NeowsContainer extends React.Component {
    componentDidMount() {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 7);
        let startDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
        let endDate = `${this.props.currentDate.getFullYear()}-${this.props.currentDate.getMonth() + 1}-${this.props.currentDate.getDate()}`;
        this.props.getInfoThunkCreator(startDate, endDate);
    }

    render() {
        return (
            <>
                <Neows
                    setStartDate={this.props.setStartDateAC}
                    setEndDate={this.props.setEndDateAC}
                    error={this.props.responseError}
                    disableButton={this.props.disableButton}
                    getInfoThunkCreator={this.props.getInfoThunkCreator}
                    startDate={this.props.startDate}
                    endDate={this.props.endDate}
                />
                {
                    this.props.data !== null ?
                    this.props.isFetching ? <Preloader/> :
                    <div className={classes.neowsData__container}>
                    <h2 className={classes.neowsData__count}>Найдено
                    объектов: {this.props.data["element_count"]}</h2>
                    {
                        Object.keys(this.props.data["near_earth_objects"]).map(key => {
                            return <NeowsData
                                key={key.split('').splice(8,2).join('')}
                                date={key}
                                data={this.props.data["near_earth_objects"][key]}
                            />
                        })
                    }
                    </div> :
                            <Preloader/>
                }

                }
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentDate: state.neows.currentDate,
        isFetching: state.neows.isFetching,
        responseError: state.neows.responseError,
        disableButton: state.neows.disableButton,
        data: state.neows.data,
        startDate: state.neows.startDate,
        endDate: state.neows.endDate
    };
};

export default connect(mapStateToProps, {getInfoThunkCreator, setStartDateAC, setEndDateAC})(NeowsContainer);
