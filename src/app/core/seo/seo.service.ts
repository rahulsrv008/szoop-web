import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { site } from '../config/site.content';
import { FaqItem } from '../models/content.models';

export function faqJsonLd(items: FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export interface SeoPage {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  jsonLd?: Record<string, unknown>;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  setPage({ title, description, path, keywords, jsonLd }: SeoPage): void {
    const canonicalUrl = new URL(path, environment.siteUrl).href;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords || site.keywords });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    this.setJsonLd(jsonLd);
  }

  setNotFound(): void {
    this.title.setTitle('Page not found | Szoop');
    this.meta.updateTag({ name: 'robots', content: 'noindex, follow' });
    this.setJsonLd(undefined);
  }

  private setJsonLd(data: Record<string, unknown> | undefined): void {
    const existing = this.document.getElementById('page-jsonld');
    if (!data) {
      existing?.remove();
      return;
    }

    const script =
      existing instanceof HTMLScriptElement
        ? existing
        : this.document.createElement('script');
    script.id = 'page-jsonld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    if (!existing) {
      this.document.head.appendChild(script);
    }
  }
}
