
import {Action} from '@ngrx/store';

const initialState = {
  coursesList:[]
};

export function coursesListReducer(state=initialState,action:any){
  console.log("reducer is courses",action.payload)
  
    switch(action.type) {
      case 'COURSES_LIST':
          
          return {
              ...state
              
          };
          default:
      return state;
  } ;
  
    
}