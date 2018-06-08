import { NgRedux } from '@angular-redux/store';
import {
  NgReduxTestingModule,
  MockNgRedux,
} from '@angular-redux/store/testing';
import { TestBed } from '@angular/core/testing';
import { StoreModule } from './store.module';
import IAppState from './model/index';

describe('StoreModule', () => {
  let storeModule: StoreModule;
  let ngRedux: NgRedux<IAppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgReduxTestingModule],
    });

    MockNgRedux.reset();
    ngRedux = TestBed.get(NgRedux);
    storeModule = new StoreModule(ngRedux);
  });

  it('should create an instance', () => {
    expect(storeModule).toBeTruthy();
  });
});
