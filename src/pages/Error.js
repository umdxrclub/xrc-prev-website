/**
 * Component definition to render the "News" page of the website.
 */

import '../App.css';
import React from 'react';
import HalfBanner from '../components/HalfBanner';
import { ERROR_PAGE } from '../XR_CONSTANTS';
import {Link} from 'react-router-dom';
import Loader from '../components/Loader';

class Error extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            
            <div id="Error">

                <HalfBanner pageName="Error" headerImage="404" subheading={ERROR_PAGE.DESCRIPTION}/>
                <Loader />
                <p className="text-align-center">Go back <Link to="/">home</Link></p>

            </div>

        );
    }
}

export default Error;