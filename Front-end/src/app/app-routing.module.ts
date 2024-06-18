import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { OrganizationSettingsComponent } from './organization-settings/organization-settings.component';
import { RegistrationComponent } from "./registration/registration.component";
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { RoleGuard } from './role-guard.service';
import { HomeComponent } from './home/home.component';
import { BusinessInfoComponent } from './business-info/business-info.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SponsorPageComponent } from './sponsor-page/sponsor-page.component';
import { EmailsComponent } from './emails/emails.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard]},
  { path:'organization-settings', component:OrganizationSettingsComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'home', component: HomeComponent,  canActivate: [AuthGuard]},
  { path: 'business-info', component: BusinessInfoComponent,  canActivate: [AuthGuard]},
  { path: 'create-organization', component: CreateOrganizationComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRoles: [] }},
  { path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
  { path: 'sponsor-page', component:SponsorPageComponent, canActivate: [AuthGuard]},
  { path: 'emails', component:EmailsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
