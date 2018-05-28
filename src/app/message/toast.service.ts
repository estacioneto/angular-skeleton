import { Injectable } from '@angular/core';
import { MdcSnackbar } from '@angular-mdc/web';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toast: MdcSnackbar) {}

  show({
    message,
    action,
    ...config
  }: {
    message: string;
    action: string;
    align?: string;
  }) {
    config.align = config.align || 'start';
    return this.toast.show(message, action, config);
  }
}
