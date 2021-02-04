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
            <h2> About </h2>
                <div className="my-2">
                    <div className="flex-row">
                        <h3> About the Company </h3>
                    </div>
                    <div className="flex-row">
                        <p> At Give Christ First clothing, we provide faith-fueled clothing made in the USA.  Our clothing is mde for faith-filled individuals because we believe your clothes should match your message. We spread the good news of Christ in every piece in our collection for men, women, and children alike. Founded in 2019, GCF Clothing has made a mission to make Christian clothing more exciting and stylish.</p>
                    </div>
                    <div className="flex-row">
                        <h3> About the Owner </h3>
                    </div>
                    <div className="flex-row">
                        <p> Hello! My name is Curtis Henderson and I created GCF Clothing as a way to express my faith through fashion. I've always been passionate about creating and designing new things. I've enjoyed creating flyers, websites, films, tv episodes, and so much more. </p>
                    </div>
                    <div className="flex-row">
                        <h3> Company Motto </h3>
                    </div>
                    <div className="flex-row">
                        <p> I believe that we were all created to create and no matter how big or how small our creations may be, they are valuable and should be shared with the world!</p>
                    </div>

                </div>    
            </>
      </div>
    </>)
};

export default About;