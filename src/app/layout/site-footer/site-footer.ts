import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { cities, site } from '../../core/config/site.content';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  templateUrl: './site-footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  readonly site = site;
  readonly cities = cities.slice(0, 4);
  readonly year = new Date().getFullYear();
}
