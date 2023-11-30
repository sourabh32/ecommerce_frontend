import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../redux/userSlice'
import { registerApi } from '../apis/authQueries'


const initial ={
    email:"",
    password:"",
    username:""
}
const Register = () => {
    const [credentials,setFormCredentials] = useState(initial)
    const {email,password,username} = credentials
    const dispatch = useDispatch()


    
    const {isError,isPending,data,mutate,error} = useMutation({
        mutationFn:registerApi,
        onSuccess:(data)=>{
          console.log(data)
          const {username,email,_id} = data
          dispatch(setCredentials({username,email,_id}))
        }
    })
    if(isPending){
        return <Spinner />
    }
    if(isError){
      return <p>{error.message}</p>
    }
  return (
    <div className="min-h-screen font-custom flex items-center justify-center">
    <div className="bg-white p-8 w-[95%] sm:w-[50%]" >
      <h2 className="text-4xl font-semibold mb-6">Register</h2>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">
          Username
        </label>
        <input
          type="username"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setFormCredentials((prevCredentials) => ({ ...prevCredentials, username: e.target.value }))}

          className="w-full px-3 py-2   focus:outline-none border-[2px] focus:border-black"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setFormCredentials((prevCredentials) => ({ ...prevCredentials, email: e.target.value }))}

          className="w-full px-3 py-2   focus:outline-none border-[2px] focus:border-black"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setFormCredentials((prevCredentials) => ({ ...prevCredentials, password: e.target.value }))}
          className="w-full px-3 py-2   focus:outline-none border-[2px] focus:border-black"
        />
      </div>
      <div className='mb-4 text-end'>
      <span className='mr-1'>Already have an account?</span>
      <Link to="/login">Login</Link>
      </div>
      <button onClick={()=>mutate(credentials)} className="bg-gray-800 text-white px-4 py-2 minW:w-[20%]">
        Register
      </button>
    </div>
  </div>

  )
}

export default Register