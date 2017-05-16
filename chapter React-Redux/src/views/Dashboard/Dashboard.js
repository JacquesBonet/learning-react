import React, { Component } from 'react';
import { Link } from 'react-router';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Link to={{ pathname: '/news/details', query: { name: 'ryan' } }}>
          Hello
        </Link>
      </div>
    )
  }
}

export default Dashboard;
