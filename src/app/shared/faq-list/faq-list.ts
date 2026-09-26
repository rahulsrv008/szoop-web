import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { FaqItem } from '../../core/models/content.models';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqList {
  readonly items = input.required<FaqItem[]>();
  readonly openIndex = signal(0);

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? -1 : index));
  }
}
