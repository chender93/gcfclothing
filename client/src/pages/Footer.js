  
import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
    <footer className= 'footer' id='footer' >
        <div  >
            <a href="https://www.linkedin.com/in/curtis-henderson-b22a0271/" className="btn btn-primary">LinkedIn</a>
             
            <a href="https://www.instagram.com/givechristfirst/" className="btn btn-primary">Instagram</a>
             
            <a href="https://www.facebook.com/givechristfirstclothing/" className="btn btn-primary">Facebook</a>
             
            <a href="/adminPage">Admin Page</a>
            
            <div width="100%" >
            <p class= 'created-by'>Created by Curtis Henderson, Ashley Warters, and Lucianne Vazquez, 2021</p>
        </div>
        </div>
        
    </footer>
    )
}

export default Footer;