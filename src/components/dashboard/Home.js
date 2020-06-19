import React, { useState } from 'react'
import vieuth from '../../vieuth.png'
import logo from './logo192.png'
import avatar from './avatar.png'
import './Home.css'
import {useQuery} from '@apollo/react-hooks'
import gql from 'graphql-tag'
import StudentOpportunityCard from '../SeperateComponents/StudentOpportunityCard'
import { MDBContainer, MDBRow, MDBCol,MDBIcon, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";
import { useEffect } from 'react';
import { studentOppurtunityData } from '../../utils/fakeData'
import Spinner from '../layout/Spinner'

const allProjectsQuery=gql`
    query ($page:Int,$limit:Int){
        allProjects(page:$page,limit:$limit){
            totalPages,
            totalDocs,
            docs{
            title,
            body,
            start,
            end
            }
        }
    }
`;

function Home(props) {
    const [width, setWidth] = useState(window.innerWidth);
    const [query,setQuery]=useState('');
    const [height, setHeight] = useState(window.innerHeight);
    const [pageCount,setPageCount]=useState(1);
    const limit=8
    const {loading,error,data}=useQuery(allProjectsQuery,{
        variables:{
            page:pageCount,
            limit:limit
        }
    })
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    useEffect(() => {
        console.log(query)
        window.addEventListener("resize", updateWidthAndHeight);
        
        
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    }, [width, height])
    const filterData=data?data.allProjects.docs:null;
    const showData=query?filterData.filter((c)=>(
        c.title.toLowerCase().includes(query.trim().toLowerCase())
    )):filterData
    return (

        <div >

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

            <div >
                <MDBContainer style={{ backgroundColor: 'white', color: 'black', borderRadius: '12px', border: "4px solid lightgray", position: 'relative', height: '19vh', }}>
                    <MDBContainer className="menu" style={{ backgroundColor: 'white', borderRadius: '12px', border: "4px solid lightgray", position: 'absolute', top: '-35%', height: '12vh', width: '90%', left: '5%' }}>
                        <MDBRow className="text-center  " style={{ marginTop: '1vh' }} >
                            <MDBCol size="1" sm="1" md="2" >
                                <i className="fas fa-check-double"></i><br />
                                <small style={{ fontSize: width < 500 ? '1.8vw' : '1vw' }}><strong>All</strong></small>
                            </MDBCol>
                            <MDBCol size="2" sm="2" md="2" >
                                <i class="fas fa-trophy"></i><br />
                                <small style={{ fontSize: width < 500 ? '1.8vw' : '1vw' }}><strong>Competetions</strong></small>
                            </MDBCol>
                            <MDBCol size="2" sm="2" md="2" >
                                <i class="fas fa-question"></i><br />
                                <small style={{ fontSize: width < 500 ? '1.8vw' : '1vw' }}><strong>Quizes</strong></small>
                            </MDBCol>
                            <MDBCol size="2" sm="2" md="2" >
                                <i class="fas fa-laptop-code"></i><br />
                                <small style={{ fontSize: width < 500 ? '1.8vw' : '1vw' }}><strong>Hackthons</strong></small>
                            </MDBCol>
                            <MDBCol size="2" sm="2" md="2" >
                                <i class="fas fa-award"></i><br />
                                <small style={{ fontSize: width < 500 ? '1.8vw' : '1vw' }}><strong>Scholarships</strong></small>
                            </MDBCol>
                            <MDBCol size="2" sm="2" md="2" >
                                <i class="fas fa-briefcase"></i><br />
                                <small style={{ fontSize: width < 500 ? '1.8vw' : '1vw' }}><strong>Internships</strong></small>
                            </MDBCol>
                            {/* <div className="col-xs-2">
<i class="fa fa-users-class"></i><br/>
<small><strong>Achievements</strong></small>
</div> */}
                        </MDBRow>



                    </MDBContainer>
                    <MDBRow className=" menuBar" style={{ bottom: '-30%',zIndex:1 }}>
                        <MDBCol size="4"  >

                            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} id="search-bar" />
                            <a href="#"><i className=" search-icon fas fa-search"></i></a>
                            <div className="search-Results" style={{display:query&&showData!==null?'flex':'none'}}>
                                <ul style={{listStyle:'none'}}>
                                    {showData&&showData.map((d,index)=>(
                                        
                                        <li style={{zIndex:1}} key={index}>{d.title}</li>
                                        
            
                                    ))}
                                </ul>
                            </div>
                        </MDBCol>
                        <MDBCol size="2" >
                            <i className="img-fluid fas fa-check-double"></i><br />
                            <small style={{ fontSize: width < 500 ? '1.8vw' : '1vw' }}><strong>All</strong></small>
                        </MDBCol>
                        <MDBCol size="2" >
                            <i className=" img-fluid far fa-eye"></i><br />
                            <small style={{ fontSize: width < 500 ? '1.8vw' : '1vw' }}><strong>Latest</strong></small>
                        </MDBCol>
                        <MDBCol size="2" >
                            <i className="fas fa-hourglass-half"></i><br />
                            <small style={{ fontSize: width < 500 ? '1.8vw' : '1vw' }}><strong>Ending</strong></small>
                        </MDBCol>
                        <MDBCol size="2" >
                            <i className="fas fa-stopwatch"></i><br />
                            <small style={{ fontSize: width < 500 ? '1.8vw' : '1vw' }}><strong>Expired</strong></small>
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
                {loading?<Spinner/>:
                <>
                    <MDBRow>
                    <MDBCol size={10}>

                        <div style={{ marginTop: '2rem' ,marginLeft:'2.3rem'}} className="container">
                        {/* {<div>{data&&data.allProjects.docs[0].title}</div>} */}
                           {data&&(<MDBRow className="text-center">
                                {
                                    showData.map((opportunity, index) => {
                                        return <StudentOpportunityCard data={opportunity} key={`st-op-${index}`} />
                                    })
                                }
                            </MDBRow>)
                           }
                        </div>
                    </MDBCol>
                    <MDBCol size={2} ></MDBCol>
                </MDBRow>
                <MDBContainer>
                   <MDBRow className="d-flex justify-content-center mt-3">
                        <MDBBtn className="p-1"  disabled={pageCount==1} onClick={()=>{
                            setPageCount(pageCount-1);
                            }}>Prev </MDBBtn>
                        <MDBBtn className="p-1" disabled={data&&data.allProjects.docs.length!==limit} onClick={()=>{
                            setPageCount(pageCount+1);
                            }}>Next</MDBBtn>
                   </MDBRow>
                   <MDBRow className="d-flex justify-content-center">
                      <small><strong>{`PageNo. ${pageCount}`}</strong></small> 
                   </MDBRow>
               </MDBContainer>
               </>
                }
               


            </div>

        </div>



    )
}

export default Home



