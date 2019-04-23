import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { LandingHomeComponent } from './component/landing/landing-body/landing-home/landing-home.component';
import { LandingEventComponent } from './component/landing/landing-body/landing-event/landing-event.component';
import { ContactUsComponent } from './component/landing/landing-body/landing-about/contact-us/contact-us.component';
import { LandingAboutComponent } from './component/landing/landing-body/landing-about/landing-about.component';
import { CopyrightComponent } from './component/landing/landing-body/landing-about/copyright/copyright.component';
import { PrivacyPolicyComponent } from './component/landing/landing-body/landing-about/privacy-policy/privacy-policy.component';
import { SteeringCommitteeComponent } from './component/landing/landing-body/landing-about/steering-committee/steering-committee.component';
import { UserComponent } from './component/user/user.component';
import { ActivationComponent } from './component/landing/landing-body/activation/activation.component';
import { ResestPasswordComponent } from './component/landing/landing-body/resest-password/resest-password.component';

const routes: Routes = [
    {
        path: "", component: LandingComponent, children: [
            { path: "", component: LandingHomeComponent },
            { path: "events", component: LandingEventComponent },
            {
                path: "about", component: LandingAboutComponent, children: [
                    { path: "steering-committee", component: SteeringCommitteeComponent },
                    { path: "contact-us", component: ContactUsComponent },
                    { path: "copyright", component: CopyrightComponent },
                    { path: "privacy_policy", component: PrivacyPolicyComponent }
                ]
            },
            { path: "activate/:login_id/:verify_code", component: ActivationComponent },
            { path: "reset-password/:login_id", component: ResestPasswordComponent }
        ]
    },
    {
        path: "user", component: UserComponent
    },
    {
        path: "admin", component: UserComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
