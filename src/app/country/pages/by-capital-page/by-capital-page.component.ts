import { Component, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { ListComponent } from '../../components/list/list.component';
import { Table } from '../../interfaces/table';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  searchResult($event: string) {
    throw new Error('Method not implemented.');
  }
  values = signal<Table[]>([]);
}
