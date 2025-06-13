import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationLink } from '../../interfaces/nav';
import { NavLinksService } from '../../services/nav-links.service';

@Component({
  selector: 'country-top-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './top-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopMenuComponent {
  navService = inject(NavLinksService);
  navigationLinks = signal<NavigationLink[]>(this.navService.navLinks);
}
