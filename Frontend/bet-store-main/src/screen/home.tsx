import { defaultCoreCipherList } from "constants";
import React from "react";
import { Link } from "react-router-dom";
import SliderView from "../components/SliderContent";


export default function Home() {
    return (
        <div className="hello">
            <SliderView/>
            <div className = "container">
                <i className="fas fa-bell"></i>
                <h1 className="hello">Hello World</h1>
                <Link className="login-cs" to="/login">Login</Link>
            </div>
        </div>
    );
} 
  