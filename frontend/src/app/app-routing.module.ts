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
import { ResetPasswordComponent } from './component/landing/landing-body/reset-password/reset-password.component';
import { RegisterModalComponent } from './component/landing/landing-modal/register-modal/register-modal.component';
import { LogInModalComponent } from './component/landing/landing-modal/log-in-modal/log-in-modal.component';
import { LandingCertificationComponent } from './component/landing/landing-body/landing-certification/landing-certification.component';

const routes: Routes = [
    {
        path: "", component: LandingComponent, children: [
            { path: "", component: LandingHomeComponent },
            { path: "signin", component: LandingHomeComponent },
            { path: "events", component: LandingEventComponent },
            { path: "certification", component: LandingCertificationComponent },
            {
                path: "about", component: LandingAboutComponent, children: [
                    { path: "steering-committee", component: SteeringCommitteeComponent },
                    { path: "contact-us", component: ContactUsComponent },
                    { path: "copyright", component: CopyrightComponent },
                    { path: "privacy_policy", component: PrivacyPolicyComponent }
                ]
            },
            { path: "activate/:login_id/:verify_code", component: ActivationComponent },
            
            { path: "reset-password/:login_id", component: ResetPasswordComponent },
            { path: "reset-password/:login_id/:temp_code", component: ResetPasswordComponent },
        ]
    },
    {
        path: "user", component: UserComponent
    },
    {
        path: "admin", component: UserComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
