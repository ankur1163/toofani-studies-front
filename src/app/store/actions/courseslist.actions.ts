import {Action} from '@ngrx/store';

export const COURSES_LIST = 'COURSES_LIST';


export class courseslist implements  Action {
    
    
     type= "COURSES_LIST";
    
     
     constructor(public payload: { coursesList:string[] }) {}

}