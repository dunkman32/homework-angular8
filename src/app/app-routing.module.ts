import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PdfComponent} from './pdf/pdf.component';
import {RegistrationV2Component} from './registration-v2/registration-v2.component';
import {AuthComponent} from './auth/auth.component';
import {LikeRsComponent} from './like-rs/like-rs.component';
import { AnotherRegistrationComponent } from './another-registration/another-registration.component';


const routes: Routes = [
  {path: '', component: AnotherRegistrationComponent},
  {path: 'registration', component: RegistrationV2Component},
  {path: 'another-registration', component: AnotherRegistrationComponent},
  {path: 'pdf', component: PdfComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'like-rs', component: LikeRsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
