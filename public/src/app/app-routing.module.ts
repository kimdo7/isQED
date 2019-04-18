import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/landing/body/home/home.component';
import { AboutComponent } from './component/landing/body/about/about.component';
import { AboutHomeComponent } from './component/landing/body/about/about-home/about-home.component';
import { SteeringCommiteeComponent } from './component/landing/body/about/steering-commitee/steering-commitee.component';
import { ContactIsqedComponent } from './component/landing/body/about/contact-isqed/contact-isqed.component';
import { ImagesForYouComponent } from './component/landing/body/about/images-for-you/images-for-you.component';
import { PrivacyPolicyComponent } from './component/landing/body/about/privacy-policy/privacy-policy.component';
import { ConferencesComponent } from './component/landing/body/events/conferences.component';
import { ConferencesHomeComponent } from './component/landing/body/events/conferences-home/conferences-home.component';
import { IsqedEventsComponent } from './component/landing/body/events/isqed-events/isqed-events.component';
import { IsqedCalendarComponent } from './component/landing/body/events/isqed-calendar/isqed-calendar.component';
import { AffiliateEventsComponent } from './component/landing/body/events/affiliate-events/affiliate-events.component';
import { SponsorshipOpportunitiesComponent } from './component/landing/body/events/sponsorship-opportunities/sponsorship-opportunities.component';
import { AwardsComponent } from './component/landing/body/publications/awards.component';
import { AwardsHomeComponent } from './component/landing/body/publications/awards-home/awards-home.component';
import { TrainingComponent } from './component/landing/body/training/training.component';
import { TrainingHomeComponent } from './component/landing/body/training/training-home/training-home.component';
import { TrainingCalendarComponent } from './component/landing/body/training/training-calendar/training-calendar.component';
import { RegistrationFormComponent } from './component/landing/body/training/registration-form/registration-form.component';
import { LandingComponent } from './component/landing/landing.component';
import { SigninComponent } from './component/landing/body/user/signin/signin.component';
import { SignupComponent } from './component/landing/body/user/signup/signup.component';
import { LearningComponent } from './component/learning/learning.component';
import { SignInDefaultComponent } from './component/landing/body/user/signin/sign-in-default/sign-in-default.component';
import { SignInValidationComponent } from './component/landing/body/user/signin/sign-in-validation/sign-in-validation.component';
import { ForgotPasswordComponent } from './component/landing/body/user/signin/forgot-password/forgot-password.component';
import { LearningDashboardComponent } from './component/learning/learning-dashboard/learning-dashboard.component';
import { LearningCourseComponent } from './component/learning/learning-course/learning-course.component';
import { ResetPasswordComponent } from './component/landing/body/user/signin/reset-password/reset-password.component';
import { CertificationComponent } from './component/landing/body/certification/certification.component';
import { CopyRightComponent } from './component/landing/body/about/copy-right/copy-right.component';

const routes: Routes = [
    {
        path: "", component: LandingComponent, children: [
            { path: "", component: HomeComponent },
            { path: "certification", component: CertificationComponent },
            {
                path: "about", component: AboutComponent, children: [
                    { path: "", component: AboutHomeComponent },
                    { path: "steering_commitee", component: SteeringCommiteeComponent },
                    { path: "contact", component: ContactIsqedComponent },
                    { path: "image_for_you", component: ImagesForYouComponent },
                    { path: "privacy_policy", component: PrivacyPolicyComponent },
                    { path: "copy_right", component: CopyRightComponent },
                ]
            },
            {
                path: "events", component: ConferencesComponent, children: [
                    { path: "", component: ConferencesHomeComponent },
                    { path: "isqed_events", component: IsqedEventsComponent },
                    { path: "isqed_calendar", component: IsqedCalendarComponent },
                    { path: "affiliate_events", component: AffiliateEventsComponent },
                    { path: "sponsorship_opportunities", component: SponsorshipOpportunitiesComponent },
                ]
            },
            {
                path: "awards", component: AwardsComponent, children: [
                    { path: "", component: AwardsHomeComponent }
                ]
            },
            {
                path: "training", component: TrainingComponent, children: [
                    { path: "", component: TrainingHomeComponent },
                    { path: "calendar", component: TrainingCalendarComponent },
                    { path: "registration_form", component: RegistrationFormComponent },
                ]
            },

            { path: "signup", component: SignupComponent },
            {
                path: "signin", component: SigninComponent, children: [
                    { path: "", component: SignInDefaultComponent },
                    { path: "validation/:id", component: SignInValidationComponent },
                    { path: "forgot_password", component: ForgotPasswordComponent },
                    { path: "reset_password/email/:email", component: ResetPasswordComponent }, // Change after forgot password by typing url themselves
                    { path: "reset_password/email/:email/:tempPasscode", component: ResetPasswordComponent }, // Change after forgot password by clicking link in email
                    { path: "reset_password/id/:login_id", component: ResetPasswordComponent } // Change password when logged in
                ]
            },
        ]

    },

    {
        path: 'learning', component: LearningComponent, children: [
            { path: "", component: LearningDashboardComponent },
            { path: "course", component: LearningCourseComponent }
        ]
    },
    // { path: 'administrator', component: AdministratorDashboardComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
