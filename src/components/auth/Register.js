import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { MDBRow,MDBContainer,MDBInput, MDBModalFooter} from "mdbreact";
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import gql from 'graphql-tag';
//import { graphql } from "graphql";
//import { GET_ERRORS } from "../../actions/types";

const client= new ApolloClient({
  uri:'https://vieuth-backend.herokuapp.com/graphql', // creating the new client
})

//  adding thr graphql mutation

const mutation=gql`   
mutation registerUser($fName:String! $email:String!, $password:String!){
  registerUser(input:{
    fName:$fName,
    email:$email,
    password:$password
  })
  {
    _id
    
    
  }
}
`
class Register extends Component {
  constructor() {
    super();
    this.state = {
      fName: "",
      email: "",
      password: "",
      role:"null",
      errors: {}
    };
  }
  
componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onChange2=(e)=>{
    this.setState({value: e.target.value});
  }


onSubmit = e => {
 e.preventDefault();
 console.log('button clicked')
 client.mutate({
   mutation,
   variables:{fName:this.state.fName, email:this.state.email, password:this.state.password, role:this.state.role}
 }).then(res=>{
   console.log("Registeration Successfull")
   console.log(res.data.registerUser._id);
   const token=res.data.registerUser._id;
   const userData={
     token
   }
   this.props.registerUser(userData)
 })
 .catch((error)=>{
    console.log(error);
 })
   
 
}

  

render() {
    const { errors } = this.state;
return (
      <ApolloProvider client={client}>
  <MDBContainer fluid>
  <MDBRow  center>
        
           <div className="d-flex justify-content-center align-items-center" style={{height:'100vh', width:'45%'}}>
             <div className=" w-responsive">
             <form onSubmit={this.onSubmit}> 
                           <p className="h4 text-center mb-4">Sign Up</p>
                            
            
                                <MDBInput label="Type your Name" type="submit" required name="fName" icon="user" group type="text" validate error="wrong" success="right" value={this.state.fName} onChange={this.onChange} error={errors.name} className={classnames("", {invalid: errors.name})} />
                                <span className="red-text text-center">{errors.name}</span>
                            <MDBInput label="Type your email" type="sumbit" required name="email" icon="envelope" group type="email" validate error="wrong" success="right" value={this.state.email} onChange={this.onChange} error={errors.email}  className={classnames("", {invalid: errors.email})} />
                            <span className="red-text text-center">{errors.email}</span>
                            <MDBInput label="Type your password" type="submit" required name="password" icon="key" group type="password" validate value={this.state.password} onChange={this.onChange} error={errors.password} className={classnames("", {invalid: errors.password})} />
                            <span className="red-text text-center">{errors.password}</span>
                            <div className="p-3 mb-2"> 
                            <select  isRequired="true" className="browser-default custom-select" value={this.state.role} onChange={this.onChange2} >
                             <option>Choose your Role</option>
                              <option value="student">Student</option>
                                <option value="college" >College</option>
                                  <option value="company">Company</option>
                                  </select>
                            </div>
                             <div className="text-center">
                             <button class="btn blue-gradient p-2 w-responsive " type="submit">Register</button>
                              <p className="p-2 black-text"><strong>or Sign Up with:</strong></p>
                              <div className="d-flex justify-content-around ">
                              <div>
                              <i class="fab fa-facebook-f p-2 " style={{fontSize:'20px'}}></i>
                              </div>
                             <div> <i class="fab fa-linkedin-in p-2" style={{fontSize:'20px'}}></i></div>
                            <div>  <i class="fab fa-google p-2" style={{fontSize:'20px'}}></i> </div>
                              </div>
                             </div>
                             <MDBModalFooter className="mx-5 pt-3 mb-1"></MDBModalFooter>
                             <p className="text-center"><strong>Jump Back to</strong><strong className="blue-text ml-2"><Link to="/login">Sign In</Link></strong></p>
                             </form>
            </div>
            </div>
            </MDBRow>
</MDBContainer>
</ApolloProvider>

         
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));