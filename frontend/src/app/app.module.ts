import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LandingComponent } from './component/landing/landing.component';
import { LandingHeaderComponent } from './component/landing/landing-header/landing-header.component';
import { LandingFooterComponent } from './component/landing/landing-footer/landing-footer.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingHomeComponent } from './component/landing/landing-body/landing-home/landing-home.component';
import { LandingEventComponent } from './component/landing/landing-body/landing-event/landing-event.component';
import { MaterialModule } from './materials';
import { LogInComponent } from './component/landing/landing-modal/log-in/log-in.component';
// import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

@NgModule({
    declarations: [
        AppComponent,

        /**
         * Landing Main Component
         */
        LandingComponent,

        /**
         * Landing Header and Footer
         */
        LandingHeaderComponent,
        LandingFooterComponent,

        /**
         * Landing body
         * @Home
         */
        LandingHomeComponent,

        LandingEventComponent,

        LogInComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
        NgbModule,
        NgbPaginationModule,
        MaterialModule,
    ],
    entryComponents: [LogInComponent],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
