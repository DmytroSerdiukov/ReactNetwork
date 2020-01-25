import React from 'react';
import Prealoder from '../../../common/Loader/Loader';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Prealoder />
    }

    return <div>
        <div>
            <img src={props.profile.photos.large} alt="img"/>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.userId}</div>
        </div>
    </div>    
}

export default ProfileInfo;