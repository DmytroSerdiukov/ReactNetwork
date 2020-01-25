import React from 'react';
import {NavLink} from 'react-router-dom';

const HeaderPage = (props) => {
    return <> 
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
    </>
}

export default HeaderPage;