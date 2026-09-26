import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { site } from '../../core/config/site.content';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly site = site;

  constructor() {
    inject(Title).setTitle('About · Oseedy');
    inject(Meta).updateTag({
      name: 'description',
      content: 'Oseedy is house help booked in minutes, built around comfort and hygiene.',
    });
  }
}
