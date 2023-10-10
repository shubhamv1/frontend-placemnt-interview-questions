import React, { useState, useEffect } from "react";

const Location = () => {
  const [location, setLocation] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((res) =>{
      console.log(res);
      setLocation({long: res.coords.longitude, lat: res.coords.latitude});
    })
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <button onClick={getCurrentLocation}>Update Location</button>
      {location && <h1>{`Latitude: ${location.lat} Longitude: ${location.long}`}</h1>}
    </div>
  );
};

export default Location;

