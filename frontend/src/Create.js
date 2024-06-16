import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8081/create',{name, email})
        .then(res =>{
            console.log(res);
            navigate('/');
        }).catch((err)=>console.log(err));
    }
  return (
    <div className='full-page'>
      <form onSubmit={handleSubmit}>
        <h2>Add Student</h2>
        <div className='add-place'>
        <label htmlFor=''>Name</label>
        <input type='text' placeholder='enter name' onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className='add-place'>
        <label htmlFor=''>Email</label>
        <input type='email' placeholder='enter email' onChange={(e)=>setEmail(e.target.value)} />
        </div>
        
        <button className='add-but' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Create
