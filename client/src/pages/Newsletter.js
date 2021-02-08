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
        <h1> Welcome to our Newsletter! </h1>
        <br></br>
            <div className="my-2">
                {/* <div className="flex-row">
                    <h2> Welcome! </h2>
                </div>
                <br></br> */}
                <div className="flex-row">
                    <h3> GCF Clothing is Give Christ First  |  February 1, 2021 </h3>
                </div>
                <div className="flex-row">
                    <p> As code students at the University of Pennsylvania Coding Boot Camp, Curtis, Ashley, and Lucianne worked together to create a new webpage for GCF Clothing. </p>
                    <p>GCF Clothing is owned and designed by Curtis Henderson. He uses his passion and creativity to make Christian clothing more exciting and stylish. </p>
                    <p>Feel free to return every month to see our new designs and newsletter.</p>
                </div>
            </div>    
      </div>
    </>)
};

export default Newsletter;