import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/anonymousUser/login/login.component';
import { Error404Component } from './components/anonymousUser/error404/error404.component';
import { UserHomeComponent } from './components/loggedInUser/user-home/user-home.component';
import { GroupExpensesComponent } from './components/loggedInUser/group-expenses/group-expenses.component';
import { CreateGroupComponent } from './components/loggedInUser/create-group/create-group.component';
import { CreateExpenseComponent } from './components/loggedInUser/create-expense/create-expense.component';
import { ExpenseDetailsComponent } from './components/loggedInUser/expense-details/expense-details.component';
import { GroupDetailsComponent } from './components/loggedInUser/group-details/group-details.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { AllExpensesComponent } from './components/admin/all-expenses/all-expenses.component';
import { adminGuard } from './guards/admin.guard';





const routes: Routes = [
  //anonymous user
  {path:"",component:LoginComponent},
  {path:'login',component:LoginComponent},


  //loggedin user
  {path:'user-home',component:UserHomeComponent,canActivate:[authGuardGuard]},
  {path:'group-expenses/:id/:groupName',component:GroupExpensesComponent,canActivate:[authGuardGuard]},
  {path:'create-group',component:CreateGroupComponent,canActivate:[authGuardGuard]},
  {path:'create-expense/:groupId',component:CreateExpenseComponent,canActivate:[authGuardGuard]},
  {path:'expense-details/:expenseId/:expenseDescription',component:ExpenseDetailsComponent,canActivate:[authGuardGuard]},
  {path:'group-details/:groupId',component:GroupDetailsComponent,canActivate:[authGuardGuard]},

  //admin
  {path:'all-expenses',component:AllExpensesComponent,canActivate:[adminGuard]},  
  //404
  {path:'**',component:Error404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
