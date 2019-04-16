import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { LandingHomeComponent } from './component/landing/landing-body/landing-home/landing-home.component';
import { LandingEventComponent } from './component/landing/landing-body/landing-event/landing-event.component';
import { ContactUsComponent } from './component/landing/landing-body/landing-about/contact-us/contact-us.component';

const routes: Routes = [
    {
        path: "", component: LandingComponent, children: [
            { path: "", component: LandingHomeComponent },
            { path: "events", component:  LandingEventComponent},
            { path: "contact-us", component:  ContactUsComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
