import React from 'react';
import { Row, Col } from 'reactstrap';

const LoadingSpinner = () => {
  return(
    <Row className='m-3'>
      <Col className='text-center'>
        <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-secondary"></span>
      </Col>
    </Row>
  );
};

export default LoadingSpinner;
