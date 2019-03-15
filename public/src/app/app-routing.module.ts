import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/body/home/home.component';
import { AboutComponent } from './component/body/about/about.component';
import { ConferencesComponent } from './component/body/conferences/conferences.component';
import { SteeringCommiteeComponent } from './component/body/about/steering-commitee/steering-commitee.component';
import { AboutHomeComponent } from './component/body/about/about-home/about-home.component';
import { ConferencesHomeComponent } from './component/body/conferences/conferences-home/conferences-home.component';
import { ContactIsqedComponent } from './component/body/about/contact-isqed/contact-isqed.component';
import { ImagesForYouComponent } from './component/body/about/images-for-you/images-for-you.component';
import { PrivacyPolicyComponent } from './component/body/about/privacy-policy/privacy-policy.component';
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

const routes: Routes = [
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


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
