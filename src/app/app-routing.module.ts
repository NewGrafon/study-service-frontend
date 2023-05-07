import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { AccountRegistrationComponent } from "./pages/account-registration/account-registration.component";
import { AccountLoginComponent } from "./pages/account-login/account-login.component";
import { AccountProfileComponent } from "./pages/account-profile/account-profile.component";
import {ModerationComponent} from "./pages/moderation/moderation.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registration', component: AccountRegistrationComponent },
  { path: 'login', component: AccountLoginComponent },
  { path: 'profile', component: AccountProfileComponent },
  { path: 'moderation', component: ModerationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
