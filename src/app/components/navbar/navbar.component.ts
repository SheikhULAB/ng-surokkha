import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // This is an array
})

export class NavbarComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'bn']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();

    // Check if browserLang is undefined or not valid, then use 'en' as a fallback
    translate.use(browserLang && browserLang.match(/en|bn/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    // Your initialization code here
  }
}
