import { Location } from '@angular/common';
import { Component, inject, input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  countryCode = input<string>();

  location = inject(Location);

  goBack() {
    this.location.back();
  }
}
