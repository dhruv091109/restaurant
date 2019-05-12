import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NglModule, NGL_ICON_CONFIG, NglIconConfig} from 'ng-lightning';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    NgbModule,
    NglModule
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
