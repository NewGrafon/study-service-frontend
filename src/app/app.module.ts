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
import { IncludesEducatablePeoples, MenuComponent } from './components/menu/menu.component';
import { ModerationComponent } from './pages/moderation/moderation.component';
import { TeacherFormComponent } from './components/teacher-form/teacher-form.component';
import { PopupSystemComponent } from './components/popup-system/popup-system.component';
import { ModerationItemComponent } from './components/moderation-item/moderation-item.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AccountRegistrationComponent,
    AccountLoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AccountProfileComponent,
    TeacherCardComponent,
    MenuComponent,
    ModerationComponent,
    IncludesEducatablePeoples,
    TeacherFormComponent,
    PopupSystemComponent,
    ModerationItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
