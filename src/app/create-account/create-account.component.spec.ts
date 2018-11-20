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
});
