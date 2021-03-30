import React from "react";
import { TileLayer, MapContainer, Marker } from 'react-leaflet'


export default function Map(props) {
 
    return (
      //setting up map and all default states
      <div>
        <h1 style={{ textAlign: "center" }}>YELPINGTON!</h1>
        <MapContainer
      center={props.center}
      zoom={13}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      zoomControl={true}
      touchZoom={true}
      dragging={true}
      style={{ height: "600px", width: "600px" }}
    >
      
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
      
      
    </MapContainer>
      </div>
    );
  }



