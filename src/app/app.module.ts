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
import  {StoreModule} from '@ngrx/store';
import { Stsidebar2Component } from './studentcom/stsidebar2/stsidebar2.component';
import { StupperbarmainComponent } from './studentcom/stupperbarmain/stupperbarmain.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { GraphQLModule } from './graphql.module';
import { DialogueComponent } from './commoncomponents/dialogue/dialogue.component';
import { adminDashboardReducer } from './store/reducers/admindashboard.reducer';
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
  
    Stsidebar2Component,
    StupperbarmainComponent,
    AdmindashboardComponent,
    DialogueComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({Numbers:adminDashboardReducer}),
    AppRoutingModule,
    FlexLayoutModule,
    DragDropModule,
    HttpClientModule, 
    AngularEditorModule, GraphQLModule 
  ],
  entryComponents:[
    DialogueComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
