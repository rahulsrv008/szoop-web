import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { cities } from '../../core/config/site.content';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cities {
  readonly cities = cities;

  constructor() {
    inject(Title).setTitle('Cities · Szoop');
    inject(Meta).updateTag({
      name: 'description',
      content: 'Szoop is opening house-help bookings city by city across India.',
    });
  }
}
