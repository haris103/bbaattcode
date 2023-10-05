import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login(){
    const navigate = useNavigate();

 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');
 const [isRedirect,setRedirect] = useState(false);


    const getEmail = (value) => {
        setEmail(value)
    }
   
    const getPassword = (value) => {
        setPassword(value)
    }
    const loginForm =  async() => {
        const data = {
            email, password
        }
       const res = await fetch('https://localhost:7062/api/login',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        })
        const result = await res.json()
        console.log(result);
        if(result.message === "invalid credentials"){
            toast.error('invalid credentials')
        }else{
            sessionStorage.setItem("jwt_token",result.jwt)
        navigate('/welcome')
        }

    // const url = 'https://localhost:7062/api/login'
    // axios.post(url,data)
    // .then((res)=>{
    //   console.log(res);

    // //   clear()
    // //   getData()
    // //   toast.success('Employee has been added')
    // })
    // .catch((err)=>{
    //   console.log(err);
    //   toast.error(err)
    // })
       
    }

    return (
      <>
<ToastContainer/>
        <div className="flex justify-center items-center flex-col">       
        <div className="font-bold">Login</div>
        <div className="mb-2 w-4/5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            onChange={(e) => getEmail(e.target.value)}
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter name"
          />
        </div>

        <div className="mb-2 w-4/5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
          </label>
          <input
            onChange={(e) => getPassword(e.target.value)}
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter phone number"
          />
        </div>
        <button  disabled={email && password ? false : true} onClick={(e)=> loginForm()} type="submit" className="bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-black py-2 px-28 ml-2 border border-black-500 hover:border-black rounded">
        Save
        </button>
        </div>
      </>
    );
}
export default Login;