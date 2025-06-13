import { Component, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  searchValueEvent = output<string>();
  onSearch = (value: string): void => {
    this.searchValueEvent.emit(value);
  };
}
