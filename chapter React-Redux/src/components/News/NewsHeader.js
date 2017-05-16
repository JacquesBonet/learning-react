import React from "react";
import PropTypes from "prop-types";


export const NewsHeader = ({title, urlToImage}) =>
    <div className="card-header">
        <img alt="" className="img-fluid" src={urlToImage}/>
        <h4>{title}</h4>
    </div>


NewsHeader.propTypes = {
    title: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
}

