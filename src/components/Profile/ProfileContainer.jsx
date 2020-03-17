import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProfilePosts from "./MyPosts/ProfilePosts";
import { changeAreaText , addPost, setUserProfile, setUserData } from "../../reducers/profile-reducer";
import ProfileInfo from "./ProfileUser/ProfilePage";
import { compose } from "redux";
import { authRedirect } from "../../hoc/authRedirect";
import { getPosts, getAreaText, getProfile, getUserId, getIsAuth } from "../../reducers/users-selectors";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
          //userId = this.props.authorizedUserId;
          userId = 2;
        }
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
    posts: getPosts(state),
    areaText: getAreaText(state),
    profile: getProfile(state),
    authorizedUserId: getUserId(state),
    isAuth: getIsAuth(state),
})

const actions = {changeAreaText, addPost, setUserProfile,setUserData}

export default compose( 
    authRedirect,
    connect(props, actions), 
     withRouter
    )(ProfileContainer);