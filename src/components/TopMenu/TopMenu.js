import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import './TopMenu.scss';

class TopMenu extends Component {
  render() {
    const { pages } = this.props;

    return (
      <Nav className="TopMenuComponent navbar navbar-expand-sm navbar-dark bg-dark mb-3">
        <div className="collapse navbar-collapse justify-content-md-center">
          { pages.map(page => <NavItem key={ page.url }><NavLink href={ page.url }>{ page.name }</NavLink></NavItem>) }
        </div>
      </Nav>
    );
  }
}

export default TopMenu;
