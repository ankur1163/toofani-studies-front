import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {FormsModule} from '@angular/forms';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { DialogueComponent } from 'src/app/commoncomponents/dialogue/dialogue.component';
import { MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {AddNumber} from '../../store/actions/admindashboard.actions';
import {CoursesList} from '../../store/actions/coursesList.actions';


import { async } from '@angular/core/testing';
import { tap, map } from 'rxjs/operators';
import { State } from '@ngrx/store';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})


export class AdmindashboardComponent implements OnInit {
  count$:Observable<{count:Number}>;
  coursesList$:Observable<{CoursesList:string[]}>;
  c;
  htmlContent = '';
  propertyValue;
  coursesSubscribed;
  coursesList;
  
 
  
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    toolbarPosition: 'top',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  
  
  
  
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.artists, event.previousIndex, event.currentIndex);
    }
  artists = [
    'Artist I - Davido',
    'Artist II - Wizkid',
    'Artist III - Burna Boy',
    'Artist IV - Kiss Daniel',
    'Artist V - Mayorkun',
    'Artist VI - Mr. Eazi',
    'Artist VII - Tiwa Savage',
    'Artist VIII - Blaqbonez',
    'Artist IX - Banky W',
    'Artist X - Yemi Alade',
    'Artist XI - Perruzi',
    'Artist XII - Seyi Shay',
    'Artist XIII - Teni'
  ];
  constructor(private apollo: Apollo,public dialog: MatDialog,private store:Store<{ count: number,courseslist:string[] }>) {
    this.count$ = store.pipe(select('Numbers'));
    this.coursesList$= store.pipe(select('courseslist'))
    
    
   }

  openDialog(): void {
    var gt =Math.random();
    const dialogRef = this.dialog.open(DialogueComponent, {
      width: '250px',

    });
   
    dialogRef.afterClosed().subscribe(result => {
      
      this.store.dispatch(new AddNumber({toadd:gt}));
     });
  }

  ngOnInit() {
   this.coursesSubscribed= this.count$.subscribe(email => {
      this.propertyValue = email;
  })
    

    this.apollo
    .watchQuery({
      query: gql`
        {
          courses{
            courseName,
            id
          }
        }
      `,
    })
    .valueChanges.subscribe(result => {
     console.log("result is here",result.data)
     this.coursesList = result.data;
     this.store.dispatch(new CoursesList({coursesList:result.data as Array<object>}) );

    });
  }

  ngOnDestroy(){
      this.coursesSubscribed.unsubscribe();
  }


}

