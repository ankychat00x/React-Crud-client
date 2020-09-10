import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function Update() {
  
  const [id,setId] = useState('')
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [price,setPrice] = useState('')

 
 function updateProduct(){

    const axios =  require("axios")
    axios.put("http://localhost:8080/api/product/",{id:id,name:name,description:description,
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
      <button onClick={updateProduct.bind(this)}>Update Product</button>

    </div>
  );
}


export default Update;
