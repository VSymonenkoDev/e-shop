import {NgModule} from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import {BootstrapNavbarComponent} from './components/bootstrap-navbar/bootstrap-navbar.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
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
