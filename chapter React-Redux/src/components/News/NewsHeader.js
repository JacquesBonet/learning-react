import React from "react";
import PropTypes from "prop-types";
import "../../../scss/news/News.scss";


export const NewsHeader = ({title, urlToImage}) =>
    <div className="news-header">
        <img alt="" className="image" src={urlToImage}/>
        <h1>{title}</h1>
    </div>


NewsHeader.propTypes = {
    title: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
}

