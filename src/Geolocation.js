export const getPosition = async (callback) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(callback, posError); // Passing in a success callback and an error callback fn
  } else {
    alert("Sorry, Geolocation is not supported by this browser."); // Alert is browser does not support geolocation
  }
};

// Geolocation error callback fn. Query permissions to check if the error occured due to user not allowing location to be shared
export const posError = () => {
  if (navigator.permissions) {
    navigator.permissions.query({ name: "geolocation" }).then((res) => {
      if (res.state === "denied") {
        alert(
          "Enable location permissions for this website in your browser settings."
        );
      }
    });
  } else {
    alert(
      "Unable to access your location. You can continue by submitting location manually."
    ); // Obtaining Lat/long from address necessary
  }
};
