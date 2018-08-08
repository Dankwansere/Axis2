import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: '../view/spinner.component.html',
  styleUrls: ['../view/spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  private color: string;
  private mode: string;
  private value: number;

  constructor() { }

  ngOnInit() {
    this.color = 'primary';
    this.mode = 'indeterminate';
    this.value = 50;
  }

}
