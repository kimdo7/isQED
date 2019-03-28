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
import { PwaService } from './service/pwa/pwa.service';
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
import { RegisterationComponent } from './component/landing/body/registeration/registeration.component';
import { LandingComponent } from './component/landing/landing.component';
import { AdministratorDashboardComponent } from './component/administrator/administrator-dashboard/administrator-dashboard.component';
import { SigninComponent } from './component/landing/body/user/signin/signin.component';
import { SignupComponent } from './component/landing/body/user/signup/signup.component';
import { SearchComponent } from './component/landing/header/search/search.component';
import { BannerComponent } from './component/landing/body/banner/banner.component';
import { LearningComponent } from './component/learning/learning.component';
import { SignInDefaultComponent } from './component/landing/body/user/signin/sign-in-default/sign-in-default.component';
import { SignInValidationComponent } from './component/landing/body/user/signin/sign-in-validation/sign-in-validation.component';
import { ForgotPasswordComponent } from './component/landing/body/user/signin/forgot-password/forgot-password.component';
import { LearningDashboardComponent } from './component/learning/learning-dashboard/learning-dashboard.component';
import { LearningCourseComponent } from './component/learning/learning-course/learning-course.component';
import { UserService } from './service/user/user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
        RegisterationComponent,
        LandingComponent,
        BannerComponent,
        AdministratorDashboardComponent,
        SigninComponent,
        SignupComponent,
        LearningComponent,
        SignInDefaultComponent,
        SignInValidationComponent,
        ForgotPasswordComponent,
        LearningDashboardComponent,
        LearningCourseComponent,
    ],
    imports: [
        NgbModule,
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
    providers: [UserService, PwaService],
    bootstrap: [AppComponent],
    entryComponents: [ ],
})
export class AppModule { }
