import { Component, inject, input, linkedSignal, output } from '@angular/core';
import { Region } from '../../../interfaces/region.interfaces';
import { NgClass } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
function validateQueryParam(queryParam: string) {
  const validRegions: Record<string, Region> = {
    africa: 'Africa',
    americas: 'Americas',
    asia: 'Asia',
    europe: 'Europe',
    oceania: 'Oceania',
    antarctic: 'Antarctic',
  };

  return validRegions[queryParam] ?? 'Americas';
}

@Component({
  selector: 'country-nav-region',
  imports: [NgClass],
  templateUrl: './nav-region.component.html',
})
export class NavRegionComponent {
  regions = input.required<Region[]>();
  query = output<string>();
  activateRoute = inject(ActivatedRoute);
  queryParam = this.activateRoute.snapshot.queryParamMap.get('region') ?? '';
  selectedRegion = linkedSignal<string>(() =>
    validateQueryParam(this.queryParam)
  );

  selectRegion(region: string) {
    this.selectedRegion.set(region);
    this.query.emit(region);
  }
}
