import React from "react";
import PropTypes from "prop-types";


export const NewsHeader = ({title, urlToImage}) =>
    <div className="card-header">
        <img alt="" className="img-fluid" src={urlToImage}/>
        <h5>{title}</h5>
    </div>


NewsHeader.propTypes = {
    title: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
}

