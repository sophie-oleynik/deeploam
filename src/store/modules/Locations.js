import { makeAutoObservable } from "mobx";


class LocationsStore {
    locations = null;

    constructor() {
        makeAutoObservable(this);
    }

    loadLocations = (userId) => {

    }

    addLocation = () => {
        
    }
    saveNewLocation = () => {

    }
}

export default new LocationsStore();


