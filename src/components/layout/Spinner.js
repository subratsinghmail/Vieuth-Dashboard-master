import React, { Fragment } from 'react';
import spinner from './loader.gif';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";
export default () => (
  <Fragment>
    <MDBContainer className="text-center d-flex justify-content-center mt-3">
    <img
      src={spinner}
      style={{ width: '250px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
    </MDBContainer>
  </Fragment>
);
