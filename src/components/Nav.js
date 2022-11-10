import React from 'react';
import { Link } from 'react-router-dom';
// import Typography from '@material-ui/core/Typography'

const Nav=()=>{
    return(
        <div className="App-header">
        <div className='container'>
            <div className='nav-par d-flex w-100'>
                {/* <ul className="nav-ul"> */}
                    {/* <li className='nav-one my-auto'> */}
                        <Link className='mr-auto' to="/home">
                                <img className='logo' src='https://cdn-icons-png.flaticon.com/512/3515/3515175.png' width={60} height={60} />
                        </Link>
                    {/* </li>  */}
                    <ul className='ul d-flex mr-auto'>
            
                        <li className='nav-one  my-auto'><Link to="/accueil">Home</Link></li>
                        <li className='nav-two mx-5 my-auto'><Link to="/offers">Collection</Link></li>
                        <li className='nav-three my-auto'><Link to="/home">Profile</Link></li>
                    </ul>
                

                {/* </ul> */}
            </div>
        </div>
        </div>
    )
}

export default Nav;