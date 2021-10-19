import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Actions, ofType,Effect} from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap,tap } from 'rxjs/operators';
import * as AuthAction from './auth.actions';


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

@Injectable()
export class AuthEffect{
    @Effect()
    authLogin= this.action$.pipe(
        ofType(AuthAction.LOGIN_START),
        switchMap((authData: AuthAction.LoginStart)=>{
            return this.http.post<AuthResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmUvDXLDS045Ytndr4TEHmI3Yv9yKNGLg ',
                {
                    email:authData.payload.email,
                    password: authData.payload.password,
                    returnSecureToken: true
        
        
                }
            ).pipe(
                map(resData =>{
                
                    const expirationDate =new Date(new Date().getTime()+ +resData.expiresIn *1000);
                    return new AuthAction.Login({
                        email:resData.email,
                        userId:resData.localId,
                        token:resData.idToken,
                        expirationDate:expirationDate
                    });
                }),
                catchError(errorRes => {
                    let errorMessage ="An unknown error occured!!";
                    if(!errorRes.error || !errorRes.error.error)
                    {
                        return of(new AuthAction.LoginFail(errorMessage));
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
                return of(new AuthAction.LoginFail(errorMessage));
            })
            )
        })

    );
    
    @Effect({dispatch:false})
    authSuccess =this.action$.pipe(ofType(AuthAction.LOGIN),tap(()=> {
        this.router.navigate(['/']);

    }))
    constructor(private action$: Actions, private http:HttpClient,
        private router :Router){

    }
}