import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonServices } from '../../shared/services/common.service';
import { BaseComponent } from '../../shared/base/component/base.component';
import { ErrorMessage } from '../../commons/error-message';
import {PasswordComponent} from '../../shared/password/components/password.component';

@Component({
  selector: 'app-create-account',
  templateUrl: '../view/create-account.component.html',
  styleUrls: ['../view/create-account.component.css']
})
export class CreateAccountComponent extends BaseComponent implements OnInit {

  private provinces;
  private basicInfoForm: FormGroup;
  private employeeForm: FormGroup;
  private validateForm: FormGroup;
  private isUsernameValid: boolean;
  private isEmailValid: boolean;
  private spinnerType;

  @ViewChild(PasswordComponent) passwordComponent: PasswordComponent;

  constructor(private fb: FormBuilder, private commonService: CommonServices) {
    super();

    this.spinnerType = {
      usernameSpinner: false,
      emailSpinner: false
    };

    this.validateForm = this.fb.group({
      value: [''],
      validatorType: ['']
    });

    this.basicInfoForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstname: ['' , Validators.required],
      middlename: [''],
      lastname: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postalcode: ['', Validators.required]
    });

    this.employeeForm = this.fb.group({
      employeeID: [''],
      companyName: [''],
      title: [''],
      startDate: [''],
      workPhone: [''],
      mobilePhone: ['']
    });
   }

  ngOnInit() {
    this.loadListOfProvinces();
  }

  private goBack(stepper: MatStepper) {
    stepper.previous();
  }

  private validateInfo(validateType: number) {

    switch (validateType) {
      case 0:
        this.setValidatorForm(validateType, this.basicInfoForm.get('username').value);
        this.spinnerType.usernameSpinner = true;
        break;

      case 1:
        this.setValidatorForm(validateType, this.basicInfoForm.get('email').value);
          this.spinnerType.emailSpinner = true;
        break;
    }

    this.commonService.validateSingleInfo(this.validateForm.value).subscribe((resp: any) => {
      if (resp.status === 'Valid') {
        if (resp.data.isInfoExist) {
          this.clearTextfieldUiSpinner(validateType);
          this.setErrorMessageType(validateType);
        } else if (!resp.data.isInfoExist) {
          this.clearTextfieldUiSpinner(validateType);
          this.setFieldValidation(validateType);
          this.clearErrorMessage();
        }
      } else {
        this.clearTextfieldUiSpinner(validateType);
      }
    });
  }

  private clearForm() {
    this.basicInfoForm.reset();
    this.errorMessage = '';
  }

  private setFieldValidation(validateType: number) {
    switch (validateType) {
      case 0:
        this.isUsernameValid = true;
        break;

      case 1:
        this.isEmailValid = true;
        break;
    }
  }
  private setErrorMessageType(fieldErrorType: number) {
    switch (fieldErrorType) {
      case 0:
        this.isUsernameValid = false;
        this.errorMessage = ErrorMessage.USERNAME_TAKEN;
        break;

      case 1:
        this.isEmailValid = false;
        this.errorMessage = ErrorMessage.EMAIL_TAKEN;
        break;
    }
  }

  private clearTextfieldUiSpinner(spinnerType: number) {
    if (spinnerType === 0) {
      this.spinnerType.usernameSpinner = false;
    } else if (spinnerType === 1) {
      this.spinnerType.emailSpinner = false;
    }
  }

  private setValidatorForm(formType: number, value: string) {
    this.validateForm.get('validatorType').setValue(formType);
    this.validateForm.get('value').setValue(value);
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
