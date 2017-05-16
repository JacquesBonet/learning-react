import React, { Component } from 'react';
import {NewsDetails} from "../../../components/News/NewsDetails";
import "../../../../scss/news/NewsDetails.scss";

class Details extends Component {

  render() {
    const {url} = this.props.location.query
      
    return (
      <div className="app">
        <NewsDetails url={url} />
      </div>
    )
  }
}

export default Details