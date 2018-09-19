import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {BootstrapNavbarComponent} from './components/bootstrap-navbar/bootstrap-navbar.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  declarations: [
    BootstrapNavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  exports: [
    BootstrapNavbarComponent
  ]
})
export class CoreModule { }
