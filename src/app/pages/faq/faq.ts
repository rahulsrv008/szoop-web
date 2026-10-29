import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { faqs, site } from '../../core/config/site.content';
import { FaqList } from '../../shared/faq-list/faq-list';
import { SeoService } from '../../core/seo/seo.service';

@Component({
  selector: 'app-faq',
  imports: [FaqList],
  templateUrl: './faq.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Faq {
  readonly faqs = faqs;
  readonly site = site;

  constructor() {
    inject(SeoService).setPage({
      title: 'House Help App FAQ | Cleaning, Salon & Booking | Szoop',
      description:
        'FAQ for the Szoop house help app: home cleaning, salon at home, home cook, maid service, cities, and how to book.',
      path: '/faq',
    });
  }
}
