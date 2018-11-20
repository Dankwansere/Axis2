import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Utility } from '../../../commons/utility';
import { Constants } from '../../../commons/constants';

@Component({
  selector: 'app-password',
  templateUrl: '../view/password.component.html',
  styleUrls: ['../view/password.component.css']
})
export class PasswordComponent implements OnInit {

  private isUpdateMode: boolean;
  passwordForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializePasswordForm();

    if (this.isUpdateMode) {
      this.passwordForm.addControl('currentPassword', new FormControl(Constants.EMPTY, Validators.required));
    }
  }

  private initializePasswordForm() {
    this.passwordForm = this.fb.group({
      password: [Constants.EMPTY, Validators.required],
      confirmPassword: [Constants.EMPTY, Validators.required]
    });
  }

  comparePswdAndConfirmPswd(): boolean {
     return Utility.compareTwoStrings(this.passwordForm.get('password').value, this.passwordForm.get('confirmPassword').value);
  }

  getPasswordFieldVal(): string {
    return this.passwordForm.get('password').value;
  }


}
