import { makeAutoObservable } from "mobx";
import { getPosition } from "../../Geolocation";
import { FlyToInterpolator } from "react-map-gl";

class Store {
    viewport = {
        latitude: 50.450001,
        longitude: 30.523333,
        width: "100vw",
        height: "100vh",
        zoom: 10,
        transitionDuration: 1000,
        transitionInterpolator: new FlyToInterpolator(),
    };

    markers = [
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
        this.getLocationAddress({ lat: latitude, lng: longitude })
            .then(address => {
                this.markers.push({ ...newMarker, address: address });
            })
        // if (this.markers.length > 4) this.testTSPEndpoint();
    };
    addMarker = marker => {
        this.markers.push(marker)
    }
    removeMarker = id => {
        this.markers = this.markers.filter((marker, index) => index !== id);
    }

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
        this.createMarker(...e.lngLat);
    };

    getLocationAddress = ({ lat, lng }) => {
        return fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=8af958e5a28048ae84caada49b55fc65`
            // `https://api.visicom.ua/data-api/5.0/uk/geocode.json?near=,&key=614f849e3291d9b92cb8c4b6151b8d6c`
        ).then(async (res) => {
            let data = await res.json();
            if (data.results) {
                return data.results[0].formatted;
            }
        });
    };

}

const store = new Store();

export default store;
