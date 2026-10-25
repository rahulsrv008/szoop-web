import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { site } from '../../core/config/site.content';
import { SeoService } from '../../core/seo/seo.service';

@Component({
  selector: 'app-scan',
  imports: [RouterLink],
  templateUrl: './scan.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Scan {
  readonly site = site;
  readonly appUrl = (site.bookAppUrl || site.url).replace(/\/$/, '');
  readonly qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=360x360&margin=12&data=${encodeURIComponent(this.appUrl)}`;
  readonly isLocal = /^https?:\/\/(localhost|127\.0\.0\.1)/.test(this.appUrl);

  constructor() {
    inject(SeoService).setPage({
      title: 'Scan to open Szoop | Szoop - A lifestyle brand',
      description: 'Scan this QR code on your phone to open the Szoop customer app in your browser.',
      path: '/scan',
    });
  }
}
