import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { legalPages } from '../../core/config/site.content';
import { LegalPage } from '../../core/models/content.models';
import { SeoService } from '../../core/seo/seo.service';

@Component({
  selector: 'app-legal',
  imports: [RouterLink],
  templateUrl: './legal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Legal {
  readonly page: LegalPage;

  constructor() {
    const slug = inject(ActivatedRoute).snapshot.data['page'] as string;
    this.page = legalPages[slug];
    inject(SeoService).setPage({
      title: `${this.page.title} | Szoop`,
      description: this.page.paragraphs[0],
      path: `/${this.page.slug}`,
    });
  }
}
