import React from "react";
import { Link } from "react-router-dom";
import { Navigate,useNavigate } from "react-router-dom";


export const Navbar = () => {
	const token = localStorage.getItem('token',token)
	const navigate=useNavigate()

	const handleLogout = () => {
		localStorage.removeItem('token')
		navigate('/login')
	}
	const handleSignin = () => {
		navigate('/signup')
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				 <div className="ml-auto">
				 	{ token ? <button className="btn btn-primary" onClick={handleLogout}>Logout</button> : 
					<button className="btn btn-primary" onClick={handleSignin}>Signup</button> }
				</div> 
			</div>
		</nav>
	);
};
