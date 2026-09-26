import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { FaqList } from '../../shared/faq-list/faq-list';
import {
  cities,
  faqs,
  services,
  site,
  standards,
  steps,
  trustPoints,
} from '../../core/config/site.content';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FaqList],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  readonly site = site;
  readonly services = services;
  readonly steps = steps;
  readonly cities = cities;
  readonly trustPoints = trustPoints;
  readonly standards = standards;
  readonly faqs = faqs.slice(0, 4);

  constructor() {
    inject(Title).setTitle('Oseedy — House help in 10 minutes');
    inject(Meta).updateTag({
      name: 'description',
      content:
        'Book trained house help with Oseedy. Obsessed with comfort and hygiene. Cleaning, laundry, dishes, and more.',
    });
  }
}
