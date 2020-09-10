import React from 'react';
import logo from './logo.svg';
import './App.css';

class Delete extends React.Component {
  
  constructor(props){
    super(props);
    this.state={product:{}};
  }
 
  onIdChange = (event)=>{

    this.setState({id:event.target.value});
  }

  deleteProduct(){

    const axios = require("axios")
    axios.delete("http://localhost:8080/api/product/"+this.state.id).then
    (res=>{console.log(res.data)});
  }
  render(){
  return (
    <div>
      Enter Product ID : <input onChange={this.onIdChange.bind(this)}/>
      <button onClick={this.deleteProduct.bind(this)}>Delete Product</button>

    </div>
  );
}
}

export default Delete;
