import React from "react";
import PropTypes from "prop-types";
import {NewsHeader} from "./NewsHeader";
import {NewsContent} from "./NewsContent";
import {NewsFooter} from "./NewsFooter";
import "../../../stylesheets/News.css";


export const News = (props) =>
    <article className="news">
        <NewsHeader {...props}/>
        <NewsContent {...props}/>
        <NewsFooter {...props}/>
    </article>


News.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    onSelect: PropTypes.func
}


