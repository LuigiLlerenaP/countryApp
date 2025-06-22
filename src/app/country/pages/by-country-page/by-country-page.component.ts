import {
  Component,
  inject,
  linkedSignal,
  resource,
  signal,
} from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { ListComponent } from '../../components/list/list.component';
import { firstValueFrom, of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import countryRoutes from '../../country.routes';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-country',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryComponent {
  countryService = inject(CountryService);
  activateRoute = inject(ActivatedRoute);
  router = inject(Router);
  queryParam = this.activateRoute.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal<string>(() => this.queryParam);

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) {
        return of([]);
      }
      this.router.navigate(['/country/by-country'], {
        queryParams: {
          query: params.query,
        },
      });
      return this.countryService.searchByCountry(params.query);
    },
  });
}
