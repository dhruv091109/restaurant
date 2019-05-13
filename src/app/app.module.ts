import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NglModule, NGL_ICON_CONFIG, NglIconConfig} from 'ng-lightning';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    NgbModule,
    NglModule,
    AppRoutingModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],

  providers: [
    {
      provide: NGL_ICON_CONFIG, 
      useValue: <NglIconConfig>{ svgPath: '/my/path' } 
    },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
