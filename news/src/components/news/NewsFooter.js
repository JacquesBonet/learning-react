import React from "react";
import PropTypes from "prop-types";
import "../../../stylesheets/News.css";


export const NewsFooter = ({publishedAt, url, onSelect}) =>
    <div className="news-footer">
        <span className="read-more" onClick={() => onSelect(url)}>Read more ...</span>
        <span className="published-at">{publishedAt.split('T')[0]}</span>
    </div>


NewsFooter.propTypes = {
    publishedAt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

