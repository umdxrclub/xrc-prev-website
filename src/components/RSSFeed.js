import React from "react";
import RSSItem from "./RSSItem";

class RSSFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = { feed: undefined };
    }

    async componentDidMount() {
        this.getRSSfeed()
            .then(res => this.setState({ feed : res.rss.channel[0].item }))
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
            </div>
            );
        } else {
            return (
                <p className="padding-wide">Loading feed...</p>
            )
        }
    }
}

export default RSSFeed;