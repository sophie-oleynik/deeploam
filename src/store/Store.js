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
    // this.getLocationAddress({ lat: latitude, lng: longitude})
    if (this.markers.length > 4) this.testTSPEndpoint();
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

  getLocationAddress = ({ lat, lng }) => {
    fetch(`http://api.positionstack.com/v1/reverse?access_key=fa2d1ca898c2d603a678498d96e9715e&query=${lat},${lng}`)
      .then(res => {
        res.json().then(res => {
          debugger
        })
      })
  }
  
  testTSPEndpoint = () => {
    // 614f849e3291d9b92cb8c4b6151b8d6c
    let markersQuery = this.markers.reduce((s, el, index) => {
      s += el.longitude + ',' + el.latitude;
      if (index !== this.markers.length - 1) {
        s+='|'
      }
      return s
    }, '')
    console.log(markersQuery)
    fetch(`https://api.visicom.ua/data-api/5.0/core/tsp.json?waypoints=${markersQuery}&key=614f849e3291d9b92cb8c4b6151b8d6c`)
      .then(res => {
        debugger
        res.json().then(res => {
          debugger
        })
      })
  }
}

const store = new Store();

export default store;
