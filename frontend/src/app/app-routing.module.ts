import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { LandingHomeComponent } from './component/landing/landing-body/landing-home/landing-home.component';
import { LandingEventComponent } from './component/landing/landing-body/landing-event/landing-event.component';
import { ContactUsComponent } from './component/landing/landing-body/landing-about/contact-us/contact-us.component';
import { LandingAboutComponent } from './component/landing/landing-body/landing-about/landing-about.component';
import { CopyrightComponent } from './component/landing/landing-body/landing-about/copyright/copyright.component';
import { PrivacyPolicyComponent } from './component/landing/landing-body/landing-about/privacy-policy/privacy-policy.component';

const routes: Routes = [
    {
        path: "", component: LandingComponent, children: [
            { path: "", component: LandingHomeComponent },
            {
                path: "about", component: LandingAboutComponent, children: [

                    { path: "events", component: LandingEventComponent },
                    { path: "contact-us", component: ContactUsComponent },
                    { path: "copyright", component: CopyrightComponent },
                    { path: "privacy_policy", component:  PrivacyPolicyComponent}
                ]
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
