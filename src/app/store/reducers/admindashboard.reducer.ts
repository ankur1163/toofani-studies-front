
import {Action} from '@ngrx/store';
import { AddNumber } from '../actions/admindashboard.actions';
const initialState = {
  count:1,
  add:0
};

export function adminDashboardReducer(state=initialState,action:any){
  console.log("reducer admindashboard",action.payload)
  
    switch(action.type) {
      case 'ADD_NUMBER':
          
          return {
              ...state,
              count:state.count+action.payload.toadd
          };
          default:
      return state;
  } ;
  
    
}