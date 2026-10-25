import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { site } from '../../core/config/site.content';

@Component({
  selector: 'app-book',
  imports: [RouterLink],
  templateUrl: './book.html',
  styleUrl: './book.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Book {
  readonly site = site;
  private readonly route = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly path = toSignal(
    this.route.queryParamMap.pipe(map((params) => params.get('path') ?? '/')),
    { initialValue: '/' },
  );

  readonly appHref = computed(() => {
    const base = (this.site.bookAppUrl || '').replace(/\/$/, '');
    const raw = this.path() || '/';
    const next = raw.startsWith('/') && !raw.startsWith('//') ? raw : '/';
    return base ? `${base}${next}` : '';
  });

  readonly appSrc = computed((): SafeResourceUrl | '' => {
    const href = this.appHref();
    return href ? this.sanitizer.bypassSecurityTrustResourceUrl(href) : '';
  });
}
