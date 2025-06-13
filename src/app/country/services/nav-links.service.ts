import { Injectable } from '@angular/core';
import { NavigationLink } from '../interfaces/nav';

@Injectable({
  providedIn: 'root',
})
export class NavLinksService {
  navLinks: NavigationLink[] = [
    {
      label: 'By Capital',
      routerLink: 'by-capital',
      icon: 'M3 21h18 M5 21V7l8-4v18 M19 21V10l-6-3 M9 9v.01 M9 12v.01 M9 15v.01 M13 9v.01 M13 12v.01 M13 15v.01',
    },
    {
      label: 'By Country',
      routerLink: 'by-country',
      icon: 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2 M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
    },
    {
      label: 'By Region',
      routerLink: 'by-region',
      icon: 'M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6z M9 3v18 M15 3v18 M3 9h18 M3 15h18',
    },
  ];
}
