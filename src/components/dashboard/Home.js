import React, {useState} from 'react'
import vieuth from '../../vieuth.png'
import logo from './logo192.png'
import avatar from './avatar.png'
import './Home.css'

import { MDBContainer, MDBRow, MDBCol ,MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText} from "mdbreact";
import { useEffect } from 'react'
function Home(props) {
    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    }, [width,height])
    return (
        
            <MDBContainer >

            {/* {width>=1028&&(<div className="container container-right-menu" style={{width:'10vw',boxShadow:' -5px 0px 5px 0px #aaaaaa',height:'100vh',overflow: 'auto',float:'right',position:'relative',top:'-47px'}}>
                    <div className="row">
                    <img className="card-img-top img-fluid" src={avatar} alt="Card image cap" width='70' height='70' />
                    </div>
                    <div className="row">
                        <small style={{fontSize:"0.8vw"}}>Total Projects</small><br/>
                        <strong style={{fontSize:"1.2vw",borderLeftColor:'black',borderLeftWidth:'2px',borderLeftStyle:'solid'}}>189</strong>
                    </div>
                    <div className="row">
                        <small style={{fontSize:"0.8vw"}}>In Progress</small><br/>
                        <strong style={{fontSize:"1.2vw",borderLeftColor:'yellow',borderLeftWidth:'2px',borderLeftStyle:'solid'}}>19</strong>
                    </div>
                    <div className="row">
                        <small style={{fontSize:"0.8vw"}}>Completed</small><br/>
                        <strong style={{fontSize:"1.2vw",borderLeftColor:'orange',borderLeftWidth:'2px',borderLeftStyle:'solid'}}>18</strong>
                    </div>
                    <div className="row">
                        <small style={{fontSize:"0.8vw"}}>Expired</small><br/>
                        <strong style={{fontSize:"1.2vw",borderLeftColor:'red',borderLeftWidth:'2px',borderLeftStyle:'solid'}}>2</strong>
                    </div>
                </div>)} */}

                {/* {width>=1028&&(<MDBContainer className="" style={{width:'10vw',boxShadow:' -5px 0px 5px 0px #aaaaaa',height:'100vh',overflow: 'auto',float:'right',position:'relative',top:'-47px'}}>
                    <MDBRow className="">
                    <img className="img-fluid" src={avatar} alt="Card image cap" width='70' height='70' />
                    </MDBRow>
                    <MDBRow className="">
                        <small style={{fontSize:"0.8vw"}}>Total Projects</small><br/>
                        <strong style={{fontSize:"1.2vw",borderLeftColor:'black',borderLeftWidth:'2px',borderLeftStyle:'solid'}}>189</strong>
                    </MDBRow>
                    <MDBRow className="">
                        <small style={{fontSize:"0.8vw"}}>In Progress</small><br/>
                        <strong style={{fontSize:"1.2vw",borderLeftColor:'yellow',borderLeftWidth:'2px',borderLeftStyle:'solid'}}>19</strong>
                    </MDBRow>
                    <MDBRow className="">
                        <small style={{fontSize:"0.8vw"}}>Completed</small><br/>
                        <strong style={{fontSize:"1.2vw",borderLeftColor:'orange',borderLeftWidth:'2px',borderLeftStyle:'solid'}}>18</strong>
                    </MDBRow>
                    <MDBRow className="">
                        <small style={{fontSize:"0.8vw"}}>Expired</small><br/>
                        <strong style={{fontSize:"1.2vw",borderLeftColor:'red',borderLeftWidth:'2px',borderLeftStyle:'solid'}}>2</strong>
                    </MDBRow>
                </MDBContainer>)} */}

                <div>
                <MDBContainer style={{ backgroundColor:'white',color:'black',borderRadius:'12px',borderStyle:'solid',borderWidth:'1px',position:'relative',height:'19vh'}}>
            
            <MDBContainer className="menu " style={{backgroundColor:'white',borderRadius:'12px',borderStyle:'solid',borderWidth:'1px',position:'absolute',top:'-35%',height:'12vh',width:'90%',left:'5%'}}>
                 <MDBRow className="text-center " style={{marginTop:'1vh'}} >
                     <MDBCol size="1" sm="1" md="2" >
                     <i className="fas fa-check-double"></i><br/>
                     <small style={{fontSize:width<500?'1.8vw':'1vw'}}><strong>All</strong></small>
                     </MDBCol>
                     <MDBCol size="3" sm="3" md="2" >
                     <i class="fas fa-trophy"></i><br/>
                     <small style={{fontSize:width<500?'1.8vw':'1vw'}}><strong>Competetions</strong></small>
                     </MDBCol>
                     <MDBCol size="1" sm="1" md="2" >
                     <i class="fas fa-question"></i><br/>
                     <small style={{fontSize:width<500?'1.8vw':'1vw'}}><strong>Quizes</strong></small>
                     </MDBCol>
                     <MDBCol size="2" sm="2" md="2" >
                     <i class="fas fa-laptop-code"></i><br/>
                     <small style={{fontSize:width<500?'1.8vw':'1vw'}}><strong>Hackthons</strong></small>
                     </MDBCol>
                     <MDBCol size="2" sm="2" md="2" >
                     <i class="fas fa-award"></i><br/>
                         <small style={{fontSize:width<500?'1.8vw':'1vw'}}><strong>Scholarships</strong></small>
                     </MDBCol>
                     <MDBCol size="2" sm="2" md="2" >
                     <i class="fas fa-briefcase"></i><br/>
                     <small style={{fontSize:width<500?'1.8vw':'1vw'}}><strong>Internships</strong></small>
                     </MDBCol>
                     {/* <div className="col-xs-2">
                     <i class="fa fa-users-class"></i><br/>
                     <small><strong>Achievements</strong></small>
                     </div> */}
                 </MDBRow>



            </MDBContainer>
            <MDBRow className=" menuBar" style={{bottom:'-30%'}}>
                 <MDBCol size="4"  >
                 
                 <input type="text" id="search-bar"/>
 <a href="#"><i className=" search-icon fas fa-search"></i></a>
                 
                 </MDBCol>
                 <MDBCol size="2" >
                 <i className="img-fluid fas fa-check-double"></i><br/>
                 <small style={{fontSize:width<500?'1.8vw':'1vw'}}><strong>All</strong></small>
                 </MDBCol>
                 <MDBCol  size="2" >
                 <i className=" img-fluid far fa-eye"></i><br/>
                 <small style={{fontSize:width<500?'1.8vw':'1vw'}}><strong>Latest</strong></small>
                 </MDBCol>
                 <MDBCol size="2" >
                 <i className="fas fa-hourglass-half"></i><br/>
                 <small style={{fontSize:width<500?'1.8vw':'1vw'}}><strong>Ending</strong></small>
                 </MDBCol>
                 <MDBCol size="2" >
                 <i className="fas fa-stopwatch"></i><br/>
                 <small style={{fontSize:width<500?'1.8vw':'1vw'}}><strong>Expired</strong></small>
                 </MDBCol>
            </MDBRow>
            {/* <div className="row" style={{fontSize:'1.1vw',paddingTop:'0.7rem'}}>
                 <div className="col-xs-2">Filter</div>
                 <div className="col-xs-2">
                 <select class="text-primary fas fa-select" name="class_logo" required>
                 <option value="fas address-book">&#xf2b9; address-book</option>
                 <option value="fas adjust">&#xf042; adjust</option>
                 <option value="fas air-freshener">&#xf5d0; air-freshener</option>
                 </select>
                 </div>
                 <div className="col-xs-2">efr</div>
                 <div className="col-xs-2">efr</div>
                 
            </div> */}
            
         </MDBContainer>
         <div  style={{marginTop:'2rem'}} className="container">
             <MDBRow className="text-center">
             <MDBCol size="12" sm="6" md="4"  >
             <MDBCard  style={{borderRadius:'12px'}} >
                     <div >
                     <MDBCardImage  className="mx-auto d-block" src={logo} waves alt="Card image cap" width='100px' height='100px' />
                     {/* <hr style={{color:'black',backgroundColor:'black'}}/> */}
                     <hr/>
                     </div>
                     <MDBCardBody>
                         <MDBCardTitle style={{fontWeight:'500',fontSize:'1rem',display:'flex',flex:'left',marginLeft:'0.2rem'}}>Summer Internship</MDBCardTitle>
                         <MDBCardText>
                             <MDBRow style={{fontWeight:'400',display:'flex',flex:'left',marginLeft:'0.2rem'}}>
                                 <small>XYZ Company</small>
                             </MDBRow>
                             <MDBRow className="text-center mt-4">
                                 <MDBCol size="6" sm="6"  style={{fontWeight:'700',fontSize:'0.8rem'}}>Apply Before </MDBCol>
                                 <MDBCol size="6" sm="6"   style={{fontWeight:'300',fontSize:'0.8rem'}}>25 Dec'19</MDBCol>
                             </MDBRow>
                             <MDBRow className="text-center" style={{display:'flex',justifyContent:'space-around'}}>
                                 <MDBCol size="5" sm="5"  style={{fontWeight:'500',borderColor:'black',backgroundColor:'white',borderWidth:'1px',borderStyle:'solid',fontSize:'0.8rem'}}><i className="fas fa-award">{` Rewards`}</i></MDBCol>
                                 <MDBCol size="5" sm="5"  style={{fontWeight:'500',borderColor:'black',backgroundColor:'white',borderWidth:'1px',borderStyle:'solid',fontSize:'0.8rem'}}><i class="fa fa-eye" aria-hidden="true">{` 41`}</i></MDBCol>
                             </MDBRow>
                             <MDBRow className=" text-center" style={{display:'flex',justifyContent:'center'}}>
                                 <MDBBtn  size="12" className="p-1" style={{backgroundColor:'rgb(43, 239, 89)',width:'50%',marginBottom:'1rem',borderStyle:'solid',borderRadius:'4px',borderWidth:'0',padding:'0rem 0rem',color:'black'}}>
                                     Apply
                                 </MDBBtn>

                             </MDBRow>
                         </MDBCardText>
                     </MDBCardBody>
                 </MDBCard>
                 </MDBCol>
                 <MDBCol size="12" sm="6" md="4"  >
             <MDBCard  style={{borderRadius:'12px'}} >
                     <div >
                     <MDBCardImage  className="mx-auto d-block" src={logo} waves alt="Card image cap" width='100px' height='100px' />
                     {/* <hr style={{color:'black',backgroundColor:'black'}}/> */}
                     <hr/>
                     </div>
                     <MDBCardBody>
                         <MDBCardTitle style={{fontWeight:'500',fontSize:'1rem',display:'flex',flex:'left',marginLeft:'0.2rem'}}>Summer Internship</MDBCardTitle>
                         <MDBCardText>
                             <MDBRow style={{fontWeight:'400',display:'flex',flex:'left',marginLeft:'0.2rem'}}>
                                 <small>XYZ Company</small>
                             </MDBRow>
                             <MDBRow className="text-center mt-4">
                                 <MDBCol size="6" sm="6"  style={{fontWeight:'700',fontSize:'0.8rem'}}>Apply Before </MDBCol>
                                 <MDBCol size="6" sm="6"   style={{fontWeight:'300',fontSize:'0.8rem'}}>25 Dec'19</MDBCol>
                             </MDBRow>
                             <MDBRow className="text-center" style={{display:'flex',justifyContent:'space-around'}}>
                                 <MDBCol size="5" sm="5"  style={{fontWeight:'500',borderColor:'black',backgroundColor:'white',borderWidth:'1px',borderStyle:'solid',fontSize:'0.8rem'}}><i className="fas fa-award">{` Rewards`}</i></MDBCol>
                                 <MDBCol size="5" sm="5"  style={{fontWeight:'500',borderColor:'black',backgroundColor:'white',borderWidth:'1px',borderStyle:'solid',fontSize:'0.8rem'}}><i class="fa fa-eye" aria-hidden="true">{` 41`}</i></MDBCol>
                             </MDBRow>
                             <MDBRow className=" text-center" style={{display:'flex',justifyContent:'center'}}>
                                 <MDBBtn  size="12" className="p-1" style={{backgroundColor:'rgb(43, 239, 89)',width:'50%',marginBottom:'1rem',borderStyle:'solid',borderRadius:'4px',borderWidth:'0',padding:'0rem 0rem',color:'black'}}>
                                     Apply
                                 </MDBBtn>

                             </MDBRow>
                         </MDBCardText>
                     </MDBCardBody>
                 </MDBCard>
                 </MDBCol>
                 <MDBCol size="12" sm="6" md="4"  >
             <MDBCard  style={{borderRadius:'12px'}} >
                     <div >
                     <MDBCardImage  className="mx-auto d-block" src={logo} waves alt="Card image cap" width='100px' height='100px' />
                     {/* <hr style={{color:'black',backgroundColor:'black'}}/> */}
                     <hr/>
                     </div>
                     <MDBCardBody>
                         <MDBCardTitle style={{fontWeight:'500',fontSize:'1rem',display:'flex',flex:'left',marginLeft:'0.2rem'}}>Summer Internship</MDBCardTitle>
                         <MDBCardText>
                             <MDBRow style={{fontWeight:'400',display:'flex',flex:'left',marginLeft:'0.2rem'}}>
                                 <small>XYZ Company</small>
                             </MDBRow>
                             <MDBRow className="text-center mt-4">
                                 <MDBCol size="6" sm="6"  style={{fontWeight:'700',fontSize:'0.8rem'}}>Apply Before </MDBCol>
                                 <MDBCol size="6" sm="6"   style={{fontWeight:'300',fontSize:'0.8rem'}}>25 Dec'19</MDBCol>
                             </MDBRow>
                             <MDBRow className="text-center" style={{display:'flex',justifyContent:'space-around'}}>
                                 <MDBCol size="5" sm="5"  style={{fontWeight:'500',borderColor:'black',backgroundColor:'white',borderWidth:'1px',borderStyle:'solid',fontSize:'0.8rem'}}><i className="fas fa-award">{` Rewards`}</i></MDBCol>
                                 <MDBCol size="5" sm="5"  style={{fontWeight:'500',borderColor:'black',backgroundColor:'white',borderWidth:'1px',borderStyle:'solid',fontSize:'0.8rem'}}><i class="fa fa-eye" aria-hidden="true">{` 41`}</i></MDBCol>
                             </MDBRow>
                             <MDBRow className=" text-center" style={{display:'flex',justifyContent:'center'}}>
                                 <MDBBtn  size="12" className="p-1" style={{backgroundColor:'rgb(43, 239, 89)',width:'50%',marginBottom:'1rem',borderStyle:'solid',borderRadius:'4px',borderWidth:'0',padding:'0rem 0rem',color:'black'}}>
                                     Apply
                                 </MDBBtn>

                             </MDBRow>
                         </MDBCardText>
                     </MDBCardBody>
                 </MDBCard>
                 </MDBCol>
                 
                     
                 
             </MDBRow>
         
         </div>
                </div>
                
            </MDBContainer>
            
        
        
    )
}

export default Home

