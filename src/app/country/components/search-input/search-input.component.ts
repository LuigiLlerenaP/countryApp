import {
  Component,
  effect,
  input,
  linkedSignal,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  searchValueEvent = output<string>();

  initialValue = input<string>();

  inputValue = linkedSignal<string>(() => this.initialValue() ?? '');
  debounceTime = input<number>(600);

  onSearch = (value: string): void => {
    this.searchValueEvent.emit(value);
  };

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();
    const timeout = setTimeout(() => {
      this.searchValueEvent.emit(value);
    }, this.debounceTime());

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });

  placeholderInput = input.required<string>();
  titleSearch = input.required<string>();
  loading = input.required<boolean>();
}
