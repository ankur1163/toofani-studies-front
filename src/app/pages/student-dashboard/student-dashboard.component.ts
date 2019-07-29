import { Component, OnInit, NgModule } from '@angular/core';
import  {StsidebarComponent }from '../../studentcom/stsidebar/stsidebar.component'


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})

@NgModule({
  declarations: [StudentDashboardComponent,StsidebarComponent],
  exports: [StudentDashboardComponent],
  imports: [
    StsidebarComponent,
  ],
})
export class StudentDashboardComponent implements OnInit {

  constructor() {  }

  ngOnInit() {
  }

}
