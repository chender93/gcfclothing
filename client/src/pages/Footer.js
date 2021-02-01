  
import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
        <div>
            <ul className="flex-row">
                <li className="mx-1">
                    <Link to="/adminPage">
                        Admin Page
                    </Link>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/curtis-henderson-b22a0271/" class="btn btn-primary">LinkedIn</a>
                </li>
                <li>
                <a href="https://www.instagram.com/givechristfirst/" class="btn btn-primary">Instagram</a>
                </li>
                <li>
                <a href="https://www.facebook.com/givechristfirstclothing/" class="btn btn-primary">Facebook</a>
                </li>
            </ul>
        </div>
        <div class=".card">
            Created by Curtis Henderson, 2021
        </div>
    </footer>
    )
}

export default Footer;