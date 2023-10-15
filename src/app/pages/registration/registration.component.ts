import { Component } from '@angular/core';
import { DateDataService } from '../../date-picker.service'; // Import your date-data service

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
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

  registrationForm: any; // Define your registration form here

  submitForm() {
    // Handle form submission here
    // You can access the selected date values using this.selectedDay, this.selectedMonth, and this.selectedYear
    // For example: console.log('Selected Day:', this.selectedDay);
    // You can also access form values using this.registrationForm
    // console.log(this.registrationForm);
  }
}
