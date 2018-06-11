import { inject, TestBed } from '@angular/core/testing';

import { AppMaterialModule } from './../material.module';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppMaterialModule],
      providers: [ToastService],
    });
  });

  it('should be created', inject([ToastService], (service: ToastService) => {
    expect(service).toBeTruthy();
  }));
});
