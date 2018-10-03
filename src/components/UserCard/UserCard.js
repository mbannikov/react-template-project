import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types';

class UserCard extends Component {
  render() {
    const { name, email } = this.props;

    return (
      <Card>
        <CardBody>
          <CardTitle>{ name }</CardTitle>
          <CardSubtitle>{ email }</CardSubtitle>
        </CardBody>
      </Card>
    );
  }
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default UserCard;
