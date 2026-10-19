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
      title: 'About Szoop | Quick Home Cleaning and House Help',
      description:
        'Meet Szoop, the home services app for quick cleaning, laundry, dishes, and everyday house help with a focus on comfort and hygiene.',
      path: '/about',
    });
  }
}
