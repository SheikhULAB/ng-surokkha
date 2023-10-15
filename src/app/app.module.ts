import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { CovidCardComponent } from './components/covid-card/covid-card.component';
import { MujibCardComponent } from './components/mujib-card/mujib-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationPassComponent } from './pages/registration-pass/registration-pass.component';
import { StatusComponent } from './pages/status/status.component';
import { CardComponent } from './pages/card/card.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { VerifyCertificateComponent } from './pages/verify-certificate/verify-certificate.component';
import { ManualComponent } from './pages/manual/manual.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClientModule, HttpClient} from "@angular/common/http";

import { DateDataService } from './date-picker.service';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    InfoCardComponent,
    CovidCardComponent,
    MujibCardComponent,
    NavbarComponent,
    FooterComponent,
    RegistrationComponent,
    HomeComponent,
    RegistrationPassComponent,
    StatusComponent,
    CardComponent,
    CertificateComponent,
    VerifyCertificateComponent,
    ManualComponent,
    FaqComponent,   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
      
    })
  ],
  providers: [DateDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
