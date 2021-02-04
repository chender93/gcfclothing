import React from "react";
import { Link } from "react-router-dom";

//import { useQuery } from '@apollo/react-hooks';

function About() {
  return (
  <>
    <div className="container my-1">
        <Link to="/">
            ← Back to Products
        </Link>
          <>
            <h2 id= 'about-title'> About </h2>
                <div className="my-2">
                    <div id='company' className="flex-row">
                        <h3 id='about-company'> About the Company </h3>
                    </div>
                    <div id='about-all' className="flex-row">
                        <p id='about-p'>At Give Christ First clothing, we provide faith-fueled clothing made in the USA.  Our clothing is mde for faith-filled individuals because we believe your clothes should match your message. We spread the good news of Christ in every piece in our collection for men, women, and children alike. Founded in 2019, GCF Clothing has made a mission to make Christian clothing more exciting and stylish.</p>
                    </div>
                    <div id= 'about-owner' className="flex-row">
                        <h3 id='owner' >About the Owner </h3>
                    </div>
                    <div id='curtis-intro' className="flex-row">
                        <p id='owner-p'>Hello! My name is Curtis Henderson and I created GCF Clothing as a way to express my faith through fashion. I've always been passionate about creating and designing new things. I've enjoyed creating flyers, websites, films, tv episodes, and so much more. </p>
                    </div>
                    <div id='company-motto' className="flex-row">
                        <h3 id='motto'>Company Motto </h3>
                    </div>
                    <div id='motto-all' className="flex-row">
                        <p id='motto-p'>I believe that we were all created to create and no matter how big or how small our creations may be, they are valuable and should be shared with the world!</p>
                    </div>

                </div>    
            </>
      </div>
    </>)
};

export default About;