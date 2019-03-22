import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/landing/body/home/home.component';
import { AboutComponent } from './component/landing/body/about/about.component';
import { AboutHomeComponent } from './component/landing/body/about/about-home/about-home.component';
import { SteeringCommiteeComponent } from './component/landing/body/about/steering-commitee/steering-commitee.component';
import { ContactIsqedComponent } from './component/landing/body/about/contact-isqed/contact-isqed.component';
import { ImagesForYouComponent } from './component/landing/body/about/images-for-you/images-for-you.component';
import { PrivacyPolicyComponent } from './component/landing/body/about/privacy-policy/privacy-policy.component';
import { ConferencesComponent } from './component/landing/body/conferences/conferences.component';
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
import { LandingComponent } from './component/landing/landing.component';

const routes: Routes = [
    {
        path: "", component: LandingComponent, children: [
            { path: "", component: HomeComponent },
            {
                path: "about", component: AboutComponent, children: [
                    { path: "", component: AboutHomeComponent },
                    { path: "steering_commitee", component: SteeringCommiteeComponent },
                    { path: "contact", component: ContactIsqedComponent },
                    { path: "image_for_you", component: ImagesForYouComponent },
                    { path: "privacy_policy", component: PrivacyPolicyComponent },
                ]
            },
            {
                path: "conferences", component: ConferencesComponent, children: [
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

            { path: "membership", component: MembershipComponent }
        ]
    },



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
