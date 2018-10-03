import React, { Component } from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';

import UserCard from 'src/components/UserCard';
import LoadingSpinner from 'src/components/LoadingSpinner';

const UserList = ({ list }) => (
  <Row>
    { list.map((user, index) => 
      <Col sm='4' className='mb-2' key={ index }>
        <UserCard name={ user.name } email={ user.email } />
      </Col>
    ) }
  </Row>
);

const ErrorMessage = ({ msg }) => (
  <Row>
    <Col>
      <Alert color='danger'>{ msg }</Alert>
    </Col>
  </Row>
)

class MainPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    let { isLoading, errMsg, list } = this.props.users;

    let content = errMsg !== null
      ? <ErrorMessage msg={ errMsg } />
      : isLoading 
        ? <LoadingSpinner />
        : <UserList list={ list } />;

    return (
      <Container>{ content }</Container>
    );
  }
}

export default MainPage;
