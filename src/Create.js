import React ,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function Create() {
  
  const [id,setId] = useState('')
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [price,setPrice] = useState('')


 
  function createProduct(){

    const axios =  require("axios")
    axios.post("http://localhost:8080/api/product/",{id:id,name:name,description:description,
  price:price}).then(res=>{
    console.log(res.data);
  })
  }


  return (
    <div>
      Enter Product Id : <input onChange={e=>setId(e.target.value)}/>
      Enter Product Name : <input onChange={e=>setName(e.target.value)}/>
      Enter Product Description : <input onChange={e=>setDescription(e.target.value)}/>
      Enter Product Price : <input onChange={e=>setPrice(e.target.value)}/>
      <button onClick={createProduct.bind(this)}>Create Product</button>

    </div>
  );
}


export default Create;
