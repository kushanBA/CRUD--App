import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Students = () => {

  const [stu, setStu]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res => setStu(res.data))
    .catch(err=> console.log(err));
  })
 const handleDelete= async(id)=>{
  try{
    axios.delete(`http://localhost:8081/student/${id}`)
    window.location.reload()
  }catch(err){
    console.log(err);
  }
 }

  return (
    <div className='full-page'>
    <div className='stu-container'>
      <Link to="/create"><button className='add-but'>Add +</button></Link>
    
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <div className='hr'></div>
        <tbody>
          {
            stu.map((data,i)=>(
              <tr key={i}>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td className='but'>
                 <Link to={`update/${data.ID}`}><button>Update</button></Link>
                  <button className='dlt' onClick={(e)=>handleDelete(data.ID)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Students
