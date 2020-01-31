import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PdfComponent} from './pdf/pdf.component';
import {RegistrationV2Component} from './registration-v2/registration-v2.component';
import {AuthComponent} from './auth/auth.component';
import {LikeRsComponent} from './like-rs/like-rs.component';


const routes: Routes = [
  {path: '', component: LikeRsComponent},
  {path: 'pdf', component: PdfComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
