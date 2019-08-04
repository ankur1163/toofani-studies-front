import {Action} from '@ngrx/store';

export const ADD_NUMBER = 'ADD_NUMBER';


export class AddNumber implements  Action {
    
    
     type= "ADD_NUMBER";
    
     
     constructor(public payload: { toadd:Number }) {}

}

