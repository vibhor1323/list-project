import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { User } from "./user.model";
// import { stringify } from "querystring";
// import { EmailValidator } from "@angular/forms";

export interface AuthResponseData{
    kind:string;
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:StorageManager;
    localId:string;
    registered?:boolean;


}


@Injectable({providedIn:'root'})
export class AuthService{
    user=new Subject<User>();
    constructor(private http: HttpClient){

    }
    signup(email:string,password:string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmUvDXLDS045Ytndr4TEHmI3Yv9yKNGLg',
        {
            email: email,
            password: password,
            returnSecureToken: true


        }
        ).pipe(catchError(this.handleError));
    }
    login(email:string , password:string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmUvDXLDS045Ytndr4TEHmI3Yv9yKNGLg ',
            {
                email: email,
                password: password,
                returnSecureToken: true
    
    
            }
        ).pipe(catchError(this.handleError));

    }
    private handleError(errorRes:HttpErrorResponse){
        let errorMessage ="An unknown error occured!!";
        if(!errorRes.error || !errorRes.error.error)
        {
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.meesage){
            case 'EMAIL_EXISTS':
                errorMessage='This email exists already';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage= 'This email does not exist';
                break;
            case 'INVALID_PASSWORD':
                errorMessage='Password Incorrect';
                break;
        }
        return throwError(errorMessage);
        
        
    }

    

}