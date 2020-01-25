import React from 'react';
import{NavLink} from 'react-router-dom';

const Navbar = () => {
    return <div>
        <NavLink to={'/profile'}>Profile</NavLink>
        <NavLink to={'/users'}>Users</NavLink>
    </div>
}

export default Navbar;