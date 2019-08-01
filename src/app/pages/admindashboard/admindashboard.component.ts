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
import * as Numberaction from '../../store/actions/admindashboard.actions';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})


export class AdmindashboardComponent implements OnInit {
  count:Observable<{count:Number}>;
  htmlContent = '';
  
 
  
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
  count$: any;
  
  
  
  
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
  constructor(private apollo: Apollo,public dialog: MatDialog,private store:Store<{Numbers:{count:number}}>) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogueComponent, {
      width: '250px',

      // data: {name: this.name, animal: this.animal}
    });
   
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialogddd was closed',this.store.select('Numbers'));
      this.store.dispatch(new Numberaction.AddNumber())
      console.log("count$",this.count$)
      
    });
  }

  ngOnInit() {
    console.log("get it",this.store);
    
    this.count$ = this.store.pipe(select('count'));
    this.apollo
    .watchQuery({
      query: gql`
        {
          courses{
            courseName
          }
        }
      `,
    })
    .valueChanges.subscribe(result => {
     console.log("result",result.data)
    });
  }


}

