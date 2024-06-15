import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Students = () => {

  const [name, setName]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res => setName(res.data))
    .catch(err=> console.log(err));
  })

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
            name.map((data,i)=>(
              <tr key={i}>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td className='but'>
                  <button>Update</button>
                  <button className='dlt'>Delete</button>
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
