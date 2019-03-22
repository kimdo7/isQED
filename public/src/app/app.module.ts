import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Calendar
 */
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './service/http.service';
import { PwaService } from './service/pwa.service';
import { HomeComponent } from './component/landing/body/home/home.component';
import { FooterComponent } from './component/landing/footer/footer.component';
import { HeaderComponent } from './component/landing/header/header.component';
import { AboutComponent } from './component/landing/body/about/about.component';
import { SteeringCommiteeComponent } from './component/landing/body/about/steering-commitee/steering-commitee.component';
import { ContactIsqedComponent } from './component/landing/body/about/contact-isqed/contact-isqed.component';
import { ImagesForYouComponent } from './component/landing/body/about/images-for-you/images-for-you.component';
import { PrivacyPolicyComponent } from './component/landing/body/about/privacy-policy/privacy-policy.component';
import { ConferencesComponent } from './component/landing/body/conferences/conferences.component';
import { AboutHomeComponent } from './component/landing/body/about/about-home/about-home.component';
import { ConferencesHomeComponent } from './component/landing/body/conferences/conferences-home/conferences-home.component';
import { IsqedEventsComponent } from './component/landing/body/conferences/isqed-events/isqed-events.component';
import { IsqedCalendarComponent } from './component/landing/body/conferences/isqed-calendar/isqed-calendar.component';
import { AffiliateEventsComponent } from './component/landing/body/conferences/affiliate-events/affiliate-events.component';
import { SponsorshipOpportunitiesComponent } from './component/landing/body/conferences/sponsorship-opportunities/sponsorship-opportunities.component';
import { AwardsComponent } from './component/landing/body/awards/awards.component';
import { AwardsHomeComponent } from './component/landing/body/awards/awards-home/awards-home.component';
import { TrainingComponent } from './component/landing/body/training/training.component';
import { TrainingHomeComponent } from './component/landing/body/training/training-home/training-home.component';
import { TrainingCalendarComponent } from './component/landing/body/training/training-calendar/training-calendar.component';
import { RegistrationFormComponent } from './component/landing/body/training/registration-form/registration-form.component';
import { MembershipComponent } from './component/landing/body/membership/membership.component';
import { SearchComponent } from './component/landing/search/search.component';
import { LoginComponent } from './component/landing/body/login/login.component';
import { RegisterationComponent } from './component/landing/body/registeration/registeration.component';
import { LandingComponent } from './component/landing/landing.component';
import { BannerComponent } from './component/landing/banner/banner.component';


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
        MembershipComponent,
        SearchComponent,
        LoginComponent,
        RegisterationComponent,
        LandingComponent,
        BannerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [HttpService, PwaService],
    bootstrap: [AppComponent]
})
export class AppModule { }
