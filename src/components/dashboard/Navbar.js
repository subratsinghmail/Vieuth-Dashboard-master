import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { MDBIcon } from 'mdbreact'
function Navbar(props) {
  return (
    <nav className='navbarSide' style={{ background: "white", color: "black",zIndex:2 }}>
      <ul className='navbarSide-nav'>
        <li className='logo'>
          <a href='#' className='navSide-link'></a>
        </li>

        <li className='navSide-item'>
          <Link to='/dashboard' className='navSide-link p-2' >
            {/* <svg class='svg-icon' viewBox='0 0 20 20'>
              <path d='M10,2.172c-4.324,0-7.828,3.504-7.828,7.828S5.676,17.828,10,17.828c4.324,0,7.828-3.504,7.828-7.828S14.324,2.172,10,2.172M10,17.004c-3.863,0-7.004-3.141-7.004-7.003S6.137,2.997,10,2.997c3.862,0,7.004,3.141,7.004,7.004S13.862,17.004,10,17.004M10,8.559c-0.795,0-1.442,0.646-1.442,1.442S9.205,11.443,10,11.443s1.441-0.647,1.441-1.443S10.795,8.559,10,8.559 M10,10.619c-0.34,0-0.618-0.278-0.618-0.618S9.66,9.382,10,9.382S10.618,9.661,10.618,10S10.34,10.619,10,10.619 M14.12,8.559c-0.795,0-1.442,0.646-1.442,1.442s0.647,1.443,1.442,1.443s1.442-0.647,1.442-1.443S14.915,8.559,14.12,8.559 M14.12,10.619c-0.34,0-0.618-0.278-0.618-0.618s0.278-0.618,0.618-0.618S14.738,9.661,14.738,10S14.46,10.619,14.12,10.619 M5.88,8.559c-0.795,0-1.442,0.646-1.442,1.442s0.646,1.443,1.442,1.443S7.322,10.796,7.322,10S6.675,8.559,5.88,8.559 M5.88,10.619c-0.34,0-0.618-0.278-0.618-0.618S5.54,9.382,5.88,9.382S6.498,9.661,6.498,10S6.22,10.619,5.88,10.619'></path>
            </svg> */}
            <MDBIcon icon="grip-horizontal fa-2x" />
            <span className='linkSide-text' style={{ color: "black" }}>Browse</span>
          </Link>
        </li>
        <li className='navSide-item'>
          <a href='#' className='navSide-link p-2'>
            {/* <svg className='svg-icon' viewBox='0 0 20 20'>
              <path d='M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z'></path>
            </svg> */}
            <MDBIcon far icon="list-alt fa-2x" />
            <span className='linkSide-text'>Listing</span>
          </a>
        </li>

        <li className='navSide-item'>
          <Link to='/dashboard/profile' className='navSide-link p-2'>
            <MDBIcon icon="user-circle fa-2x" />
            <span className='linkSide-text'>Profile</span>
          </Link>
        </li>

        <li className='navSide-item'>
          <Link to='/dashboard/profile' className='navSide-link p-2'>
            <MDBIcon far icon="folder fa-2x" />
            <span className='linkSide-text'>Projects</span>
          </Link>

        </li>
      </ul>
    </nav>
  );
}


export default Navbar

