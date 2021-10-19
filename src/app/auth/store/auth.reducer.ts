import { User } from "../user.model";
import * as AuthAction from "./auth.actions";

export interface State{
    user:User;
    authError:string;
    loading:boolean;
}
const initialState: State={
    user : new User('','','',new Date(0)),
    authError:'',
    loading:false
};

export function authReducer(
    state= initialState, 
    action: AuthAction.AuthAction){
    
        switch(action.type){
            case AuthAction.LOGIN:
                  const user = new User(
                      action.payload.email,
                      action.payload.userId,
                      action.payload.token,
                      action.payload.expirationDate
                  );
                  return {
                      ...state,
                      authError:'',
                      user: user,
                      loading:false
                  }
            case AuthAction.LOGIN_START:
                return {
                    ...state,
                    authError:null,
                    loading:true
                }
            case AuthAction.LOGOUT:
                return {
                    ...state,
                user:null
                }
            case AuthAction.LOGIN_FAIL:
                return{
                    ...state,
                    user:null,
                    authError:action.payload,
                    loading:false
                }
            default:
                return state;
        }
}