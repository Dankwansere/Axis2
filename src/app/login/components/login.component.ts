import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ErrorMessage} from '../../commons/error-message';
import { BaseComponent } from '../../shared/base/component/base.component';
import { SessionStorage } from '../../shared/security/session-storage';
import { Constants } from '../../commons/constants';
import { Store } from '@ngrx/store';
import { ILogin } from '../../store/interface/login.interface';
import * as LoginActions from '../../store/actions/login.action';


@Component({
  selector: 'app-login',
  templateUrl: '../view/login.component.html',
  styleUrls: ['../view/login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {


  private loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
    private store: Store<{login: {
      id,
      namme
    }}>,
     private dialogRef: MatDialogRef<LoginComponent>, private loginService: LoginService) {
       super();
     }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.isLoading = true;
    this.store.select('login').subscribe((resp) => {
    });

    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe((resp: any) => {
        if (resp.body.status === 'Valid') {
          this.isLoading = false;
          this.dialogRef.close();
          this.setUserInSession(resp.body.data);
          SessionStorage.setDataInSession('authorization', resp.headers.get('authorization'));
          this.router.navigate(['home']);
        } else if (resp.body.status === 'Invalid') {
          this.isLoading = false;
          this.errorMessage = ErrorMessage.INVALID_LOGIN;
        }
      });

    } else if (this.loginForm.invalid) {
      this.isLoading = false;
      this.errorMessage = 'All fields required!';
    }
  }

  closeDialog() {
    this.dialogRef.close();

    const iLoginTest: ILogin = {
      firstname: 'updated',
      lastname: 'sarpong',
      id: 2
    };

    this.store.dispatch(new LoginActions.AddLogin(iLoginTest));

  }

  updateRedux() {
    const iLoginTest: ILogin = {
      firstname: 'Alafia',
      lastname: 'sarpong',
      id: 2
    };

    const payload = {
      index: 0,
      data: iLoginTest
    };

    this.store.dispatch(new LoginActions.UpdateIngredient(payload));
  }

  /**
   * @param res Response(User) Object returned from server
   */
  private setUserInSession(res: any) {
    SessionStorage.setDataInSession(Constants.USER_SESSION_KEY, JSON.stringify(res));
  }

}
