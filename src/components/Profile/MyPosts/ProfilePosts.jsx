import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {addPost} from './../../../reducers/profile-reducer';
import { connect } from 'react-redux';

const Post = ({post}) => {
  return <div>
    <div>{post}</div>
  </div>
}

const PostForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Type something..." type="text" component="input" name="post"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    </>
}

const ProfilePosts = (props) => {

    let addPost = (data) => {
        props.addPost(data.post);
    }

    let posts = props.posts.map(p => {return <Post post={p.post}/>})

    return <div>
        <ReduxPostForm onSubmit={addPost}/>
        <div>
            {posts}
        </div>
    </div>
}

let ReduxPostForm = reduxForm({form: "post"})(PostForm);

export default connect(null, {addPost})(ProfilePosts);