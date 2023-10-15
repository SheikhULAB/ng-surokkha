import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationPassComponent } from './pages/registration-pass/registration-pass.component';
import { StatusComponent } from './pages/status/status.component';
import { CardComponent } from './pages/card/card.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { VerifyCertificateComponent } from './pages/verify-certificate/verify-certificate.component';
import { ManualComponent } from './pages/manual/manual.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'registration-pass',
    component: RegistrationPassComponent
  },
  {
    path: 'status',
    component: StatusComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'certificate',
    component: CertificateComponent
  },
  {
    path: 'verify-certificate',
    component: VerifyCertificateComponent
  },
  {
    path: 'manual',
    component: ManualComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
