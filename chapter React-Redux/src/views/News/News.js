import React, { Component } from 'react';
import PropTypes from "prop-types";
import NewsList from "../../containers/News/NewsList";
import {isoFetch} from '../../actions/fetch'

class News extends Component {

    constructor( props) {
        super(props)
        this.state = {
            dataNews: {
                source: '',
                articles: []
            }
        }
    }

    componentWillMount() {
        const response = isoFetch( 'https://newsapi.org/v1/articles?source=the-huffington-post&sortBy=top&apiKey=3ce0be24528e4a3e85d27164eef5dbb3')

        response
            .then(dataNews => this.setState( {dataNews}))
            .catch(reason => console.error(reason.message))
    }

    render() {
        const {articles} = this.state.dataNews

        return (
            <div className="animated fadeIn">
               <NewsList newsList={articles}/> :
            </div>
        );
    }
}

News.propTypes = {
    onSelect: PropTypes.func
}


export default News;

