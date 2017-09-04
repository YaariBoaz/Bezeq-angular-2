import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { HttpModule }              from '@angular/http';
import { RouterModule }            from '@angular/router';
import { MaterialModule }          from '@angular/material';

import { MainNavbarComponent }     from './main-navbar/main-navbar.component';
import { SecondNavbarComponent }   from './second-navbar/second-navbar.component';
import { AdditionNavbarComponent } from './addition-navbar/addition-navbar.component';
import { LogoComponent }           from './logo/logo.component';
import { MenuComponent }           from './menu/menu.component';
import { FooterComponent }         from './footer/footer.component';

@NgModule({
  declarations: [
    MainNavbarComponent,
    SecondNavbarComponent,
    AdditionNavbarComponent,
    LogoComponent,
    MenuComponent,
    FooterComponent
  ],
  exports: [
    MainNavbarComponent,
    SecondNavbarComponent,
    AdditionNavbarComponent,
    LogoComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class UIModule { }
