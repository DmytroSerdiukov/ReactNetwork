import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import ProfilePosts from './MyPosts/ProfilePosts';
import {changeAreaText , addPost, setUserProfile, setUserData} from '../../reducers/profile-reducer';
import ProfileInfo from './ProfileUser/ProfilePage';
import { compose } from 'redux';
import { authRedirect } from '../../hoc/authRedirect';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        this.props.setUserData(userId);
    }

    render() {
        return <div>
            <ProfileInfo profile = {this.props.profile} />
            <ProfilePosts {...this.props}/>
        </div>
    }
}

let props = (state) => ({
    posts: state.profilePage.posts,
    areaText: state.profilePage.areaText,
    profile: state.profilePage.profile
})

//let withUrlDataProfile = withRouter(ProfileContainer);
const actions = {changeAreaText, addPost, setUserProfile,setUserData}

export default compose( 
    authRedirect,
    connect(props, actions), 
    withRouter)(ProfileContainer);