import React from "react";
import { useState, useCallback } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import Store from "../store/Store";
import { observer } from "mobx-react-lite";

import ControlDrag from "./Marker.jsx";

const Map = observer(() => {
  const [events, logEvents] = useState({});

  const onMarkerDragEnd = useCallback((event, index) => {
    Store.moveMarker(event.lngLat, index);
  }, []);

  return (
    <div className="page-map">
      <ReactMapGL
        {...Store.viewport}
        onClick={Store.mapClick}
        onViewportChange={(viewport) => Store.setViewport(viewport)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/egotkacheco/ckp2m7f2p0a0e17kux4x33gdx"
        style={{ display: "flex", marginRight: "auto" }}
      >
        {Store.markers.map((marker, index) => {
          return (
            <Marker
              latitude={marker.latitude}
              longitude={marker.longitude}
              offsetLeft={-20}
              offsetTop={-10}
              draggable
              // onDragStart={onMarkerDragStart}
              // onDrag={onMarkerDrag}
              onDragEnd={(event) => onMarkerDragEnd(event, index)}
            >
              <Pin size="20" />
            </Marker>
          );
        })}
      </ReactMapGL>
      <ControlDrag events={events} />
    </div>
  );
});

export default Map;

const Pin = ({ size }) => {
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      style={{
        fill: "#d00",
        stroke: "none",
      }}
    >
      <path
        d="M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
C20.1,15.8,20.2,15.8,20.2,15.7z"
      />
    </svg>
  );
};
