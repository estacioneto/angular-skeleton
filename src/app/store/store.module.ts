import { NgModule } from '@angular/core';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { environment } from '../../environments/environment';
import IAppState from './model';
import rootReducer from './reducers';

export function logger(reducer: ActionReducer<IAppState>): any {
  // default, no options
  return storeLogger()(reducer);
}

@NgModule({
  imports: [
    StoreModule.forRoot(rootReducer, {
      metaReducers: environment.production ? [] : [logger],
    }),
  ],
  declarations: [],
})
export class AppStoreModule {
  constructor() {}
}
