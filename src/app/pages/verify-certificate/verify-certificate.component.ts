import { Component } from '@angular/core';
import { DateDataService } from '../../date-picker.service'; // Import your date-data service

@Component({
  selector: 'app-verify-certificate',
  templateUrl: './verify-certificate.component.html',
  styleUrls: ['./verify-certificate.component.css']
})
export class VerifyCertificateComponent {
  selectedDay: string = ''; // Initialize selectedDay, selectedMonth, and selectedYear with the selected values
  selectedMonth: string = '';
  selectedYear: string = '';

  days: string[];
  months: string[];
  years: string[];

  constructor(private dateDataService: DateDataService) {
    // Use the dateDataService to get date-related data
    this.days = this.dateDataService.getDays();
    this.months = this.dateDataService.getMonths();
    this.years = this.dateDataService.getYears();
  }
}
