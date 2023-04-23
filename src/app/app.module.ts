import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountRegistrationComponent } from './pages/account-registration/account-registration.component';
import { AccountLoginComponent } from './pages/account-login/account-login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountProfileComponent } from './pages/account-profile/account-profile.component';
import { TeacherCardComponent } from './components/teacher-card/teacher-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountRegistrationComponent,
    AccountLoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AccountProfileComponent,
    TeacherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
