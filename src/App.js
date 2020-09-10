import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch,Link} from 'react-router-dom';
import GetAll from "./GetAll"
import Get from "./Get"
import Create from "./Create"
import Update from "./Update"
import Delete from "./Delete"

class App extends React.Component {

  render(){
  return (
    <div className="App">
        <h1>Products</h1>
        <Switch>
            <Route exact path="/" component={GetAll}/>
            <Route path="/Get" component={Get}/>
            <Route path="/Create" component={Create}/>
            <Route path="/Update" component={Update}/>
            <Route path="/Delete" component={Delete}/>

        </Switch>
        <Link to="/Get">Get</Link><br/>
        <Link to="/Create">Create</Link><br/>
        <Link to="/Update">Update</Link><br/>
        <Link to="/Delete">Delete</Link><br/>
    </div>
  );
}
}
export default App;
