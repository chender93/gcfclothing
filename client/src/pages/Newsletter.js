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
        <h1 id='newsletter-head'> GCF Newsletter! </h1>
        <br></br>
            <div className="my-2">
                {/* <div className="flex-row">
                    <h2> Welcome! </h2>
                </div>
                <br></br> */}
                <div className="flex-row" id='news-sub'>
                    <h3 id='newsletter-sub'>Give Christ First</h3>
                </div>
                <div>  
                    <h4 id='date-entry'>February 1, 2021:</h4>
                </div>
                <div id='news-p' className="flex-row">
                    <p> As code students at the University of Pennsylvania Coding Boot Camp, Curtis, Ashley, and Lucianne worked together to create a new webpage for GCF Clothing. </p>
                    <p>GCF Clothing is owned and designed by Curtis Henderson. He uses his passion and creativity to make Christian clothing more exciting and stylish. </p>
                    <p>Feel free to return every month to see our new designs and newsletter.</p>
                </div>
            </div>    
      </div>
    </>)
};

export default Newsletter;