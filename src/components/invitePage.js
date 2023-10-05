import axios from "axios";
import React, { Fragment, useState } from "react";
import { Redirect, useNavigate } from 'react-router-dom';
function InvitePage(){
    const navigate = useNavigate();

 const [data,setData]=useState('');
 const [details,setDetails]=useState('');

 const getData = (value) => {
     setData(value.trim())
}
const getDetails = (value) => {
    setDetails(value.trim())
}
const submit = () => {
    console.log(data);
    console.log(details);

}
    
    return(
        <>
        <div className="mx-20">
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Data:</label>
            <input
            onChange={(e) => getData(e.target.value)} 
            type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Data" required
            />
        </div>
        <div>            
         <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Details:</label>
         <textarea 
         onChange={(e) => getDetails(e.target.value)} 
         rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>
        <div className="flex justify-center align-center mt-2">
        <button  
        disabled={data === '' || details === '' ? true : false} 
        onClick={(e)=> submit()} type="submit" className="bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-black py-2 px-28 ml-2 border border-black-500 hover:border-black rounded">
        Save
        </button>
        </div>
        </div>
        </>
    )
}
export default InvitePage;