import React from 'react'
import { InputFields } from './InputFields'
import { Button } from './Button'
import { Link } from 'react-router-dom'

export const Input = ({data,setData}) => {
    function InputFunc(val,key){
        setData({
            ...data,
            [key]:val
        })
    }
    function clickbtn(){
        if(!data.username || !data.email){
            return alert("Input data")
        }else{
            <Link to="/SignIn">SignIn</Link>
            alert("REGISTERED SUCCESSFULLY")

        }

    }
  return (
    <div className='Input'>
        <InputFields
        id="username"
        type="text"
        name="username"
        placeholder="Enter the Username"
        handleChange={InputFunc}/>
        <InputFields
        id="email"
        type="email"
        name="Email"
        placeholder="Enter Email Address"
        handleChange={InputFunc}/>
        <InputFields
        id="password"
        type="password"
        name="password"
        placeholder="Enter the Password"
        handleChange={InputFunc}/>
        <Button label="Sign Up" handleButton={clickbtn}/>
    </div>
  )
}
