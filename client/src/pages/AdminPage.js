import React from "react";
import { Link } from "react-router-dom";

//import { useQuery } from '@apollo/react-hooks';

function AdminPage() {
  return (
  <>
    <div className="container my-1">
        <Link to="/">
            ← Back to Home
        </Link>
          <>
            <h2> Welcome to the GCF Administrative Page! </h2>
                <div className="my-2">
                    <div className="flex-row">
                        <p> This page will provide our business administrator with business analytics. </p>
                    </div>
                    <div>
                    <p>Please login <a href= "https://analytics.google.com/">here</a></p>
                    </div>
                </div>    
            </>
      </div>
    </>)
};

export default AdminPage;