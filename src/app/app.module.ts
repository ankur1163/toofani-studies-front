import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import  {AppRoutingModule} from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BillingComponent } from './pages/billing/billing.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { StsidebarComponent } from './studentcom/stsidebar/stsidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    StudentDashboardComponent,
    ForgotpasswordComponent,
    ProfileComponent,
    BillingComponent,
    ReportsComponent,
    StsidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
