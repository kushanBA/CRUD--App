import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const {id} = useParams();
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:8081/update/'+id,{name, email})
        .then(res =>{
            console.log(res);
            navigate('/');
        }).catch((err)=>console.log(err));
    }
  return (
    <div className='full-page'>
      <form onSubmit={handleSubmit}>
        <h2>Update Student</h2>
        <div className='add-place'>
        <label htmlFor=''>Name</label>
        <input type='text' placeholder='enter name' onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className='add-place'>
        <label htmlFor=''>Email</label>
        <input type='email' placeholder='enter email' onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <button className='add-but' type='submit'>Update</button>
      </form>
    </div>
  )
}

export default Update;
