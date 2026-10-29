import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo/seo.service';
import { site, standards } from '../../core/config/site.content';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly site = site;
  readonly standards = standards;

  constructor() {
    inject(SeoService).setPage({
      title: 'About Szoop | On-Demand Home Cleaning & House Help App',
      description:
        'Szoop is an on-demand house help app for home cleaning, bathroom cleaning, laundry, salon at home, and a home cook — verified experts at your door in minutes.',
      path: '/about',
    });
  }
}
