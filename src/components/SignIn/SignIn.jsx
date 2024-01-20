import React from 'react'
import { Heading } from '../SignUp/Heading'
import { Input } from '../SignUp/Input'
import { Link } from 'react-router-dom'
export const SignIn = ({data,setData}) => {
  return (
    <div className='SignUp'>
        <Heading heading="Sign In"/>
        <Input  data={data} setData={setData}/>
        <h5>If you have already SignIn, then { 
      <Link to="/" className='text-md font-medium hover:text-red-600'>CLICK HERE</Link>
   } </h5>
    </div>
  )
}
