import React, { Component } from 'react';
import {NewsDetails} from "../../../components/News/NewsDetails";

class Details extends Component {

  render() {
    const {url} = this.props.location.query
      
    return (
      <div className="animated fadeIn">
        <NewsDetails url={url} />
      </div>
    )
  }
}

export default Details