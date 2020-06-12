import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { MDBRow, MDBContainer, MDBInput, MDBModalFooter } from "mdbreact";
import { Link } from 'react-router-dom'
import classnames from "classnames";

const register_mutation = gql`   
mutation registerUser($fName:String!,$lName:String!, $email:String!, $password:String!,$gender:String!,$dob:String!,$role:String!){
  registerUser(input:{
    fName:$fName,
    lName:$lName,
    email:$email,
    password:$password,
    gender:$gender,
    dob:$dob,
    role:$role
  })
  {
    _id
    
    
  }
}
`

export default function Register() {
    const [fName, setFName] = useState("");
    const [LName, setLName] = useState("Kumar");
    const [role, setRole] = useState("0");
    const [dob, setDob] = useState("1994-01-14");
    const [gender, setGender] = useState("male");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    let [auth, { data, error, loading }] = useMutation(register_mutation);

    const register = () => {
        auth({ fName, LName, email, password, gender, dob, role }).then(({ data }) => {
            console.log("login Response:", data)
        }).catch(err => {
            console.log("error Occured in registering user:", err)
        })
    }
    if (loading) {
        return <div>loading..........</div>
    }
    else if (error) {
        return <div>Error....</div>
    }
    else
        return (
            <div>
                <MDBContainer fluid>
                    <MDBRow center>

                        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '45%' }}>
                            <div className=" w-responsive">
                                <form onSubmit={register}>
                                    <p className="h4 text-center mb-4">Sign Up</p>


                                    <MDBInput label="Type your Name" required name="fName" icon="user" group type="text" validate error="wrong" success="right" value={fName} onChange={e => setFName(e.target.value)} error={errors.name} className={classnames("", { invalid: errors.name })} />
                                    <span className="red-text text-center">{errors.name}</span>
                                    <MDBInput label="Type your email" type="sumbit" required name="email" icon="envelope" group type="email" validate error="wrong" success="right" value={email} onChange={e => setEmail(e.target.value)} error={errors.email} className={classnames("", { invalid: errors.email })} />
                                    <span className="red-text text-center">{errors.email}</span>
                                    <MDBInput label="Type your password" type="submit" required name="password" icon="key" group type="password" validate value={password} onChange={e => setPassword(e.target.value)} error={errors.password} className={classnames("", { invalid: errors.password })} />
                                    <span className="red-text text-center">{errors.password}</span>
                                    <div className="p-3 mb-2">
                                        <select isRequired="true" className="browser-default custom-select" value={role} onChange={e => setRole(e.target.value)} >
                                            <option value="0">Choose your Role</option>
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
                                                <i class="fab fa-facebook-f p-2 " style={{ fontSize: '20px' }}></i>
                                            </div>
                                            <div> <i class="fab fa-linkedin-in p-2" style={{ fontSize: '20px' }}></i></div>
                                            <div>  <i class="fab fa-google p-2" style={{ fontSize: '20px' }}></i> </div>
                                        </div>
                                    </div>
                                    <MDBModalFooter className="mx-5 pt-3 mb-1"></MDBModalFooter>
                                    <p className="text-center"><strong>Jump Back to</strong><strong className="blue-text ml-2"><Link to="/login">Sign In</Link></strong></p>
                                </form>
                            </div>
                        </div>
                    </MDBRow>
                </MDBContainer>

            </div>
        )
}


