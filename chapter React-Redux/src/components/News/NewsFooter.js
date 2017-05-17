import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router';


export const NewsFooter = ({publishedAt, url, onSelect}) =>
    <div className="card-footer">
        <Link to={{ pathname: "/news/details", query: { url } }}>Read more ...</Link>
        <span className="float-right">{publishedAt.split('T')[0]}</span>
    </div>


NewsFooter.propTypes = {
    publishedAt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

