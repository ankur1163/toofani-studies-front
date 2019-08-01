
import {Action} from '@ngrx/store';
const initialState = {
  count:1
};

export function adminDashboardReducer(state=initialState,action:Action){
  console.log("reducer",state,action.type)
    switch(action.type) {
      case 'ADD_NUMBER':
          
          return {
              ...state,
              count:state.count+1
          };
          default:
      return state;
  } ;
  
    
}