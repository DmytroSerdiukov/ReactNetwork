import React from 'react';
import {NavLink} from 'react-router-dom';

const HeaderPage = (props) => {
    const logout = () => {
        props.logout();
    }
    
    return <> 
        {props.isAuth ? <div>
            <div>
                {props.login}
            </div>
            <div>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
        : <NavLink to={'/login'}>Login</NavLink>}
    </>
}

export default HeaderPage;