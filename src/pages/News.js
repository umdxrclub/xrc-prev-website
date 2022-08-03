/**
 * Component definition to render the "News" page of the website.
 */

import '../App.css';
import React from 'react';
import HalfBanner from '../components/HalfBanner';
import RSSFeed from '../components/RSSFeed';
import ReactMarkdown from 'react-markdown';
import { NEWS_PAGE } from '../XR_CONSTANTS';
import { getAnalytics, logEvent } from "firebase/analytics";
import app from '../Firebase';

class News extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "News | XR Club at UMD"

        if (window.location.href.indexOf("localhost") == -1) {
            const analytics = getAnalytics(app);
            logEvent(analytics, 'screen_view', {
                firebase_screen: 'news', 
            });
        }
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