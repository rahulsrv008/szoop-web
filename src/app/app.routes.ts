import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'book',
    loadComponent: () => import('./pages/book/book').then((m) => m.Book),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'cities',
    loadComponent: () => import('./pages/cities/cities').then((m) => m.Cities),
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq').then((m) => m.Faq),
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/legal/legal').then((m) => m.Legal),
    data: { page: 'privacy' },
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./pages/legal/legal').then((m) => m.Legal),
    data: { page: 'privacy' },
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/legal/legal').then((m) => m.Legal),
    data: { page: 'terms' },
  },
  {
    path: 'refunds',
    loadComponent: () => import('./pages/legal/legal').then((m) => m.Legal),
    data: { page: 'refunds' },
  },
  {
    path: 'delete-account',
    loadComponent: () =>
      import('./pages/delete-account/delete-account').then((m) => m.DeleteAccount),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
