import React from "react";
import { Link } from "react-router-dom";

//import { useQuery } from '@apollo/react-hooks';

function Newsletter() {
  return (
  <>
    <div className="container my-1">
        <Link to="/">
            ← Back to Products
        </Link>
          <>
            <h2> Newsletter </h2>
                <div className="my-2">
                    <div className="flex-row">
                        <h3> GCF Clothing is Give Christ First </h3>
                    </div>
                    <div className="flex-row">
                        <p> As of January 7, 2021, GCF Clothing owned and designed by Curtis Henderson has a new web page. Feel free to return every month to see our new designs and newsletter.</p>
                    </div>
                </div>    
            </>
      </div>
    </>)
};

export default Newsletter;