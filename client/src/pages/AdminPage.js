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
                        <p> This page will provide your with your web page (business) analytics.  What would you like to learn today? </p>
                    </div>
                </div>    
            </>
      </div>
    </>)
};

export default AdminPage;