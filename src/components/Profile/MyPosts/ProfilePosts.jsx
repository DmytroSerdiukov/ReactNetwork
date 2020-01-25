import React from 'react';

const Post = ({post}) => {
    return <div>
        <div>{post}</div>
    </div>
}

const ProfilePosts = (props) => {
    let areaRef = React.createRef();

    let changeAreaValue = () => {
        let areaValue = areaRef.current.value;
        props.changeAreaText(areaValue);
    }

    let addPost = () => {
        props.addPost();
    }

    let posts = props.posts.map(p => {return <Post post={p.post}/>})

    return <div>
        <textarea ref={areaRef} onChange={changeAreaValue} value={props.areaText}></textarea>
        <button onClick={addPost}>Send</button>
        <div>
            {posts}
        </div>
    </div>
}

export default ProfilePosts;