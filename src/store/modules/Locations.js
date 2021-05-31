import { makeAutoObservable } from "mobx";
import firebase from "../../firebase";
import AuthStore from "./Auth";
class LocationsStore {
    locations = [];
    activeLocation = null;
    constructor() {
        makeAutoObservable(this);
    }

    loadLocations = async () => {
        if (!AuthStore.user) return;
        var starCountRef = firebase.database().ref('locations/' + AuthStore.user.id);
        starCountRef.on('value', (snapshot) => {
            this.locations = snapshot.val() || [];
        });
    }
    saveLocation = (marker) => {
        this.activeLocation = { ...marker, name: '' };
    }
    addLocation = ({ name }) => {
        this.activeLocation.name = name;
        this.locations = [...this.locations, this.activeLocation];
        firebase.database().ref('locations/' + AuthStore.user.id).set(this.locations);

        this.activeLocation = null;
    }
    closeDialog = () => {
        this.activeLocation = null;
    }
}
let store = new LocationsStore()

export default store;


