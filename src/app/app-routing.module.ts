import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BillingComponent } from './pages/billing/billing.component';
import {AdmindashboardComponent} from './pages/admindashboard/admindashboard.component';
const routes: Routes=[
    
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'forgotpassword',component:ForgotpasswordComponent},
    {path:'profilestudent',component:ProfileComponent},
    {path:'billingstudent',component:BillingComponent},
    {path:'admindashboard',component:AdmindashboardComponent},
    {path:'',component:StudentDashboardComponent}
]



@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }