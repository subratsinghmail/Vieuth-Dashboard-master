import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardText, MDBRow, MDBCol, MDBBtn, MDBCardImage, MDBCardTitle } from 'mdbreact';
import logo from '../../vieuth.png'

export default function StudentOpportunityCard(props) {
    return (
        <MDBCol size="12" sm="6" md="4" lg="3"  className="mt-3">
            <MDBCard style={{ borderRadius: '12px', overflow: "hidden" }} >
                <div className="bg-dark">
                    <MDBCardImage className="mx-auto d-block img-fluid" src={logo} waves alt="Card image cap" height='100px' />
                    {/* <hr style={{color:'black',backgroundColor:'black'}}/> */}
                    <hr />
                </div>
                <MDBCardBody>
                    <MDBCardTitle style={{ fontWeight: '500', fontSize: '1rem', display: 'flex', flex: 'left', marginLeft: '0.2rem' }}>{props.data.title}</MDBCardTitle>
                    <MDBCardText>
                        <MDBRow style={{ fontWeight: '400', display: 'flex', flex: 'left', marginLeft: '0.2rem' }}>
                            <small>{props.data.body?props.data.body:"Some"} Company</small>
                        </MDBRow>
                        <MDBRow className="text-center mt-2">
                            <MDBCol size="6" sm="6" style={{ fontWeight: '700', fontSize: '0.7rem' }}>Apply Before </MDBCol>
                            <MDBCol size="6" sm="6" style={{ fontWeight: '300', fontSize: '0.7rem' }}>{props.data.end?new Date(parseInt(props.data.end)).toString().substring(4,16):"End Date"}</MDBCol>
                        </MDBRow>
                        <MDBRow className="text-center" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <MDBCol size="5" sm="5" style={{ fontWeight: '500', borderColor: 'black', backgroundColor: 'white', borderWidth: '1px', borderStyle: 'solid', fontSize: '0.8rem',padding:'1px 1px' }}><i className="fas fa-award">{` Rewards`}</i></MDBCol>
                            <MDBCol size="5" sm="5" style={{ fontWeight: '500', borderColor: 'black', backgroundColor: 'white', borderWidth: '1px', borderStyle: 'solid', fontSize: '0.8rem' ,padding:'1px 1px'}}><i class="fa fa-eye" aria-hidden="true">{` 41`}</i></MDBCol>
                        </MDBRow>
                        <MDBRow className=" text-center" style={{ display: 'flex', justifyContent: 'center' }}>
                            <MDBBtn size="12" className="p-1" style={{ backgroundColor: 'rgb(43, 239, 89)', width: '50%', marginBottom: '1rem', borderStyle: 'solid', borderRadius: '4px', borderWidth: '0', padding: '0rem 0rem', color: 'black' }}>
                                Apply
                </MDBBtn>

                        </MDBRow>
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}
