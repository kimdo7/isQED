import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './component/landing/landing.component';
import { LandingHeaderComponent } from './component/landing/landing-header/landing-header.component';
import { LandingFooterComponent } from './component/landing/landing-footer/landing-footer.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingHomeComponent } from './component/landing/landing-body/landing-home/landing-home.component';
import { LandingEventComponent } from './component/landing/landing-body/landing-event/landing-event.component';
import { MaterialModule } from './materials';
import { FormsModule } from '@angular/forms';

/**
 * @Modal
 */
import { LogInModalComponent } from './component/landing/landing-modal/log-in-modal/log-in-modal.component';
import { ForgotPasswordModalComponent } from './component/landing/landing-modal/forgot-password-modal/forgot-password-modal.component';
import { ContactUsModalComponent } from './component/landing/landing-modal/contact-us-modal/contact-us-modal.component';
import { RegisterModalComponent } from './component/landing/landing-modal/register-modal/register-modal.component';
/**
 * @MDPRO
 */
import { MDBBootstrapModulesPro, MDBModalService, MDBSpinningPreloader } from 'ng-uikit-pro-standard';

/**
 * @Service
 */
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user/user.service';


/**
 * @landing body
 */

import { ContactUsComponent } from './component/landing/landing-body/landing-about/contact-us/contact-us.component';
import { CopyrightComponent } from './component/landing/landing-body/landing-about/copyright/copyright.component';
import { LandingAboutComponent } from './component/landing/landing-body/landing-about/landing-about.component';
import { LandingBannerComponent } from './component/landing/landing-body/landing-banner/landing-banner.component';


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

        /**
         * @Modal for login
         */
        LogInModalComponent,
        RegisterModalComponent,
        ForgotPasswordModalComponent,
        ContactUsModalComponent,
        ContactUsComponent,
        CopyrightComponent,
        LandingAboutComponent,
        LandingBannerComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModulesPro.forRoot(),
        NgbModule,
        NgbPaginationModule,
        MaterialModule,
        HttpClientModule,
        FormsModule
    ],
    entryComponents: [
        LogInModalComponent,
        RegisterModalComponent,
        ForgotPasswordModalComponent,
        ContactUsModalComponent
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [
        MDBSpinningPreloader,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
