import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonServices } from '../../shared/services/common.service';
import { BaseComponent } from '../../shared/base/component/base.component';
import { ErrorMessage } from '../../commons/error-message';

@Component({
  selector: 'app-create-account',
  templateUrl: '../view/create-account.component.html',
  styleUrls: ['../view/create-account.component.css']
})
export class CreateAccountComponent extends BaseComponent implements OnInit {

  private provinces;
  private basicInfoForm: FormGroup;
  private isUsernameValid: boolean;

  constructor(private fb: FormBuilder, private commonService: CommonServices) {
    super();
    this.basicInfoForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      firstname: ['' , Validators.required],
      middlename: [''],
      lastname: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postalcode: ['', Validators.required]

    });
   }

  ngOnInit() {
    this.loadListOfProvinces();
  }

  private goBack(stepper: MatStepper) {
    stepper.previous();
  }

  private validateUsername() {
    this.commonService.validateUsername(this.basicInfoForm.get('username').value).subscribe((resp: any) => {
      if (resp.status === 'Valid') {
        if (resp.data.isUsernameExist) {
          this.isUsernameValid = false;
          this.errorMessage = ErrorMessage.USERNAME_TAKEN;
        } else if (!resp.data.isUsernameExist) {
          this.isUsernameValid = true;
          this.clearErrorMessage();
        }
      }
    });
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
