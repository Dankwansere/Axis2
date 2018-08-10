import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ErrorMessage} from '../../commons/error-message';
import { BaseComponent } from '../../shared/base/component/base.component';

@Component({
  selector: 'app-login',
  templateUrl: '../view/login.component.html',
  styleUrls: ['../view/login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {


  private loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
     private dialogRef: MatDialogRef<LoginComponent>, private loginService: LoginService) { 
       super();
     }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required]
    });
  }

  login() {
    this.isLoading = true;
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe((resp: any) => {
        console.log('Response: ', resp);
        if (resp.status === 'Valid') {
          this.isLoading = false;
          this.dialogRef.close();
          this.router.navigate(['home']);
        } else if (resp.status === 'Invalid') {
          this.isLoading = false;
          this.errorMessage = ErrorMessage.INVALID_LOGIN;
        }
      });

    } else if (this.loginForm.invalid) {
      this.isLoading = false;
      console.log('invalid form');
      this.errorMessage = 'All fields required!';
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
