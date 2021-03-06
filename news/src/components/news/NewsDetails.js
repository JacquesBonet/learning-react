import React from "react";
import PropTypes from "prop-types";


export const NewsDetails = ({url}) =>
    <iframe className="news-details" style={{height:screen.height}} src={url}/>


NewsDetails.propTypes = {
    url: PropTypes.string.isRequired,
}
