import { makeAutoObservable } from "mobx";
import firebase from '../../firebase';

class AuthStore {
    user = null;

    constructor() {
        makeAutoObservable(this);
    }

    signIn = ({ email, password }) => {
        debugger
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                this.user = {
                    email,
                    name: res.user.displayName
                }
            })
    }
    signUp = ({ name, login, password }) => {

    }
    relogUser = () => {

    }
    logOut = () => {

    }
}

export default new AuthStore();


