import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';



const Add = () => {
  const [count,setCount]=useState(0);
  const [form,setForm]=useState({
    userId:'',
    userName:'',
    email:''
})
  //let incrementCounter=()=>{
    //setCount(count+1)
  //}
  let submitInfo=()=>{
    console.log(form)
  }
  let valueUpdate=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    <div>
       <TextField id="outlined-basic" 
       label="UserId" variant="outlined"
      name="userId" //value={form.userId} 
      onChange={valueUpdate}/><br/>

      <TextField id="filled-basic" 
      label="Name" variant="filled" 
      name="userName" 
      //value={form.userName}
      onChange={valueUpdate}/><br/>

      <TextField id="standard-basic" 
      label="Email" variant="standard" 
      name="email" 
      //value={form.email}
      onChange={valueUpdate}/><br/> 

    <Button variant="contained" onClick={submitInfo}>SUBMIT</Button>
    <br/>
    {count}
    </div>

  )
}

export default Add