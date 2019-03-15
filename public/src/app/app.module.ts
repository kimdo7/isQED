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
import { IsqedEventsComponent } from './component/body/conferences/isqed-events/isqed-events.component';
import { IsqedCalendarComponent } from './component/body/conferences/isqed-calendar/isqed-calendar.component';
import { AffiliateEventsComponent } from './component/body/conferences/affiliate-events/affiliate-events.component';
import { SponsorshipOpportunitiesComponent } from './component/body/conferences/sponsorship-opportunities/sponsorship-opportunities.component';
import { AwardsComponent } from './component/body/awards/awards.component';
import { AwardsHomeComponent } from './component/body/awards/awards-home/awards-home.component';
import { TrainingComponent } from './component/body/training/training.component';
import { TrainingHomeComponent } from './component/body/training/training-home/training-home.component';
import { TrainingCalendarComponent } from './component/body/training/training-calendar/training-calendar.component';
import { RegistrationFormComponent } from './component/body/training/registration-form/registration-form.component';
import { MembershipComponent } from './component/body/membership/membership.component';

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
    ConferencesHomeComponent,
    IsqedEventsComponent,
    IsqedCalendarComponent,
    AffiliateEventsComponent,
    SponsorshipOpportunitiesComponent,
    AwardsComponent,
    AwardsHomeComponent,
    TrainingComponent,
    TrainingHomeComponent,
    TrainingCalendarComponent,
    RegistrationFormComponent,
    MembershipComponent
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
