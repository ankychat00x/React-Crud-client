import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function Get() {
  
  const [product,setProduct] = useState({})


  /*onIdChange = (event)=>{

    this.setState({id:event.target.value});
  }
*/
  function getProduct(){

    const axios = require("axios")
    axios.get("http://localhost:8080/api/product/"+product.id).then
    (res=>{setProduct(res.data[0])});
  }


  // Enter Product ID : <input onChange={this.onIdChange.bind(this)}/> 
  //as an alternative to the above line we can do as below
  return (
    <div>
      Enter Product ID : <input onChange={e=>setProduct({id:e.target.value})}/> 
      <button onClick={getProduct.bind(this)}>Get Product</button>
      <br/>
      Name : {product.name}
      <br/>
      Description : {product.description}
      <br/>
      Price : {product.price}
    </div>
  );
}


export default Get;
