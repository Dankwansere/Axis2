import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Utility } from '../../../commons/utility';

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
    this.passwordForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });

    if (this.isUpdateMode) {
      this.passwordForm.addControl('currentPassword', new FormControl('', Validators.required));
    }
  }

  validatePasswords() {
     return Utility.compareTwoStrings(this.passwordForm.get('password').value, this.passwordForm.get('confirmPassword').value);
  }

  getPasswordFieldVal() {
    return this.passwordForm.get('password').value;
  }


}
