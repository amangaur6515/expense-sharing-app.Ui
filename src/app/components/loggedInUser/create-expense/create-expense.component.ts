import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ExpenseManagementService } from 'src/app/services/expense-management.service';
import { GroupManagementService } from 'src/app/services/group-management.service';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css']
})
export class CreateExpenseComponent {
  createExpenseForm: FormGroup;
  username: any = ""
  groupId:any=0;
  groupMembers:string[]=[];
  splitAmong:string[]=[];
  groupName:any="";

  constructor(private fb: FormBuilder,private _authService: AuthServiceService,private _groupManagementService:GroupManagementService,private toastr:ToastrService,private router:Router,private route: ActivatedRoute,private _expenseManagementService:ExpenseManagementService) {
    this.createExpenseForm = this.fb.group({
      description: ['', Validators.required],
      amount: ['', [Validators.required, this.positiveNumberValidator]],
    });

    //get the current user name
    this.username=_authService.getUsername();
    //push the current user in the split among list
    this.splitAmong.push(this.username);
    //get the group id from the url
    this.route.params.subscribe(params => {
      this.groupId = params['groupId'];
      console.log(this.groupId);
    });
    //get group details
    this.getGroupDetails();
  }

  positiveNumberValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const isValid = !isNaN(value) && value >= 0;
    return isValid ? null : { positiveNumber: true };
  }
  
  includeMember(email:string){ 
    //push it in the splitamong
    this.splitAmong.push(email);
    //remove from groupmembers array
    this.groupMembers=this.groupMembers.filter((member)=>member!=email);
   
  }

  onSubmit() {
      const formData = {
        description: this.createExpenseForm.get('description')?.value,
        amount: this.createExpenseForm.get('amount')?.value,
        paidBy: this.username,
        splitAmong: this.splitAmong,
        groupId:this.groupId

      };
      this._expenseManagementService.createExpense(formData).subscribe((res: any) => {
        //call the toastr service
        this.toastr.success("Expense Created Successfully", "Expense Sharing App");
        //redirect to user home
        this.router.navigate(['/group-expenses',this.groupId,this.groupName]);
      });
  }

  getGroupDetails(){
    this._groupManagementService.getGroupDetails(this.groupId).subscribe((res:any)=>{
      console.log(res);
      //assing the groupMembers
      this.groupMembers=res.groupMembers;
      this.groupName=res.groupName;
    })
  }

  goBack(){
    this.router.navigate(['/group-expenses',this.groupId,this.groupName]);
  }

}
