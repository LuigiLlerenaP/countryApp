import { Component, inject, signal } from '@angular/core';
import { Table } from '../../interfaces/table';
import { ListComponent } from '../../components/list/list.component';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { Country } from '../../interfaces/country.interface';
import { NavRegionComponent } from './nav-region/nav-region.component';
import { Region } from '../../interfaces/region.interfaces';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-region-page',
  imports: [ListComponent, TitleComponent, NavRegionComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  countryService = inject(CountryService);
  countries = signal<Country[]>([]);

  router = inject(Router);

  query = signal<string>('');

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);
      this.router.navigate(['/country/by-region'], {
        queryParams: {
          query: params.query,
        },
      });
      return this.countryService.searchByRegion(params.query);
    },
  });
}
