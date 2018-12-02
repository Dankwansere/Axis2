import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// feature modules
import {LoginModule} from './login/login.module';
import {CreateAccountModule} from './create-account/create-account.module';
import {SharedModule} from './shared/shared.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home.component';
// ng material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { RequestInterceptor } from './shared/interceptor/request-interceptor';
import { ProfileModule } from './profile/profile.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatDialogModule,
     LoginModule, ProfileModule, SharedModule, CreateAccountModule, HttpClientModule,
     RouterModule.forRoot(routing, { enableTracing: false })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
