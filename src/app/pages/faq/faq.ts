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
      title: 'Szoop FAQ | Home Cleaning App and Booking Help',
      description:
        'Get answers about booking Szoop home cleaning, available services, trusted experts, arrival times, and launch cities.',
      path: '/faq',
    });
  }
}
