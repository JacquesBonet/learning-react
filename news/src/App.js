import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../stylesheets/App.css';
import {isoFetch} from './actions/fetch'
import {NewsList} from "./components/news/NewsList";
import {NewsDetails} from "./components/news/NewsDetails";

class App extends Component {

  constructor( props) {
      super(props)
      this.state = {
          dataNews: {
              source: '',
              articles: []
          },
          urlNewsDetails: ''
      }
      this.onSelect = this.onSelect.bind( this)
  }

  componentWillMount() {
    const response = isoFetch( 'https://newsapi.org/v1/articles?source=the-huffington-post&sortBy=top&apiKey=3ce0be24528e4a3e85d27164eef5dbb3')

    response
       .then(dataNews => this.setState( {dataNews, urlNewsDetails: ''}))
       .catch(reason => console.error(reason.message))
  }
  
  onSelect(urlNewsDetails) {
      this.setState( {urlNewsDetails})
  }

  render() {
    const {articles} = this.state.dataNews
    const {urlNewsDetails} = this.state
    const {onSelect} = this

    return (
      <div className="app">
          {
              (urlNewsDetails.length === 0) ?
                  <NewsList newsList={articles} onSelect={onSelect}/> :
                  <NewsDetails url={urlNewsDetails}/>
          }
      </div>
    );
  }
}

App.propTypes = {
    onSelect: PropTypes.func
}


export default App;
