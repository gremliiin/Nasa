import React from "react";
import {connect} from "react-redux";
import MRP from "./MRP";
import MRPInfo from "./MRPInfo";
import {
    getDataEarthDate, setCamera,
    setDisableButton, setEarthDate, setIsEarthDate,
    setIsFetchingAC,
    setResponseError,
    setSol
} from "../../redux/MRPReducer";
import Preloader from "../../common/preloader/Preloader";
import {Route} from "react-router-dom";

class MRPContainer extends React.Component {

    componentDidMount() {
        this.props.getDataEarthDate(this.props.isEarthDate, this.props.earthDate, this.props.sol, this.props.camera);
    }

    render() {
        return (
            <>
                    <MRP
                        isFetching={this.props.isFetching}
                        disableButton={this.props.disableButton}
                        responseError={this.props.responseError}
                        sol={this.props.sol}
                        camera={this.props.camera}
                        earthDate={this.props.earthDate}
                        isEarthDate={this.props.isEarthDate}
                        setEarthDate={this.props.setEarthDate}
                        setSol={this.props.setSol}
                        setCamera={this.props.setCamera}
                        setIsEarthDate={this.props.setIsEarthDate}
                        getDataEarthDate={this.props.getDataEarthDate}
                    />

                {this.props.data !== null && this.props.isFetching === false?
                    <MRPInfo
                        data={this.props.data}
                    /> :
                    <Preloader/>
                }
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentDate: state.mrp.currentDate,
        isFetching: state.mrp.isFetching,
        responseError: state.mrp.responseError,
        disableButton: state.mrp.disableButton,
        data: state.mrp.data,
        sol: state.mrp.sol,
        camera: state.mrp.camera,
        earthDate: state.mrp.earthDate,
        isEarthDate: state.mrp.isEarthDate,
    };
};

export default connect(mapStateToProps, {
    setIsFetchingAC,
    setDisableButton,
    setResponseError,
    getDataEarthDate,
    setSol,
    setCamera,
    setEarthDate,
    setIsEarthDate,
})(MRPContainer);