import React from "react";
import PropTypes from "prop-types";
import {NewsHeader} from "./NewsHeader";
import {NewsContent} from "./NewsContent";
import {NewsFooter} from "./NewsFooter";


export const News = (props) =>
    <article className="card col-sm-4 col-md-">
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


