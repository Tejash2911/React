import React, { useEffect, useState } from "react";

const GetUserLocation = () => {
  const [address, setAddress] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const pos = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = pos.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=en`;

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        setAddress(data.address);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {Object.keys(address).length > 0 ? (
        <div>
          <p>Full Address:</p>
          <pre>{JSON.stringify(address, null, 2)}</pre>
        </div>
      ) : (
        <div>Address information not available</div>
      )}
    </>
  );
};

export default GetUserLocation;
