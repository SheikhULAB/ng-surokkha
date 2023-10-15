import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { DateDataService } from '../../date-picker.service'; // Import your date-data service

@Component({
  selector: 'app-registration-pass',
  templateUrl: './registration-pass.component.html',
  styleUrls: ['./registration-pass.component.css']
})
export class RegistrationPassComponent {
  countries: any[] = [];
  selectedCountry: string = '-- Select Country --';

  ngOnInit(): void {
    // Make an Axios GET request to the Rest Countries API.
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        const data = response.data;
        // Map the API response to the format you want (e.g., value and label).
        this.countries = data.map((country: any) => ({
          value: country.name.common,
          label: country.name.common,
        }));
  
        // Sort the countries array by label (country name).
        this.countries.sort((a, b) => a.label.localeCompare(b.label));
      })
      .catch((error) => {
        console.error('Error fetching country data:', error);
      });
  }
  
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

  // Define any specific variables or methods for the RegistrationPassComponent if needed
}
