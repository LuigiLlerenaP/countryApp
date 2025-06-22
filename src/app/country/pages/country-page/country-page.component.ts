import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { CountryInformationComponent } from './country-information/country-information.component';
import { ShearingComponent } from './country-shearing/country-shearing.component';

@Component({
  selector: 'app-country-page',
  imports: [NotFoundComponent, CountryInformationComponent, ShearingComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {
  countryService = inject(CountryService);
  countryCode = inject(ActivatedRoute).snapshot.params['code'];

  countryResource = rxResource({
    params: () => ({ code: this.countryCode }),
    stream: ({ params }) => this.countryService.searchByAlphaCode(params.code),
  });
}
