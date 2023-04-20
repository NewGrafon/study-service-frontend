import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountRegistrationComponent } from "./pages/account-registration/account-registration.component";
import { AccountLoginComponent } from "./pages/account-login/account-login.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registration', component: AccountRegistrationComponent },
  { path: 'login', component: AccountLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
