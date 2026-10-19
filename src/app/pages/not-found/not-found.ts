import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo/seo.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {
  constructor() {
    inject(SeoService).setNotFound();
  }
}
