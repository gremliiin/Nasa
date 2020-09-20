import React from "react";
import Apod from "./Apod";
import {connect} from "react-redux";
import {getDateThunkCreator, setActiveDateAC} from "../../redux/apodReducer";

class ApodContainer extends React.Component {
    componentDidMount() {
        let date = `${this.props.currentDate.getFullYear()}-${this.props.currentDate.getMonth() + 1}-${this.props.currentDate.getDate()}`;
        this.props.getDateThunkCreator(date);
    }

    render() {
        return <Apod
            title={this.props.title}
            text={this.props.text}
            imageSrc={this.props.imageSrc}
            date={this.props.date}
            copyright={this.props.copyright}
            explanation={this.props.explanation}
            isVideo={this.props.isVideo}
            isFetching={this.props.isFetching}
            activeDate={this.props.activeDate}
            stateButton={this.props.stateButton}
            responseError={this.props.responseError}
            getDate={this.props.setActiveDateAC}
            setDate={this.props.getDateThunkCreator}

        />
    }
}

let mapStateToProps = (state) => {
    return {
        title: state.apod.title,
        text: state.apod.text,
        imageSrc: state.apod.imageSrc,
        date: state.apod.date,
        copyright: state.apod.copyright,
        explanation: state.apod.explanation,
        isVideo: state.apod.isVideo,
        isFetching: state.apod.isFetching,
        activeDate: state.apod.activeDate,
        currentDate: state.apod.currentDate,
        stateButton: state.apod.stateButton,
        responseError: state.apod.responseError,
    }
};


export default connect(mapStateToProps, {setActiveDateAC, getDateThunkCreator})(ApodContainer);
