import profileReducer, { addPost } from "./profile-reducer";

let state = {
  posts: [{post: "hello"}], 
}

it('new post should be added', () => {
  let action = addPost("some shit");
  let newState = profileReducer({state}, action);
  expect(newState.posts.length).toBe(2);
})