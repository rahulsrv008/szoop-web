import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../core/seo/seo.service';
import { cities } from '../../core/config/site.content';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cities {
  readonly cities = cities;

  constructor() {
    inject(SeoService).setPage({
      title: 'Szoop Cities | Home Cleaning and House Help Near You',
      description:
        'Find Szoop home cleaning and house help in Bengaluru, Mumbai, Delhi NCR, Gurugram, Noida, Hyderabad, Pune, and Chennai. Check your pin code in the app.',
      path: '/cities',
    });
  }
}
