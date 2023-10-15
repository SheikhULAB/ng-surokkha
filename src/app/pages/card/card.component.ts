import { Component } from '@angular/core';
import { DateDataService } from '../../date-picker.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  selectedDay: string = '';
  selectedMonth: string = '';
  selectedYear: string = '';

  days: string[];
  months: string[];
  years: string[];

  constructor(private dateDataService: DateDataService) {
    this.days = this.dateDataService.getDays();
    this.months = this.dateDataService.getMonths();
    this.years = this.dateDataService.getYears();
  }
}
