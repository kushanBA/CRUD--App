import React from 'react'

const Create = () => {
  return (
    <div>
      <form>
        <h2>Add Student</h2>
        <label htmlFor=''>Name</label>
        <input type='text' placeholder='enter name' />
        <label htmlFor=''>Email</label>
        <input type='email' placeholder='enter email' />
      </form>
    </div>
  )
}

export default Create
