import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ErrorMessage} from '../../commons/error-message';

@Component({
  selector: 'app-login',
  templateUrl: '../view/login.component.html',
  styleUrls: ['../view/login.component.css']
})
export class LoginComponent implements OnInit {


  private loginForm: FormGroup;
  private errorMessage;

  constructor(private fb: FormBuilder, private router: Router,
     private dialogRef: MatDialogRef<LoginComponent>, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required]
    });
  }

  login() {

    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe((resp: any) => {
        console.log('Response: ', resp);
        if (resp.status === 'Valid') {
          this.dialogRef.close();
          this.router.navigate(['home']);
        } else if (resp.status === 'Invalid') {
          this.errorMessage = ErrorMessage.INVALID_LOGIN;
        }
      });

    } else if (this.loginForm.invalid) {
      console.log('invalid form');
      this.errorMessage = 'All fields required!';
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
