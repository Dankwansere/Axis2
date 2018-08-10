import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: '../view/base.component.html',
  styleUrls: ['../view/base.component.css']
})
export class BaseComponent implements OnInit {

  protected isLoading: boolean;
  protected errorMessage;
  constructor() { }

  ngOnInit() {
  }

  protected clearErrorMessage(): void {
    this.errorMessage = '';
  }


}
