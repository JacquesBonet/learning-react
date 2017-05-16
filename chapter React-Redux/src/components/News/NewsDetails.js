import React from "react";
import PropTypes from "prop-types";


export const NewsDetails = ({url}) =>
    <div className="row">
        <iframe className="card col-sm-12 col-md-12" style={{height:screen.height - 285}} src={url}/>
    </div>


NewsDetails.propTypes = {
    url: PropTypes.string.isRequired,
}
