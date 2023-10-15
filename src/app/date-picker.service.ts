// date-data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateDataService {
  getDays() {
    return Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  }

  getMonths() {
    return [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  }

  getYears() {
    return Array.from({ length: 14 }, (_, i) => (1990 + i).toString());
  }
}
