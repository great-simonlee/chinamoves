import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }

    createUser(newUser) {
         return firebaseApp.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
    }
}

export default AuthService;