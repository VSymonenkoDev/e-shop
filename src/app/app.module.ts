import {environment} from '../environments/environment';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {RouterModule} from '@angular/router';
import {CustomFormsModule} from 'ng2-validation';

import {AppComponent} from './app.component';
import {LoginComponent} from './core/components/login/login.component';
import {AdminAuthGuard} from './admin/services/admin-auth-guard.service';
import {SharedModule} from 'shared/shared.module';
import {AdminModule} from './admin/admin.module';
import {ShoppingModule} from './shopping/shopping.module';
import {CoreModule} from './core/core.module';
import {ProductsComponent} from './shopping/products/products.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    SharedModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    CustomFormsModule,
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
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
