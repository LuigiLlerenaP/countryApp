import { Component, input, signal } from '@angular/core';
import { Table } from '../../interfaces/table';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './list.component.html',
})
export class ListComponent {
  content = input.required<Table[]>();

  heads = signal<string[]>([
    '#',
    'Icon',
    'Flag',
    'Name',
    'Capital',
    'Population',
    'Actions',
  ]);
}
