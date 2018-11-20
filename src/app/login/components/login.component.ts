import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ErrorMessage} from '../../commons/error-message';
import { BaseComponent } from '../../shared/base/component/base.component';
import { SessionStorage } from '../../shared/security/session-storage';
import { Constants, RoutingConstants, SessionConstants } from '../../commons/constants';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { AxisLoginResponse } from '../../commons/Interface/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: '../view/login.component.html',
  styleUrls: ['../view/login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {


  private _loginForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router,
     private dialogRef: MatDialogRef<LoginComponent>, private loginService: LoginService,
     private logService: LoggerService) {
       super();
     }

  ngOnInit() {
    this.intializeForm();

  }

  private intializeForm() {
    this.loginForm = this.fb.group({
      username: [Constants.EMPTY, Validators.required],
      password: [Constants.EMPTY, Validators.required]
    });
  }

  login() {
    this.isLoading = true;
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe((resp: any) => {
        const response: AxisLoginResponse = resp.body;
        if (response.status === Constants.VALID) {
          this.isLoading = false;
          this.dialogRef.close();
          this.setUserInSession(response.data);
          SessionStorage.setDataInSession(SessionConstants.AUTH, resp.headers.get(SessionConstants.AUTH));
          this.router.navigate([RoutingConstants.HOME]);

        } else if (response.status === Constants.INVALID) {
          this.isLoading = false;
          this.errorMessage = ErrorMessage.INVALID_LOGIN;
        }
      });

    } else if (this.loginForm.invalid) {
      this.isLoading = false;
      this.errorMessage = ErrorMessage.ALL_FIELDS_REQUIRED;
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * @param res Response(User) Object returned from server
   */
  private setUserInSession(res: any) {
    SessionStorage.setDataInSession(Constants.USER_SESSION_KEY, JSON.stringify(res));
  }

  public get loginForm(): FormGroup {
    return this._loginForm;
  }
  public set loginForm(value: FormGroup) {
    this._loginForm = value;
  }

}
