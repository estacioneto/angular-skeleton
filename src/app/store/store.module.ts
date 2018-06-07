import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { createStore, applyMiddleware, Store } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import IAppState from './model/index';
import rootReducer from './reducers/index';
import { environment } from '../../environments/environment';

const middlewares = [promise(), thunk];

if (!environment.production) {
  middlewares.push(createLogger());
}

const middleware = applyMiddleware(...middlewares);

const store: Store<IAppState> = createStore(rootReducer, middleware);

@NgModule({
  imports: [NgReduxModule],
  declarations: [],
})
export class StoreModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
