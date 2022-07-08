/**
 * Component definition to render the "News" page of the website.
 */

import '../App.css';
import React from 'react';
import HalfBanner from '../components/HalfBanner';
import RSSFeed from '../components/RSSFeed';
import ReactMarkdown from 'react-markdown';
import { NEWS_PAGE } from '../XR_CONSTANTS';

class News extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            
            <div id="News">

                <HalfBanner pageName="News" headerImage="news" subheading={NEWS_PAGE.DESCRIPTION}/>

                <RSSFeed />

            </div>

        );
    }
}

export default News;