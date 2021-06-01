import React, { useCallback, useRef, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import Store from "../store/Store";
import MapStore from "../store/modules/Map";
import { observer } from "mobx-react-lite";

const Map = observer(() => {
  const onMarkerDragEnd = useCallback((event, index) => {
    MapStore.moveMarker(event.lngLat, index);
  }, []);
  const mapRef = useRef(null);

  useEffect(() => {
    let map = mapRef.current.getMap();
    if (Store.resultWay && !map.getSource('result-way')) {
      map.addSource('result-way', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': Store.resultWay.map(m => [m.longitude, m.latitude])
          }
        },
      });
      map.addLayer({
        'id': 'result-way',
        'type': 'line',
        'source': 'result-way',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round',
        },
        'paint': {
          'line-color': 'red',
          'line-width': 8
        }
      });
    } else {
      if (map && map.getSource('result-way')) {
        map.removeLayer('result-way');
        map.removeSource('result-way');
      }
    }
    return () => {
      if (map && map.getSource('result-way')) {
        map.removeLayer('result-way');
        map.removeSource('result-way');
      }
    }
  })

  const getMarkers = () => {
    return Store.resultWay ? Store.resultWay : MapStore.markers;
  }
  return (
    <div className="page-map">
      <ReactMapGL
        ref={mapRef}
        {...MapStore.viewport}
        onClick={MapStore.mapClick}
        onViewportChange={(viewport) => MapStore.setViewport(viewport)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/egotkacheco/ckp2m7f2p0a0e17kux4x33gdx"
      >
        {getMarkers().map((marker, index) => {
          return (
            <Marker
              key={index}
              latitude={marker.latitude}
              longitude={marker.longitude}
              offsetLeft={-20}
              offsetTop={-10}
              draggable
              onDragEnd={(event) => onMarkerDragEnd(event, index)}
            >
              {(!Store.resultWay || getMarkers().length - 1 !== index) && <Pin text={String(marker.id) && (Number(index) + 1)} size="30" />}
            </Marker>
          );
        })}
      </ReactMapGL>
      {/* <ControlDrag events={events} /> */}
    </div>
  );
});

export default Map;

const Pin = ({ size, text }) => {
  return (
    <div className="pin-wrapper">
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

      <div className="pin-text-label">{text}</div>
    </div>
  );
};
