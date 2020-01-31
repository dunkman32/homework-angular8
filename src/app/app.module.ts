import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PdfViewerModule} from 'ng2-pdf-viewer';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {FooterOfRegistrationComponent} from './registration/footer-of-registration/footer-of-registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AnotherRegistrationComponent} from './registration/another-registration/another-registration.component';
import {RegistrationV2Component} from './registration-v2/registration-v2.component';
import {PdfComponent} from './pdf/pdf.component';
import {ConfirmModalComponent} from './confirm-modal/confirm-modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MobileModalComponent} from './mobile-modal/mobile-modal.component';
import {EmailModalComponent} from './email-modal/email-modal.component';
import { AuthComponent } from './auth/auth.component';
import { AuthOptionsComponent } from './auth/auth-options/auth-options.component';
import { LikeRsComponent } from './like-rs/like-rs.component';
import { HeaderComponent } from './like-rs/header/header.component';
import { LeftBarComponent } from './like-rs/left-bar/left-bar.component';
import { CenterComponent } from './like-rs/center/center.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    FooterOfRegistrationComponent,
    AnotherRegistrationComponent,
    RegistrationV2Component,
    PdfComponent,
    ConfirmModalComponent,
    MobileModalComponent,
    EmailModalComponent,
    AuthComponent,
    AuthOptionsComponent,
    LikeRsComponent,
    HeaderComponent,
    LeftBarComponent,
    CenterComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
