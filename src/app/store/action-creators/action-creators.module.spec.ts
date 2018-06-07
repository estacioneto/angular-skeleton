import { ActionCreatorsModule } from './action-creators.module';

describe('ActionCreatorsModule', () => {
  let actionCreatorsModule: ActionCreatorsModule;

  beforeEach(() => {
    actionCreatorsModule = new ActionCreatorsModule();
  });

  it('should create an instance', () => {
    expect(actionCreatorsModule).toBeTruthy();
  });
});
