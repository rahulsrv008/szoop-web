import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { faqs, site } from '../../core/config/site.content';
import { FaqList } from '../../shared/faq-list/faq-list';

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
    inject(Title).setTitle('FAQ · Oseedy');
    inject(Meta).updateTag({
      name: 'description',
      content: 'Answers about booking Oseedy house help, experts, and cities.',
    });
  }
}
