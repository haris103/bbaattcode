import axios from "axios";
import React, { Fragment, useState } from "react";
import { Redirect, useNavigate } from 'react-router-dom';
function Registration(){
    const navigate = useNavigate();

 const [name,setName]=useState('');
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');
 const [isRedirect,setRedirect] = useState(false);


    const getName = (value) => {
        setName(value)
    }
    const getEmail = (value) => {
        setEmail(value)
    }
    const getPassword = (value) => {
        setPassword(value)
    }
    const saveForm = async (e) => {
        // e.preventDefault()
        console.log(name,email,password);

      const response =   await fetch('https://localhost:7062/api/register',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        // setRedirect(true)
        navigate('/login')

        const content = await response.json()
        console.log(content);

    }
    
// if(isRedirect){ 
//     navigate('/login')
// }
    return(
        <>
        
    <div className="flex justify-center items-center flex-col">
       <div className="font-bold">Registration</div>
       <div className="mb-2 w-4/5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            onChange={(e) => getName(e.target.value)}
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter name"
          />
        </div>
       <div className="mb-2 w-4/5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
          </label>
          <input
          type="email" required
            onChange={(e) => getEmail(e.target.value)}
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Email"
          />
        </div>
       
       <div className="mb-2 w-4/5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
          </label>
          <input
            onChange={(e) => getPassword(e.target.value)}
            type="password"
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter password"
          />
        </div>
        <button disabled={name && email && password ? false : true} onClick={(e)=> saveForm()} type="submit" className="bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-black py-2 px-28 ml-2 border border-black-500 hover:border-black rounded">
        Save
        </button>
        </div>
        </>
    )
}
export default Registration;