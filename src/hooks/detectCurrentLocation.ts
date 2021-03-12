
import { useState, useEffect } from 'react';

const center = {
    lat: 35.292556100000006,
    lng: 10.7086373
  }
function GetCurrentPosition() {
  const [position, setPosition] = useState(center)

useEffect(() => {
  navigator.geolocation.getCurrentPosition(function(position) {
    setPosition({ 
      lat:  position.coords.latitude,
      lng: position.coords.longitude
    })
  });
}, [])

return position;
}

export default GetCurrentPosition;
