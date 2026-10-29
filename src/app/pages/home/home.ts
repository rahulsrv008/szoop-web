import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  OnDestroy,
  signal,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo/seo.service';
import { FaqList } from '../../shared/faq-list/faq-list';
import {
  cities,
  faqs,
  flowSteps,
  heroStats,
  pressLogos,
  services,
  site,
  steps,
  testimonials,
  trustPoints,
} from '../../core/config/site.content';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FaqList, NgTemplateOutlet],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements AfterViewInit, OnDestroy {
  readonly site = site;
  readonly services = services;
  readonly steps = steps;
  readonly cities = cities;
  readonly trustPoints = trustPoints;
  readonly faqs = faqs.slice(0, 4);
  readonly heroStats = heroStats;
  readonly testimonials = testimonials;
  readonly pressLogos = pressLogos;
  readonly flowSteps = flowSteps;
  readonly flow = signal(1);
  readonly frame = computed(() => [this.flow()]);
  readonly flowHeld = signal(false);
  readonly phoneTilt = signal('rotateX(0deg) rotateY(0deg)');
  readonly liveBeats = [
    { kicker: 'Step 01', line: 'Enter your number' },
    { kicker: 'Right now', line: 'Noida, Sector 70' },
    { kicker: 'This visit', line: 'From ₹399' },
    { kicker: 'Checkout', line: 'Today, 4:00 PM' },
    { kicker: 'On the way', line: '8 minutes away' },
    { kicker: 'Afterward', line: 'Rate the visit' },
  ];

  private readonly host = inject(ElementRef<HTMLElement>);
  private flowTimer = 0;
  private flowPaused = false;

  constructor() {
    inject(SeoService).setPage({
      title: 'Szoop | House Help & Home Cleaning App in 10 Min',
      description:
        'Book house help and home cleaning in 10 minutes with Szoop. Bathroom cleaning, kitchen, dishes, laundry, salon at home, and a home cook in Bengaluru, Mumbai, Delhi NCR, Hyderabad, Pune, and Chennai.',
      path: '/',
    });
  }

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    const targets = root.querySelectorAll('.reveal');
    this.flowTimer = window.setInterval(() => {
      if (this.flowPaused) return;
      this.flow.update((index) => (index + 1) % this.flowSteps.length);
    }, 4200);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    );

    targets.forEach((el: Element) => observer.observe(el));
  }

  ngOnDestroy(): void {
    window.clearInterval(this.flowTimer);
  }

  selectFlow(index: number): void {
    this.flow.set(index);
  }

  pauseFlow(paused: boolean): void {
    this.flowPaused = paused;
    this.flowHeld.set(paused);
  }

  tiltPhone(event: MouseEvent): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    this.phoneTilt.set(
      `rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg)`,
    );
  }

  releasePhone(): void {
    this.pauseFlow(false);
    this.phoneTilt.set('rotateX(0deg) rotateY(0deg)');
  }
}
