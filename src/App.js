import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const FormShape = () => {
  return <div>This is box shape!</div>
}

class Box extends React.Component {
  constructor(props){
    super(props);
    this.state = {show: false}
    this.showToggle = this.showToggle.bind(this);
  }

  showToggle() {
    const {show} = this.state;
    this.setState({show: !show});
  }

  render() {
    return <div>
      <button onClick = {this.showToggle}>Switch On</button>
      {this.state.show && <FormShape/>}
    </div>
  }

}

const App = (props) => {
  return <div>
    <HeaderContainer />
    <Navbar/>
    <Route path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
    <Route exact path={'/users'} render={() => <UsersContainer />}/>
    <Box/>
  </div>
}

export default App;
