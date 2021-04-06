import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }

    loginEmail(email, password) {
        return firebaseApp.auth().signInWithEmailAndPassword(email, password)
    }

    createUser(newUser) {
        return firebaseApp.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
    }

    signInUser(event) {
        return firebaseApp.auth().onAuthStateChanged(event);
    }

    sendVerificaiton() {
        const user = firebaseApp.auth().currentUser;
        return user.sendEmailVerification();
    }

    logout() {
        return firebaseApp.auth().signOut()
    }
}

export default AuthService;