import React from "react";

class RSSItem extends React.Component {
    constructor(props) {
        super(props);
        this.getTextPreview = this.getTextPreview.bind(this);
        this.getImagePreview = this.getImagePreview.bind(this);
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

    render() {
        return (
            <div className="news-item">
                <a href={this.props.item.link} target="_blank" rel="noopener noreferrer">
                    <img src={this.getImagePreview(this.props.item)}></img>
                    <h4>{this.props.item.title}</h4>
                    <p>{this.getTextPreview(this.props.item)}</p>
                    <p>{this.props.item.pubDate[0]}</p>
                </a>
            </div>
        )
    }
}

export default RSSItem;