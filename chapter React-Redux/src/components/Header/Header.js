import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Select from 'react-select'

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      values: []
    }
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  handleOnChange(values) {
    this.props.newSearch( values)
    this.setState( {values})
  }

  render() {
    const {values} = this.state

    return (
      <header className="app-header navbar">
        <button className="navbar-toggler mobile-sidebar-toggler hidden-lg-up" onClick={this.mobileSidebarToggle} type="button">&#9776;</button>
        <a className="navbar-brand" href="#"></a>
        <ul className="nav navbar-nav hidden-md-down">
          <li className="nav-item">
            <a className="nav-link navbar-toggler sidebar-toggler" onClick={this.sidebarToggle} href="#">&#9776;</a>
          </li>
          <li className="nav-item">
            <Select.Creatable style={{width:"300"}}
                multi={true}
                onChange={(values) => this.handleOnChange(values)}
                value={values}
            />
          </li>
        </ul>
      </header>
    )
  }
}

Header.propTypes = {
  newSearch: PropTypes.func
}

export default Header;
