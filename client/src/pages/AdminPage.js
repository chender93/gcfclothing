import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

const history = createBrowserHistory();
const trackingId = process.env.TRACKING_ID;

// Initialize google analytics page view tracking
ReactGA.initialize(trackingId);
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

//import { useQuery } from '@apollo/react-hooks';

function AdminPartial() {
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

const AdminPage = () => (
  <Router history={history}>
    <AdminPartial />
  </Router>
);

ReactDOM.render(<AdminPage />, document.getElementById('root'));

export default AdminPage;