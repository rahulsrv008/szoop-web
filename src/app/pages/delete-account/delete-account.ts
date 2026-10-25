import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { site } from '../../core/config/site.content';
import { SeoService } from '../../core/seo/seo.service';
import { environment } from '../../../environments/environment';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-delete-account',
  imports: [RouterLink],
  templateUrl: './delete-account.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteAccount {
  readonly site = site;
  readonly status = signal<FormStatus>('idle');
  readonly errorText = signal('');

  constructor() {
    inject(SeoService).setPage({
      title: 'Delete your Szoop account | Szoop - A lifestyle brand',
      description:
        'Request deletion of your Szoop customer account and personal data for Szoop - A lifestyle brand on Google Play and iOS devices.',
      path: '/delete-account',
    });
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    if (this.status() === 'sending') return;

    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const mobile = String(data.get('mobile') ?? '').replace(/\D/g, '').slice(-10);
    const email = String(data.get('email') ?? '').trim();
    const note = String(data.get('note') ?? '').trim();

    if (mobile.length !== 10) {
      this.status.set('error');
      this.errorText.set('Enter the 10-digit mobile number on your Szoop account.');
      return;
    }

    this.status.set('sending');
    this.errorText.set('');

    const payload = { mobile, ...(name ? { name } : {}), ...(email ? { email } : {}), ...(note ? { note } : {}) };
    const posted = await this.postRequest(payload);
    if (posted) {
      this.status.set('sent');
      form.reset();
      return;
    }

    this.openMailFallback(payload);
    this.status.set('sent');
  }

  private async postRequest(payload: Record<string, string>) {
    const base = environment.apiUrl.replace(/\/$/, '');
    try {
      const res = await fetch(`${base}/customer/account-deletion`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  private openMailFallback(payload: { mobile: string; name?: string; email?: string; note?: string }) {
    const subject = encodeURIComponent('Szoop account deletion request');
    const body = encodeURIComponent(
      [
        'Please delete my Szoop customer account (Szoop - A lifestyle brand).',
        '',
        `Name: ${payload.name || '—'}`,
        `Mobile: ${payload.mobile}`,
        `Email: ${payload.email || '—'}`,
        payload.note ? `Note: ${payload.note}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
    );
    window.location.href = `mailto:${this.site.supportEmail}?subject=${subject}&body=${body}`;
  }
}
