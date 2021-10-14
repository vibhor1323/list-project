import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";


export interface AuthResponseData{
    kind:string;
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:StorageManager;
    localId:string;
    registered?:boolean;
    user : any;

}


@Injectable({providedIn:'root'})
export class AuthService{
    user=new BehaviorSubject<User>(null!);
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
        ).pipe(catchError(this.handleError),tap(resData =>{
            this.handleAuthentication(
                resData.email,
                resData.localId,
                resData.idToken,
                +resData.expiresIn)
        }));
    }
    login(email:string , password:string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmUvDXLDS045Ytndr4TEHmI3Yv9yKNGLg ',
            {
                email: email,
                password: password,
                returnSecureToken: true
    
    
            }
        ).pipe(catchError(this.handleError),tap(resData =>{
            this.handleAuthentication(
                resData.email,
                resData.localId,
                resData.idToken,
                +resData.expiresIn)
        }));

    }

    private handleAuthentication(
        email:string,
        userId:string,
        token:string,
        expiresIn:number
    ){
        const expirationDate =new Date(new Date().getTime()+ expiresIn *1000);
        const user =new User(email,userId,token,expirationDate);
        this.user.next(user);
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