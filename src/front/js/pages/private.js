import React, { useContext, useState, useEffect } from "react";
import { Navigate,useNavigate } from "react-router-dom";

const backend=process.env.BACKEND_URL

export const Private = () => {
    const token = localStorage.getItem('token')
    const [userEmail, setUserEmail] = useState('')
    const navigate = useNavigate()

    useEffect(()=> {
        const fetchData = async(token) => {
            console.log('going into fetching data')
            const response = await fetch(`${backend}api/users/me`,{
                headers : {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                  }            })
            const userResponse = await response.json();
            setUserEmail(userResponse.email);
            return
            }
        
        if (!token) { navigate('/')} 
        fetchData(token);
        },[])

    
    
    /* const getUserEmail = async() => {
        if (!token){
            navigate('/')
        }
    } */
    
    return (
        <div>
            <h1>Hello {userEmail},  this is your private page</h1>
        </div>
    )

}