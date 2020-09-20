import React from 'react';
import Header from "./components/header/Header";
import {Route} from "react-router-dom";
import ApodContainer from "./components/apod/ApodContainer";
import NeowsContainer from "./components/NeoWs/NeowsContainer";
import MRPContainer from "./components/MRP/MRPContainer";

class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                    <Route exact path='/' render={() => (
                        <ApodContainer/>
                    )}/>
                    <Route path='/apod' render={() => (
                        <ApodContainer/>
                    )}/>
                    <Route path='/neows' render={() => (
                        <NeowsContainer/>
                    )}/>
                    <Route path='/mrp' render={() => (
                        <MRPContainer/>
                    )}/>
            </div>
        );
    }
}

export default App;
