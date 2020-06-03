import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import gql from 'graphql-tag';
  
const client= new ApolloClient({
  uri:'https://vieuth-backend.herokuapp.com/graphql', // creating the new client
})

const mutation=gql`
mutation sendEmailVerificationCode($email:String!){
  sendEmailVerificationCode(input:$email)
}
`;

class recoverPass extends React.Component {
  state = {   
    email: "",
    messageSent:false  
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    client.mutate({
      mutation,
      variables:{email:this.state.email}
    }).then(res=>{
      const decide=res.data.sendEmailVerificationCode
      if(decide===true){
        alert("Mail Sent")
      }
      else{
        alert("there is some error")
      }
    })
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <ApolloProvider client={client}>
      <MDBContainer className="">
      <div class="d-flex justify-content-center align" style={{height:'100vh'}}>
        <div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="11" xs='12'>
              <p className="h5 text-center mb-9">    Reset your password</p>
           
              <MDBInput
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="materialFormRegisterConfirmEx3"
                name="email"
                label="Your Email address"
              >
                <small id="emailHelp" className="form-text text-muted">
                Enter your email and
         we'll send you reset instructions
                </small>
              </MDBInput>
              <button class="btn blue-gradient p-2 w-responsive rounded " type="submit">Send Email</button>
              
            </MDBCol>
                   
          </MDBRow>
        </form>
        </div>
        </div>
        </MDBContainer>
        </ApolloProvider>
    );
  }

}
export default recoverPass;