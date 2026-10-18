import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
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
    inject(Title).setTitle('About · Szoop');
    inject(Meta).updateTag({
      name: 'description',
      content: 'Szoop is house help booked in minutes, built around comfort and hygiene.',
    });
  }
}
