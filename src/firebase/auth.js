import { auth } from './firebase';

export const doSignInWithEmailAndPassword = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
}

export const doSignOut = () => auth.signOut();