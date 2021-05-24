import { makeAutoObservable } from "mobx";
import { getPosition } from "../Geolocation";
import { FlyToInterpolator } from "react-map-gl";

class Store {
  viewport = {
    latitude: 50.450001,
    longitude: 30.523333,
    width: "75vw",
    height: "100vh",
    zoom: 10,
    transitionDuration: 1000,
    transitionInterpolator: new FlyToInterpolator(),
  };

  markers = [
    { latitude: 50.450001, longitude: 30.523333, bearing: 0, pitch: 0 },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setViewport(viewport) {
    this.viewport = viewport;
  }

  createMarker = (longitude, latitude) => {
    let newMarker = {
      latitude: Number(latitude.toFixed(5)),
      longitude: Number(longitude.toFixed(5)),
      bearing: 0,
      pitch: 0,
    };
    this.markers.push(newMarker);
  };

  moveMarker = (lngLat, index) => {
    this.markers[index].longitude = Number(lngLat[0].toFixed(5));
    this.markers[index].latitude = Number(lngLat[1].toFixed(5));
  };

  toLocation = () => {
    getPosition((position) => {
      console.log(position);
      this.viewport = {
        ...this.viewport,
        zoom: 15,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    });
  };

  mapClick = (e) => {
    console.log(e.lngLat);
    this.createMarker(...e.lngLat);
  };
}

const store = new Store();

export default store;
