import React from "react";
import PropTypes from "prop-types";


export const NewsContent = ({description}) =>
    <div className="card-block">
        <div className="description">{description}</div>
    </div>


NewsContent.propTypes = {
    description: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
}

