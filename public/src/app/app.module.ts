import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import { MaterialModule } from './materials';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/body/home/home.component';
import { AboutComponent } from './component/body/about/about.component';
import { SteeringCommiteeComponent } from './component/body/about/steering-commitee/steering-commitee.component';
import { ContactIsqedComponent } from './component/body/about/contact-isqed/contact-isqed.component';
import { ImagesForYouComponent } from './component/body/about/images-for-you/images-for-you.component';
import { PrivacyPolicyComponent } from './component/body/about/privacy-policy/privacy-policy.component';
import { ConferencesComponent } from './component/body/conferences/conferences.component';
import { AboutHomeComponent } from './component/body/about/about-home/about-home.component';
import { ConferencesHomeComponent } from './component/body/conferences/conferences-home/conferences-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    SteeringCommiteeComponent,
    ContactIsqedComponent,
    ImagesForYouComponent,
    PrivacyPolicyComponent,
    ConferencesComponent,
    AboutHomeComponent,
    ConferencesHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
