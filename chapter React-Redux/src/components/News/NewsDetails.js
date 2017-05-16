import React from "react";
import PropTypes from "prop-types";
import "../../../scss/news/News.scss";


export const NewsDetails = ({url}) =>
    <iframe className="news-details"
            style={{height:screen.height}} src={url}/>


NewsDetails.propTypes = {
    url: PropTypes.string.isRequired,
}
