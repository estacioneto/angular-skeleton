import { AppStoreModule } from './store.module';

describe('StoreModule', () => {
  let storeModule: AppStoreModule;

  beforeEach(() => {
    storeModule = new AppStoreModule();
  });

  it('should create an instance', () => {
    expect(storeModule).toBeTruthy();
  });
});
