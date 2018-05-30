import { map as observableMap } from 'rxjs/operators';
import { merge, Subscription, Observable } from 'rxjs';
import objectMap from 'lodash/map';

/**
 * Given an object containing observables as values, returns an observable triggered in any data. The returned
 * observable data will be an object mapping the observable key to it's value.
 * @example
 * ```typescript
 * buildMerge({
 *    a: interval(1000).pipe(take(1)),
 *    b: interval(2000).pipe(take(2)),
 *  }).subscribe(console.log); // first: { a: 0 }, second: {a: 0, b: 0}, final: {a: 0, b: 1}
 * ```
 *
 * @param   {Object}     observables Observables object.
 * @returns {Observable} Final observable with data mapped.
 */
export function buildMerge(observables: {
  [key: string]: Subscription | Observable<any>;
}) {
  const fullData = {};
  return merge(
    ...objectMap(observables, (observable, key) =>
      observable.pipe(observableMap(data => ({ [key]: data })))
    )
  ).pipe(observableMap(data => Object.assign(fullData, data)));
}
