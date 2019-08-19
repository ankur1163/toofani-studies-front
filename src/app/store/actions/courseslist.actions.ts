import {Action} from '@ngrx/store';

export const COURSES_LIST = 'COURSES_LIST';


export class CoursesList implements  Action {
    
    
     type= "COURSES_LIST";
    
     
     constructor(public payload: { coursesList:Array<object> }) {
          console.log("course action")}

}