import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const Register = () => {

    const navigate = useNavigate();  // Replace useHistory with useNavigate

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const register = () => {
        const { name, email, password, reEnterPassword } = user;
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message);
                    navigate("/login");  // Replace history.push() with navigate()
                });
        } else {
            alert("Invalid input");
        }
    };

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input
                type="text"
                name="name"
                value={user.name}
                placeholder="Your Name"
                onChange={handleChange}
            />
            <input
                type="text"
                name="email"
                value={user.email}
                placeholder="Your Email"
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={user.password}
                placeholder="Your Password"
                onChange={handleChange}
            />
            <input
                type="password"
                name="reEnterPassword"
                value={user.reEnterPassword}
                placeholder="Re-enter Password"
                onChange={handleChange}
            />
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/login")}>Login</div>  {/* Replace history.push() with navigate() */}
        </div>
    );
};

export default Register;
