import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FeatureModule } from './feature/feature.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FeatureModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
