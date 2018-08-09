import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-create-account',
  templateUrl: '../view/create-account.component.html',
  styleUrls: ['../view/create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  private provinces;
  constructor() { }

  ngOnInit() {
    this.loadListOfProvinces();
  }

  private goBack(stepper: MatStepper) {
    stepper.previous();
  }

  private loadListOfProvinces() {

    this.provinces = [
      {value: 'AB', viewValue: 'Alberta'},
      {value: 'BC', viewValue: 'British Columbia'},
      {value: 'MB', viewValue: 'Manitoba'},
      {value: 'NB', viewValue: 'New Brunswick'},
      {value: 'NL', viewValue: 'Newfoundland and Labrador'},
      {value: 'NT', viewValue: 'North west territories'},
      {value: 'NU', viewValue: 'Nunavut'},
      {value: 'ON', viewValue: 'Ontario'},
      {value: 'PE', viewValue: 'Prince Edward Island'},
      {value: 'QC', viewValue: 'Quebec'},
      {value: 'SK', viewValue: 'Saskatchewan'},
      {value: 'YK', viewValue: 'Yukon'}
    ];

  }

}
