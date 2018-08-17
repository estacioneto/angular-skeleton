import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toast: MatSnackBar) {}

  show({
    message,
    action,
    ...config
  }: {
    message: string;
    action: string;
    direction?: 'ltr' | 'rtl';
  }) {
    config.direction = config.direction || 'ltr';
    return this.toast.open(message, action, config);
  }
}
