  
import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
    <footer>
        <div width="100%" align="center">
            <a href="https://www.linkedin.com/in/curtis-henderson-b22a0271/" className="btn btn-primary">LinkedIn</a>
            | 
            <a href="https://www.instagram.com/givechristfirst/" className="btn btn-primary">Instagram</a>
            | 
            <a href="https://www.facebook.com/givechristfirstclothing/" className="btn btn-primary">Facebook</a>
            | 
            <a href="https://open.spotify.com/artist/2mfltUlJKu5rCjHyO5Hkut?si=5S2C6N2dR8aXu9AScNOmkg">Spotify</a>
            | 
            <a href="/adminPage">Admin Page</a>
            
        </div>
        <div width="100%" align="center">
            <p>Created by Curtis Henderson, Ashley Warters, and Lucianne Vazquez, 2021</p>
        </div>
    </footer>
    )
}

export default Footer;