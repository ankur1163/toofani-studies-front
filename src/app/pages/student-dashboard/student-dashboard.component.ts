import { Component, OnInit, NgModule } from '@angular/core';



@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})

@NgModule({
  declarations: [StudentDashboardComponent],
  exports: [StudentDashboardComponent],
  imports: [
    
  ],
})
export class StudentDashboardComponent implements OnInit {

  constructor() {  }

  ngOnInit() {
  }

}
