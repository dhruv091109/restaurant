import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }
  // { path: '', component: LoginComponent },
  // { path: '', component: LoginComponent },
  // { path: '', component: LoginComponent },
  // { path: '', component: LoginComponent },
  // { path: '', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})


export class AppRoutingModule { }
