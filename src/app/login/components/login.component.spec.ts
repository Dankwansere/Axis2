import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginService } from '../services/login.service';
import { FormBuilder } from '@angular/forms';
import { SessionStorage } from '../../shared/security/session-storage';
import { SessionConstants } from '../../commons/constants';
import { SpinnerComponent } from 'src/app/shared/spinner/components/spinner.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RouterTestingModule } from '@angular/router/testing';
import {MatDialogModule, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { BaseService } from 'src/app/shared/services/base.service';
import { HttpClientModule } from '@angular/common/http';
import { LoggerService } from 'src/app/shared/services/logger.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserService } from 'src/app/shared/services/user.service';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, SpinnerComponent ],
      imports: [MatInputModule, RouterTestingModule, BrowserAnimationsModule,
         MatDialogModule, HttpClientModule, ReactiveFormsModule, MatProgressSpinnerModule],
      providers: [LoginService, LoggerService, MatDialog, BaseService, UserService,
        {provide: MatDialogRef, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('service should return a token', () => {
    const fb = new FormBuilder();
    const loginForm = fb.group({
      username: ['Gege'],
      password: ['Welcome1']
    });
    component.loginForm = loginForm;
    component.login();

    const authToken = SessionStorage.returnDataFromSession(SessionConstants.AUTH);
    console.log('authToken: ', authToken);
    expect(authToken).not.toBeNull();

  });
});
