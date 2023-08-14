import React, { useState } from 'react'
import './App.css';

const App = () => {
  const[data, setData]= useState({
    email:"",
    password:""
  });
  const changeHandler =e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler =e=>{
    e.preventDefault();
    if(data.password.length<5){
      alert('pasword minimum 8 chareccters')

    }
    else(
      console.log(data)
    )
    if(data.email.length<6){
      alert('email minimum 3 chareccters')

    }
    else(
      console.log(data)
    )
  }
  
  return (
    <div className='App'>
      
      <form onSubmit={submitHandler}>
        <lable style={{'color':'red','fontFamily':'Tahome'}}>E-mail</lable><br/>
        <input type="text" name="E-mail" onChange={changeHandler} /><br />
        <lable style={{'color':'blue','fontFamily':'Tahome'}}>password</lable><br/>
        <input type="password" name="password" onChange={changeHandler} /><br/>
        <input type="submit"value="login"/>
      </form>
    
    </div>
  )
}

export default App