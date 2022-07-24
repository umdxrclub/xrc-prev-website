import React from "react";
import RSSItem from "./RSSItem";
import TorusText from "./TorusText";
import { NEWS_PAGE, LINKS } from '../XR_CONSTANTS';
import { getAnalytics, logEvent } from "firebase/analytics";
import app from '../Firebase';

class RSSFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = { feed: undefined };
    }

    async componentDidMount() {
        this.getRSSfeed()
            .then(res => {
                this.setState({ feed : res.rss.channel[0].item })

                // Log newsletter link clicks with Firebase
                const analytics = getAnalytics(app);
                const links = document.querySelectorAll("a");
                links.forEach(link => {
                    let itemID = "";
                    if (link.href.indexOf("mailchi.mp") > 0) {
                        itemID = "Newsletter Post"
                    }
                    if (itemID != "") {
                        link.addEventListener("click", function() {
                            logEvent(analytics, 'select_content', {
                                content_id: itemID
                            });
                            console.log(itemID + " selected");
                        });
                    }
                });
            })
            .catch(err => console.log(err));
    }

    getRSSfeed = async () => {
        const response = await fetch('/xreport-rss');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    render() {
        if (this.state.feed) {
            return (
            <div className="padding-wide">
                { this.state.feed.map(item => {
                    // console.log(item);
                    return <RSSItem item={item} />
                })}
            <a id="news-button-big" className="button big white text-outline" href={LINKS.NEWSLETTER_STR}
                target="_blank" rel="noopener noreturner">VIEW FULL ARCHIVE</a>
            </div>
            );
        } else {
            return (
                <div>
                    <TorusText />
                </div>
            )
        }
    }
}

export default RSSFeed;