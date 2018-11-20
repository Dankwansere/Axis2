import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: '../view/home.component.html',
  styleUrls: ['../view/home.component.css']
})
export class HomeComponent implements OnInit {
  private userOnlineStatus: boolean;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isUserOnline();
  }

  private isUserOnline(): boolean {
    const res =  this.userService.isUserLoggedIn();

    return res;
  }

  private getUserFullName(): string {
    return this.userService.getUserFullName();
  }

}
