import { makeAutoObservable } from "mobx";
import firebase from '../../firebase';
import LocationsStore from './Locations';
class AuthStore {
    user = null;

    constructor() {
        makeAutoObservable(this);
    }

    signIn = ({ email, password }) => {

        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                let user = {
                    id: userCredential.user.uid,
                    email: userCredential.user.email,
                    displayName: userCredential.user.displayName
                };
                this.user = user;
                localStorage.setItem('map_user', JSON.stringify(user));
                LocationsStore.loadLocations();
            })
            .catch(err => { return Promise.reject(err) })
    }
    signUp = ({ name, email, password }) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                firebase.auth().currentUser
                    .updateProfile({ displayName: name })
                    .then(() => {
                        this.user = {
                            id: firebase.auth().currentUser.uid,
                            email: firebase.auth().currentUser.email,
                            displayName: firebase.auth().currentUser.displayName
                        };
                        LocationsStore.loadLocations();
                    })
            })
            .catch(err => { return Promise.reject(err) })
    }
    relogUser = () => {
        let user = localStorage.getItem('map_user');
        if (user && !this.user) {
            user = JSON.parse(user);
            this.user = user;
            LocationsStore.loadLocations();
        }
    }
    logOut = () => {
        localStorage.removeItem('map_user');
        this.user = null;
    }
}

export default new AuthStore();


