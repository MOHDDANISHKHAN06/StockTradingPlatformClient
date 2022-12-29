
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        emailId : "",
        password: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setLogin({...login, [e.target.name]: value});
    };
    const reset = (e) => {
        e.preventDefault();
        setLogin({
            emailId : "",
            password: ""
        });
      };
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
            <div className="font-bold font-center text-2xl tracking-wider">
            <h1>Login With Email</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
                Email
            </label>
            <input
                type="email"
                name="emailId"
                value={login.emailId}
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
                Password
            </label>
            <input
                type="text"
                name="password"
                value={login.password}
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button 
                onClick={() => navigate("/stocks")}
                className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
                Login
            </button>
            <button
                onClick={reset}
                className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
                Clear
            </button>
            </div>
        </div>
    </div>
  );
};

export default LoginPage;