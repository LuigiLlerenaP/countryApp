import { Component, signal } from '@angular/core';
import { Table } from '../../interfaces/table';
import { ListComponent } from '../../components/list/list.component';
import { TitleComponent } from '../../../shared/components/title/title.component';

@Component({
  selector: 'app-by-region-page',
  imports: [ListComponent, TitleComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  values = signal<Table[]>([
    {
      Numero: '1',
      Icon: 'M5 13l4 4L19 7',
      Flag: 'https://flagcdn.com/w20/us.png',
      Name: 'United States',
      Capital: 'Washington, D.C.',
      Population: '331,893,745',
      Actions: 'View',
    },
    {
      Numero: '2',
      Icon: 'M5 13l4 4L19 7',
      Flag: 'https://flagcdn.com/w20/fr.png',
      Name: 'France',
      Capital: 'Paris',
      Population: '67,413,000',
      Actions: 'View',
    },
    {
      Numero: '3',
      Icon: 'M5 13l4 4L19 7',
      Flag: 'https://flagcdn.com/w20/jp.png',
      Name: 'Japan',
      Capital: 'Tokyo',
      Population: '125,960,000',
      Actions: 'View',
    },
    {
      Numero: '4',
      Icon: 'M5 13l4 4L19 7',
      Flag: 'https://flagcdn.com/w20/br.png',
      Name: 'Brazil',
      Capital: 'Brasília',
      Population: '213,993,437',
      Actions: 'View',
    },
    {
      Numero: '5',
      Icon: 'M5 13l4 4L19 7',
      Flag: 'https://flagcdn.com/w20/de.png',
      Name: 'Germany',
      Capital: 'Berlin',
      Population: '83,190,556',
      Actions: 'View',
    },
  ]);
}
