import React, { useEffect, useState } from "react";
import axios from "axios";


function InviteUsers() {
    const [email, setEmail] = useState('');
    const [data, setData] = useState([]);
    const [isValidEmail, setIsValidEmail] = useState(true);


    const getEmail = (value) => {
        setEmail(value);
        setIsValidEmail(validateEmail(value));

    };
    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const submit = () => {
        console.log(isValidEmail);

        if (email.trim() !== '' && isValidEmail) {
            setData([...data, email]);
            setEmail(''); 
        }
        else{
            alert("")
        }
    };

    const send = ()=>{
        console.log(data);
        axios
        .post(`https://localhost:44367/api/InviteUsers/sendInvitations`, data,{
            headers: {
                'Content-Type': 'application/json', 
              },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

        setData([]) // Clear the data array after sending
    }
    return (
        <div className="mx-20">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Email:</label>
                <input
                    onChange={(e) => getEmail(e.target.value)}
                    value={email}
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Data"
                    required
                />
            </div>
            {
                !isValidEmail? <span  className="text-sm text-red-600"> Email is invalid</span> : ""
            }
            
            <div>
                {data.map((email, index) => (
                    <h1 key={index}>Email {index + 1 }: {email}</h1>
                ))}
            </div>

            <div className="flex justify-center align-center mt-2">
                <button
                    onClick={submit}
                    type="button" // Specify button type explicitly
                    className="bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-black py-2 px-28 ml-2 border border-black-500 hover:border-black rounded"
                >
                    Save
                </button>
            </div>

            <div className="flex justify-center align-center mt-2">
                <button
                    onClick={send}
                    type="button" // Specify button type explicitly
                    className="bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-black py-2 px-28 ml-2 border border-black-500 hover:border-black rounded"
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default InviteUsers;
