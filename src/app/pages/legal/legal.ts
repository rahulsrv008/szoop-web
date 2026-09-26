import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { legalPages } from '../../core/config/site.content';
import { LegalPage } from '../../core/models/content.models';

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
    inject(Title).setTitle(`${this.page.title} · Oseedy`);
    inject(Meta).updateTag({
      name: 'description',
      content: this.page.paragraphs[0],
    });
  }
}
