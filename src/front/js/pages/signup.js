import React, { useContext, useState } from "react";

const backend=process.env.BACKEND_URL

export const Signup = () => {
    //const { store, actions } = useContext(Context);
    const { validEmail, setValidEmail } = useState(true)

    const handleLogin = async (e) => {
        e.preventDefault();
        const email=e.target.email.value
        const password=e.target.inputPassword.value
        const signUpBody = JSON.stringify({'email':email,'password':password})
        console.log('trying to fetch')
            const response = await fetch(`${backend}api/signin`, {
                method: 'POST',
                headers: { 'Content-Type':'application/json'},
                body: signUpBody
                })
            const signUpResponse = await response.json();
            console.log(signUpResponse.msg)
            if (response.status != 200) {
                alert(signUpResponse.msg)
                } else {
                    alert('User succesfully created')
                }
            
            return
            }    
        
        
        

    

    return (
    <div className="container text-center">
        <div className="col-6 justify-content-center"> 
            <h1>Sign up</h1> 
            <form onSubmit={handleLogin}>
                <div className="row mb-3">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="confirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="confirmPassword" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            
        </div>
    </div>
    )
}