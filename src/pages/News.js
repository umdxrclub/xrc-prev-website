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

                <a id="news-button-big" className="button big white text-outline" src={NEWS_PAGE.NEWSLETTER_URL}
                    target="_blank" rel="noopener noreturner">VIEW FULL ARCHIVE</a>

            </div>

        );
    }
}

export default News;