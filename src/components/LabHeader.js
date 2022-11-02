
import '../App.css';
import React, { startTransition } from 'react';
import Navbar from '../components/Navbar';
import {LAB_PAGE} from '../XR_CONSTANTS';

class LabHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: "closed"
        };

        this.getLabStatus().then(res => {
            if (res.open || res.totalCheckedIn > 0) {
                this.setState({
                    status: "open"
                });
            }
            console.log("STATUS: " + this.state.status);
        })
        .catch(err => {
            console.log(err);
        });


    }

    getLabStatus = async () => {

        const response = await fetch('https://umdxrc.figsware.net/api/v1/lab');
        const body = await response.json();

        if (body.success !== true) {
            throw Error(body.message);
        }

        return body.data;

    };


    render() {

        return (

            <div id="header">
                <img className="background-svg" src="svg/header-background.svg" alt=""/>

                {/* Nav bar */}
                <Navbar />

                {/* Title */}
                <div className="horizontal-flex-container">

                    <img id="header-logo" src={`images/av-williams-${this.state.status}.jpg`} alt="Exterior of the A.V. Williams Building"/>
                    <div>
                        <img id="header-text" src={`svg/lab-${this.state.status}.svg`} alt={`Our lab is currently ${this.state.status}`}/>
                        {
                            LAB_PAGE.LAB_ADDRESS.map(line => {
                                return <h3>{line}</h3>
                            })
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default LabHeader;