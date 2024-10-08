import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/anonymousUser/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { Error404Component } from './components/anonymousUser/error404/error404.component';
import { UserHomeComponent } from './components/loggedInUser/user-home/user-home.component';
import { GroupExpensesComponent } from './components/loggedInUser/group-expenses/group-expenses.component';
import { CreateGroupComponent } from './components/loggedInUser/create-group/create-group.component';
import { CreateExpenseComponent } from './components/loggedInUser/create-expense/create-expense.component';
import { ExpenseDetailsComponent } from './components/loggedInUser/expense-details/expense-details.component';
import { GroupDetailsComponent } from './components/loggedInUser/group-details/group-details.component';
import { AllExpensesComponent } from './components/admin/all-expenses/all-expenses.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Error404Component,
    UserHomeComponent,
    GroupExpensesComponent,
    CreateGroupComponent,
    CreateExpenseComponent,
    ExpenseDetailsComponent,
    GroupDetailsComponent,
    AllExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
