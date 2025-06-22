import { Component, input, signal } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './list.component.html',
})
export class ListComponent {
  countries = input.required<Country[]>();

  heads = signal<string[]>([
    '#',
    'Icon',
    'Flag',
    'Name',
    'Capital',
    'Population',
    'More Info',
  ]);

  errorMessage = input<string | unknown | null>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
}
