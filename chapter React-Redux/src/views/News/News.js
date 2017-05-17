import React, { Component } from 'react';
import PropTypes from "prop-types";
import {NewsList} from "../../components/News/NewsList";

class News extends Component {

    constructor( props) {
        super(props)
    }

    componentWillMount() {
        this.props.readNews()
    }

    render() {
        const {news, search} = this.props
        return (
            <div className="animated fadeIn">
               <NewsList newsList={news.articles} search={search}/> :
            </div>
        );
    }
}

News.propTypes = {
    readNews: PropTypes.func,
    news: PropTypes.object,
    search: PropTypes.array
}


export default News;

