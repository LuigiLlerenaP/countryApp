import {
  Component,
  inject,
  linkedSignal,
  resource,
  signal,
} from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { ListComponent } from '../../components/list/list.component';
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { Country } from '../../interfaces/country.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
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
      this.router.navigate(['/country/by-capital'], {
        queryParams: {
          query: params.query,
        },
      });
      return this.countryService.searchByCapital(params.query);
    },
  });

  // countryResource = resource({
  //   params: () => ({ query: this.query() }),
  //   loader: async ({ params }) => {
  //     if (!params.query) {
  //       return [];
  //     }

  //     return await firstValueFrom(
  //       this.countryService.searchByCapital(params.query)
  //     );
  //   },
  // });

  // isLoading = signal(false);
  // isError = signal<string | null>(null);

  // countries = signal<Country[]>([]);

  // searchResult(query: string) {
  //   if (this.isLoading()) {
  //     return;
  //   }
  //   this.isLoading.set(true);
  //   this.isError.set(null);

  //   this.countryService.searchByCapital(query).subscribe({
  //     next: (countries) => {
  //       this.isLoading.set(false);
  //       this.countries.set(countries);
  //     },
  //     error: (err) => {
  //       this.isLoading.set(false);
  //       this.countries.set([]);
  //       this.isError.set(err);
  //     },
  //   });
  // }
}
