import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { GroupManagementService } from 'src/app/services/group-management.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent {
  
  groupMembers:string[]=[];
  emailForm: FormGroup;
  emails: string[] = [];
  username: any = ""

  constructor(private fb: FormBuilder,private _authService: AuthServiceService,private _groupManagementService:GroupManagementService,private toastr:ToastrService,private router:Router) {
    this.emailForm = this.fb.group({
      groupName: ['', Validators.required],
      groupDescription: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    //get the current user name
    this.username=_authService.getUsername();
    this.emails.push(this.username )
  }

  addEmail() {
    const email = this.emailForm.value.email;
    if (this.emailForm.get('email')?.valid && this.emails.length < 10) {
      if (!this.emails.includes(email)) {
        this.emails.push(email);
        this.emailForm.get('email')?.reset();
      } else {
        alert('This email has already been added.');
      }
    } else if (this.emails.length >= 10) {
      alert('You can only add up to 10 emails.');
    }
  }

  onSubmit() {
      const formData = {
        groupName: this.emailForm.get('groupName')?.value,
        groupDescription: this.emailForm.get('groupDescription')?.value,
        memberEmails: this.emails,
        createdByUserId: this.username,

      };
      this._groupManagementService.createGroup(formData).subscribe((res: any) => {
        //call the toastr service
        this.toastr.success("Group Created Successfully", "Expense Sharing App");
        //redirect to user home
        this.router.navigate(['/user-home']);
      });
    
  }
}
