import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { API_URL } from '../tokens/injection-tokens';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = inject(API_URL);
  const url = req.url.startsWith('http') ? req.url : `${baseUrl}${req.url}`;
  return next(req.clone({ url }));
};
