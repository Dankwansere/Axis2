import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonServices } from '../../shared/services/common.service';
import { BaseComponent } from '../../shared/base/component/base.component';
import { ErrorMessage } from '../../commons/error-message';
import {PasswordComponent} from '../../shared/password/components/password.component';
import { CreateAccountService } from '../create-account.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { Constants, NumberConst } from 'src/app/commons/constants';

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
  private gender;


  @ViewChild(PasswordComponent) passwordComponent: PasswordComponent;

  constructor(private fb: FormBuilder, private commonService: CommonServices,
     private createAccountService: CreateAccountService, private logService: LoggerService) {
    super();
   }

  ngOnInit() {
    this.initializeBasicInforForm();

    this.initializeEmployeeForm();

    this.initializeGenderList();

    this.setSpinnerProperties();

    this.initializeValidateForm();

    this.loadListOfProvinces();
  }


  private setSpinnerProperties() {
    this.spinnerType = {
      usernameSpinner: false,
      emailSpinner: false
    };
  }

  private initializeGenderList() {
    this.gender = [
      { value: 'F', viewValue: 'Female' },
      { value: 'M', viewValue: 'Male' }
    ];
  }

  private initializeValidateForm() {
    this.validateForm = this.fb.group({
      value: [Constants.EMPTY],
      validatorType: [Constants.EMPTY]
    });
  }

  private initializeEmployeeForm() {
    this.employeeForm = this.fb.group({
      employeeID: [Constants.EMPTY],
      companyName: [Constants.EMPTY],
      title: [Constants.EMPTY],
      startDate: [Constants.EMPTY],
      workPhone: [Constants.EMPTY],
      mobilePhone: [Constants.EMPTY]
    });
  }

  private initializeBasicInforForm() {
    this.basicInfoForm = this.fb.group({
      username: [Constants.EMPTY, Validators.required],
      email: [Constants.EMPTY, [Validators.required, Validators.email]],
      gender: [Constants.EMPTY, Validators.required],
      firstname: [Constants.EMPTY, Validators.required],
      middlename: [Constants.EMPTY],
      lastname: [Constants.EMPTY, Validators.required],
      city: [Constants.EMPTY, Validators.required],
      province: [Constants.EMPTY, Validators.required],
      postalcode: [Constants.EMPTY, Validators.required],
      password: []
    });
  }

  private goBack(stepper: MatStepper) {
    stepper.previous();
  }


  private submit(): void {
    const isPasswordValid = this.passwordComponent.comparePswdAndConfirmPswd();
    const passwordVal = this.passwordComponent.getPasswordFieldVal();

    if (!isPasswordValid) {
      this.errorMessage = ErrorMessage.PASSWORD_DO_NOT_MATCH;
    } else if (isPasswordValid) {
      this.clearErrorMessage();
      this.basicInfoForm.get(Constants.PASSWORD).setValue(passwordVal);
      this.basicInfoForm.addControl('employee', this.employeeForm);


      this.createAccountService.createUser(this.basicInfoForm.value).subscribe((resp: any) => {
      } );

    } else {
      this.errorMessage = ErrorMessage.UNEXPECTED_ERROR;
    }

  }

  /**
   * sends info to server to validate
   * @param validateType type of validation 1 = validate username, 2 =  validate email
   */
  private validateInfo(validateType: number): void {

    switch (validateType) {
      case NumberConst.ZER0:
        this.setValidatorForm(validateType, this.basicInfoForm.get(Constants.USERNAME).value);
        this.spinnerType.usernameSpinner = true;
        break;

      case NumberConst.ONE:
        this.setValidatorForm(validateType, this.basicInfoForm.get(Constants.EMAIL).value);
          this.spinnerType.emailSpinner = true;
        break;
    }

    this.commonService.validateSingleInfo(this.validateForm.value).subscribe((resp: any) => {
      if (resp.body.status === Constants.VALID) {
        if (resp.body.data.isInfoExist) {
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

  /**
   * @param validateType validator type
   */
  private setFieldValidation(validateType: number): void {
    switch (validateType) {
      case NumberConst.ZER0:
        this.isUsernameValid = true;
        break;

      case NumberConst.ONE:
        this.isEmailValid = true;
        break;
    }
  }

  /**
   * Sets error message
   * @param fieldErrorType Error type message to display 1 = username error, 2 = email error
   */
  private setErrorMessageType(fieldErrorType: number): void {
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

  /**
   * clears and reset form and error message
   * @param form form to clear/reset
   */
  private clearForm(form: FormGroup): void {
    form.reset();
    this.errorMessage = Constants.EMPTY;
  }

  /**
   * removes spinner from UI
   * @param spinnerType refernce spinner
   */
  private clearTextfieldUiSpinner(spinnerType: number): void {
    if (spinnerType === 0) {
      this.spinnerType.usernameSpinner = false;
    } else if (spinnerType === 1) {
      this.spinnerType.emailSpinner = false;
    }
  }

  /**
   * Initializes validation form
   * @param formType type of validation 1 = validate username, 2 =  validate email
   * @param value value to be validated
   */
  private setValidatorForm(formType: number, value: string): void {
    this.validateForm.get('validatorType').setValue(formType);
    this.validateForm.get('value').setValue(value);
  }

  private loadListOfProvinces(): void {

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
