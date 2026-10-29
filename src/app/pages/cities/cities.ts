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
      title: 'Home Cleaning in Bangalore, Mumbai, Delhi, Noida | Szoop',
      description:
        'Book Szoop house help and home cleaning in Bengaluru, Mumbai, Delhi, Gurugram, Noida, Hyderabad, Pune, and Chennai. Maid service, bathroom cleaning, salon at home, and a home cook.',
      path: '/cities',
    });
  }
}
