import React from "react";

class RSSItem extends React.Component {
    constructor(props) {
        super(props);
        //this.props.item.title = this.props.item.title.toUpperCase();
        this.getTextPreview = this.getTextPreview.bind(this);
        this.getImagePreview = this.getImagePreview.bind(this);
        this.parseDate = this.parseDate.bind(this);
    }


    getTextPreview(item) {

        let content = item['content:encoded'][0];
        let content_start = content.indexOf("THIS WEEK'S TOPICS");
        let pStart = content.indexOf("<p style=", content_start + 1);
        let pEnd = content.indexOf("</p>\n", pStart + 1);
        if (pStart > 0 && pEnd > 0) {
            let text = content.substring(pStart, pEnd) + "</p>";
            const preview = document.createElement("div");
            preview.innerHTML = text;
            return preview.innerText;
        }
        return "";
    }

    getImagePreview(item) {

        let content = item['content:encoded'][0];
        const URL_PREFIX = 'https://mcusercontent.com/';
        let urlStart = content.indexOf(URL_PREFIX);
        let urlEnd = content.indexOf("\"", urlStart + 1);
        if (urlStart > 0 && urlEnd > 0) {
            return content.substring(urlStart, urlEnd);
        }
        return "";
    }

    parseDate(date) {
        let words = date.split(' ');
        //return date;
        return ([words[1], words[2], words[3]]).join(' ').toUpperCase();
    }

    render() {
        return (
            <a className="news-item underline" href={this.props.item.link} target="_blank" rel="noopener noreferrer">
                <div className="news-image">
                    <img src={this.getImagePreview(this.props.item)}></img>
                </div>
                <div className="content">
                    <h5>{this.props.item.title}</h5>
                    <p className="news-date">{this.parseDate(this.props.item.pubDate[0])}</p>
                    <p className="news-description">
                        <strong>THIS WEEK'S TOPICS: </strong>
                        {this.getTextPreview(this.props.item)}
                    </p>
                </div>
                <img className="hover-arrow" src="svg/right-arrow.svg"></img>
            </a>
        )
    }
}

export default RSSItem;