import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {LoginComponent} from './login/components/login.component';
import { SessionStorage } from './shared/security/session-storage';
import { Constants } from './commons/constants';
import { UserManagement } from './shared/security/user-management';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'axis';
  userID: string;
  constructor(public dialog: MatDialog) {

  }



  loginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
    });
  }

  logout() {
    UserManagement.invalidateUser();
  }

  isUserOnline(): boolean {
    const userObj = JSON.parse(SessionStorage.returnDataFromSession(Constants.USER_SESSION_KEY));

    if (userObj) {
      this.userID = userObj.username;
      return true;
    } else {
      return false;
    }
  }
}
