import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/anonymousUser/login/login.component';
import { Error404Component } from './components/anonymousUser/error404/error404.component';
import { UserHomeComponent } from './components/loggedInUser/user-home/user-home.component';
import { GroupExpensesComponent } from './components/loggedInUser/group-expenses/group-expenses.component';
import { CreateGroupComponent } from './components/loggedInUser/create-group/create-group.component';
import { CreateExpenseComponent } from './components/loggedInUser/create-expense/create-expense.component';
import { ExpenseDetailsComponent } from './components/loggedInUser/expense-details/expense-details.component';





const routes: Routes = [
  //anonymous user
  {path:"",component:LoginComponent},
  {path:'login',component:LoginComponent},


  //loggedin user
  {path:'user-home',component:UserHomeComponent},
  {path:'group-expenses/:id/:groupName',component:GroupExpensesComponent},
  {path:'create-group',component:CreateGroupComponent},
  {path:'create-expense/:groupId',component:CreateExpenseComponent},
  {path:'expense-details/:expenseId/:expenseDescription',component:ExpenseDetailsComponent},
  //404
  {path:'**',component:Error404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
