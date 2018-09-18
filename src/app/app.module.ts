import {environment} from '../environments/environment';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import {DataTableModule} from 'angular5-data-table';

import {AppComponent} from './app.component';
import {BootstrapNavbarComponent} from './bootstrap-navbar/bootstrap-navbar.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AdminAuthGuard} from './admin/services/admin-auth-guard.service';
import {SharedModule} from 'shared/shared.module';
import {AdminModule} from "./admin/admin.module";
import {ShoppingModule} from "./shopping/shopping.module";

@NgModule({
  declarations: [
    AppComponent,
    BootstrapNavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    SharedModule,
    ShoppingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent}
    ])
  ],
  providers: [
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
