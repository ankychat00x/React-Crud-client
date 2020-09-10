import React ,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function GetAll () {
  
 const [products,setProducts] = useState([])

 
  useEffect(()=>{
    const axios = require("axios")
    //you have made a restful call using axios against express api ,you got the info back and 
    //you are displaying it on the console
    axios.get("http://localhost:8080/api/product/").then
    (res=>{
        console.log(res.data);
        //setProducts(res.data);
    }).catch(error=>{
      console.log("there is an error")
    })
  },products)//here the second param "products" signify that the useeffect will be called 
  //only if there is a change in the products data(state)
  return (
    <div >
      <h1>Products:</h1>
    </div>
  );
}


export default GetAll;
