const initAuth = () => {
    return window.gapi.auth2.init({
      client_id: "499571463242-fe3kom4nijdeun61k0dcjth5ebt8gbse.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/analytics.readonly",
    });
  };

  export const checkSignedIn = () => {
    return new Promise((resolve, reject) => {
      initAuth() //calls the previous function
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance(); //returns the GoogleAuth object
          resolve(auth.isSignedIn.get()); //returns whether the current user is currently signed in
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  export const renderButton = () => {
    window.gapi.signin2.render("signin-button", {
      scope: "profile email",
      width: 240,
      height: 50,
      longtitle: true,
      theme: "dark",
      onsuccess: onSuccess,
      onfailure: onFailure,
    });
  };
  
  const onSuccess = (googleUser) => {
    console.log("Logged in as: " + googleUser.getBasicProfile().getName());
  };
  
  const onFailure = (error) => {
    console.error(error);
  };