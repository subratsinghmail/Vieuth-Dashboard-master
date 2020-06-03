import React, {useState, Fragment} from 'react'
import Navbar from './Navbar'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link,withRouter} from 'react-router-dom'
import {getCurrentProfile} from '../../actions/profile'

function CreateProfile(props) {
    
        const [formData,setFormData]=useState({
            fullName:'',
            fName:'',
            lName:'',
            profilePicUrl:'',
            dob:'',
            gender:'',
            college:'',
            university:'',
            branch:'',
            degree:'',
            // tags:'',
            // globalRank:'',
            // tagsRank:'',
            contact:'',
            // company:'',
            website:'',
            // location:'',
            // skills:'',
            // githubusername:'',
            bio:'',
            address:'',
            twitter:'',
            facebook:'',
            linkedin:'',
            youtube:'',
            instagram:'',
            githubusername:''
        })
        const [displaySocialInputs,toggleSocialInputs]=useState(false);
        const{
          fullName,
          fName,
          lName,
          profilePicUrl,
          dob,
          gender,
          college,
          university,
          branch,
          degree,
          // tags,
          // globalRank,
          // tagsRank,
          contact,
          // company:'',
          website,
          // location:'',
          // skills:'',
          // githubusername:'',
          bio,
          address,
          twitter,
          facebook,
          linkedin,
          youtube,
          instagram,
          githubusername
        }=formData
        const onChange=(e)=>{
            // e.preventDefault();
            console.log(formData)
            setFormData({...formData,[e.target.name]:e.target.value})
            
        }
        const onSubmit=(e)=>{
            // console.log(formData) 
            
            e.preventDefault()  
            props.getCurrentProfile(formData,props.history) 
        }
        return (
            <div>
            <Navbar/>
            <section className="container " style={{boxShadow:' -3px 5px 5px 5px #aaaaaa',marginTop:'1rem'}}>
      <h1 className="large "  style={{color:'rgb(92, 206, 183)',fontWeight:'600'}}>
        Create Your Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user" ></i> Let's get some information to make your
        profile stand out
        <strong>{console.log(formData)}</strong>
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={(e)=>onSubmit(e)}>
        <div className="form-group">
        <div className="form-group">
          <input type="text" placeholder="Full Name" name="fullName" value={fullName} onChange={(e=>onChange(e))} required/>
          <small className="form-text"
            >Enter your Full Name</small
          >
        </div>

        <div className="form-group">
          <input type="text" placeholder="First Name" name="fName" value={fName} onChange={(e=>onChange(e))} required/>
          <small className="form-text"
            >Enter your First Name</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Last Name" name="lName" value={lName} onChange={(e=>onChange(e))} />
          <small className="form-text"
            >Enter your Last Name</small
          >
        </div>
        <div className="form-group">
          <input type="file" placeholder="Profile Pic" name="profilePicUrl" value={profilePicUrl} onChange={(e=>setFormData(e))} />
          <small className="form-text"
            >Upload your profile picture</small
          >
        </div>
        <div className="form-group">
          <input type="date" placeholder="D.O.B" name="dob" value={dob} onChange={(e=>onChange(e))} required/>
          <small className="form-text"
            >Seclct your date of birth*</small
          >
        </div>
        <div class="form-group">
          <select name="gender" value={gender} onChange={(e=>onChange(e))}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          <small className="form-text"
            >Select your gender</small
          >
          </div>
        </div>
        <div className="form-group">
          <input type="text" placeholder="College Name" name="college" value={college} onChange={(e=>onChange(e))} required />
          <small className="form-text"
            >Enter your college name</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="University Name" name="university" value={university} onChange={(e=>onChange(e))} />
          <small className="form-text"
            >Enter your University</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Branch Name" name="branch" value={branch} onChange={(e=>onChange(e))} required/>
          <small className="form-text"
            >Enter Branch Name</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Degree" name="degree" value={degree} onChange={(e=>onChange(e))} required />
          <small className="form-text"
            >Enter the type of degree/course</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Contact" name="contact" value={contact} onChange={(e=>onChange(e))} required/>
          <small className="form-text"
            >Enter your contact details</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Address" name="address" value={address} onChange={(e=>onChange(e))} required />
          <small className="form-text"
            >Enter your address</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" onChange={(e=>onChange(e))} value={website} />
          <small className="form-text"
            >Could be your own or a company website</small
          >
        </div>
        {/* <div className="form-group">
          <input type="text" placeholder="* Skills" name="skills" onChange={(e=>onChange(e))}value={skills} />
          <small className="form-text"
            >Please use comma separated values (eg.
            HTML,CSS,JavaScript,PHP)</small
          >
        </div> */}
        {/* <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            onChange={(e=>onChange(e))}
            value={githubusername}
          />
          <small className="form-text"
            >If you want your latest repos and a Github link, include your
            username</small
          >
        </div> */}
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio"  onChange={(e=>onChange(e))} value={bio}></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button onClick={()=>toggleSocialInputs(!displaySocialInputs)} style={{marginBottom:'1rem'}} type="button" className="btn btn-light">
            Add Social Network Links
          </button>
          <span><small>Optional</small></span>
        </div>
            {displaySocialInputs&&<Fragment>
                <div className="form-group social-input">
          <i style={{color:'rgb(57, 70, 211)'}} className="fab fa-twitter fa-2x"></i>
          <input  type="text" placeholder="Twitter URL" name="twitter"  onChange={(e=>onChange(e))} value={twitter}/>
        </div>

        <div className="form-group social-input">
          <i style={{color:'rgb(125, 68, 229)'}} className="fab fa-facebook fa-2x"></i>
          <input type="text" placeholder="Facebook URL" name="facebook"  onChange={(e=>onChange(e))}value={facebook} />
        </div>

        <div className="form-group social-input">
          <i style={{color:'rgb(244, 12, 39)'}} className="fab fa-youtube fa-2x"></i>
          <input type="text" placeholder="YouTube URL" name="youtube"  onChange={(e=>onChange(e))} value={youtube}/>
        </div>
        <div className="form-group social-input">
          <i style={{color:'black'}} className="fab fa-github fa-2x"></i>
          <input type="text" placeholder="Github URL" name="githubusername"  onChange={(e=>onChange(e))} value={githubusername}/>
        </div>

        <div className="form-group social-input">
          <i style={{color:'rgb(57, 70, 211)'}} className="fab fa-linkedin fa-2x"></i>
          <input type="text" placeholder="Linkedin URL" name="linkedin"  onChange={(e=>onChange(e))} value={linkedin}/>
        </div>

        <div className="form-group social-input">
          <i style={{color:'rgb(244, 14, 194)'}}className=" fab fa-instagram fa-2x"></i>
          <input type="text" placeholder="Instagram URL" name="instagram"  onChange={(e=>onChange(e))} value={instagram} />
        </div>
            </Fragment>

            }
        
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
    </section>
            </div>
        )
    
}

CreateProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}
const mapStateToProps=state=>({
  isAuthenticated:state.auth.isAuthenticated,
  profile:state.profile.profile
})

export default connect(mapStateToProps,{getCurrentProfile})(withRouter(CreateProfile))


