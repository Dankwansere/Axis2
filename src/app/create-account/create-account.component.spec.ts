import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountComponent } from './components/create-account.component';
import { CreateAccountModule } from './create-account.module';
import { BaseService } from '../shared/services/base.service';
import { HttpClientModule } from '@angular/common/http';
import { LoggerService } from '../shared/services/logger.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


describe('CreateAccountComponent', () => {
  let component: CreateAccountComponent;
  let fixture: ComponentFixture<CreateAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [CreateAccountModule, HttpClientModule, BrowserAnimationsModule],
      providers: [BaseService, LoggerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should intiliaze basic form with all controls', () => {
    expect(component.basicInfoForm.contains('username')).toBeTruthy();
    expect(component.basicInfoForm.contains('email')).toBeTruthy();
    expect(component.basicInfoForm.contains('gender')).toBeTruthy();
    expect(component.basicInfoForm.contains('firstname')).toBeTruthy();
    expect(component.basicInfoForm.contains('middlename')).toBeTruthy();
    expect(component.basicInfoForm.contains('lastname')).toBeTruthy();
    expect(component.basicInfoForm.contains('city')).toBeTruthy();
    expect(component.basicInfoForm.contains('province')).toBeTruthy();
    expect(component.basicInfoForm.contains('postalcode')).toBeTruthy();
    expect(component.basicInfoForm.contains('password')).toBeTruthy();
  });

  it('should make email field required', () => {
    const control = component.basicInfoForm.get('username');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make gender field required', () => {
    const control = component.basicInfoForm.get('gender');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make firstname field required', () => {
    const control = component.basicInfoForm.get('firstname');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });


  it('should make lastname field required', () => {
    const control = component.basicInfoForm.get('lastname');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make city field required', () => {
    const control = component.basicInfoForm.get('city');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });


  it('should make province field required', () => {
    const control = component.basicInfoForm.get('province');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make postalcode field required', () => {
    const control = component.basicInfoForm.get('postalcode');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

});
