import React, { useEffect, useState } from 'react'
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import classnames from "classnames";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { useQuery, useMutation } from '@apollo/react-hooks'
import { MDBRow, MDBContainer, MDBInput, MDBModalFooter } from "mdbreact";
import Spinner from '../layout/Spinner'
import './login.css';
const loginMutation = gql`
mutation login($email:String!, $password:String!){
  login(input:{
    email:$email,
    password:$password
  })
  {
    _id
  }
}
`;
const sendEmailMutation = gql`
  mutation{
  verifyUserEmail(input:{

  })
  }

`;
function LoginNew(props) {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    errors: {},
    disabled: "true"
  })
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    // if (props.auth.isAuthenticated) {
    //     props.history.push("/dashboard");
    //   }
    if (props.errors) {
      setLoginState({
        ...loginState,
        errors: props.errors
      })
    }

  }, [submitted, props.errors, props.loginUser])
  const [loginFunction, { loading, error, data }] = useMutation(loginMutation, {
    onCompleted(cd) {
      console.log("data here" + cd.login._id)
      const token = cd.login._id;
      const userData = {
        email: loginState.email,
        password: loginState.password,
        token: token
      }
      props.loginUser(userData, props.history);
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // debugger;
    console.log("loginState" + loginState)
    loginFunction({
      variables: {
        email: loginState.email,
        password: loginState.password
      }
    })
    //   console.log("data"+data);
    //   console.log("error"+error)
    // if (data) {
    //   console.log("data here" + data.login._id)
    //   const token = data.login._id;
    //   const userData = {
    //     email: loginState.email,
    //     password: loginState.password,
    //     token: token
    //   }
    //   props.loginUser(userData, props.history);
    // }
    if (error) {
      const userData = {
        token: null
      }
      props.loginUser(userData)
    }
    setSubmitted(true);
  }
  if (loading) {
    return <Spinner/>
  }
  return (
    <div>
      <MDBContainer fluid className="background">
        <MDBRow center>

          <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '45%' }}>
            <div className=" w-responsive">
              <form onSubmit={(e) => handleSubmit(e)}>
                <p className=" text-center text-black-100 h4 h4-responsive mb-5">Log In</p>

                <MDBInput label="Type your email" isRequired="true" name="email" icon="envelope" group type="email" validate error="wrong" success="right" value={loginState.email} onChange={(e) => setLoginState({ ...loginState, email: e.target.value })} error={loginState.errors ? loginState.errors.email : ''} />
                <span className="red-text text-center">
                  {loginState.errors && (<p>{loginState.errors.email}</p>)}
                  {/* {loginState.errors.emailnotfound} */}
                </span>
                <MDBInput label="Type your password" isRequired='true' name="password" icon="key" group type="password" validate value={loginState.password} onChange={(e) => setLoginState({ ...loginState, password: e.target.value })} error={loginState.errors ? loginState.errors.password : ''} />
                <span className="red-text text-center">
                  {loginState.errors && (<p>{loginState.errors.password}</p>)}
                  {/* {errors.password} */}
                  {/* {errors.passwordincorrect} */}
                </span>

                <p className="text-center h6 mb-4 blue-text"><Link to="/recoverPass">Forgot Password</Link></p>
                <div className="text-center">
                  <button className={`btn blue-gradient   p-2 w-responsive rounded`} type="submit">Sign In</button>

                  <p className="p-3 black-text"><strong>or Sign In with:</strong></p>
                  <div className="d-flex justify-content-around ">
                    <div>
                      <i class="fab fa-facebook-f p-2 " style={{ fontSize: '20px' }}></i>
                    </div>
                    <div> <i class="fab fa-linkedin-in p-2" style={{ fontSize: '20px' }}></i></div>
                    <div>  <i class="fab fa-google p-2" style={{ fontSize: '20px' }}></i> </div>
                  </div>
                </div>
                <MDBModalFooter className="mx-5 pt-3 mb-1"></MDBModalFooter>
                <p className="text-center"><strong>Not a member?</strong><strong className="blue-text ml-2"><Link to='/register'>Sign up?</Link></strong></p>
              </form>
            </div>

          </div>

        </MDBRow>
      </MDBContainer>
    </div>
  )
}

LoginNew.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(LoginNew));


