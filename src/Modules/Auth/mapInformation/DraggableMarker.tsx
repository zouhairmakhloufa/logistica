import { useState, useMemo, useRef } from 'react';
import { Marker, useMapEvents } from 'react-leaflet';
import L from "leaflet";

const center = {
    lat: 35.292556100000006,
    lng: 10.7086373
  }
  const icon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png"
  });


  
  function DraggableMarker() {
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker: any = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng() )
          }
        },
      }),
      [],
    )
    useMapEvents({
      click(e) {
        setPosition(e.latlng)
      },
    })
    return (

   <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        icon={icon}
        ref={markerRef}>
      </Marker>
    )
  }
  export default DraggableMarker;	