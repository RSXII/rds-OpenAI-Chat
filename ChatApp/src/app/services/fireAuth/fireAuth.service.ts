import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
    providedIn: 'root'
})
export class FireAuthService {
    userData: Observable<any>
    //TODO: AngularFireAuth returns an observable of firebase.User or null.
    // For whatever reason, the type is not recognized by the IDE. Need to fix this later.
    constructor(private userAuth: AngularFireAuth) {
        this.userData = this.userAuth.authState;
    }

    async signUp(email: string, password: string): Promise<void> {
        try {
            const user = this.userAuth.createUserWithEmailAndPassword(email, password)
            console.log('Successfully signed up')
        } catch (error) {
            console.log(error);
        }
    }

    async signIn(email: string, password: string): Promise<void> {
        try {
            const user = this.userAuth.signInWithEmailAndPassword(email, password)
            console.log('Successfully signed in')
        } catch (error) {
            console.log(error);
        }
    }

    async signOut(): Promise<void> {
        try {
            const user = this.userAuth.signOut()
            console.log('Successfully signed out')
        } catch (error) {
            console.log(error);
        }
    }
}
