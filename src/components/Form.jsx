import React from 'react'

const Form = () => {
  return (
    <div>
      <form action="" method="post" className='border border-danger border-5 shadow rounded-5 w-50 fs-5 fw-bold p-5 m-5'>
        <h1 className='ms-5 fs-1 ps-5 '>---CANDIATURE---</h1>
        <label htmlFor="">Name of the student : </label>
        <input type="text" name="name" id="" placeholder='enter the name' className='ms-2 shadow rounded-5 mb-3 ' /> <br />

        <label htmlFor="">Student id number :</label>
        <input type="number" name="number" id="" placeholder='Enter the id ' className='ms-3 shadow rounded-5 mb-3'/> <br />

        <label htmlFor=""> Date of joining :</label>
        <input type="date" name="date" id="" placeholder='select the date' className='ms-5 shadow rounded-5' /> <br />
        <button type="submit" class="btn btn-primary  float-end">Submit</button>
      </form>
    </div>
  )
}

export default Form
