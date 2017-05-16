import React from "react";
import PropTypes from "prop-types";
import {NewsHeader} from "./NewsHeader";
import {NewsContent} from "./NewsContent";
import {NewsFooter} from "./NewsFooter";


export const News = (props) =>
    <div className="card col-sm-4 col-md-">
        <NewsHeader {...props}/>
        <NewsContent {...props}/>
        <NewsFooter {...props}/>
    </div>


News.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    onSelect: PropTypes.func
}


