import { Injectable, OnDestroy } from '@angular/core';
import {
  asyncScheduler,
  merge,
  MonoTypeOperatorFunction,
  Observable,
  of,
  Subject,
} from 'rxjs';
import {
  catchError,
  delay,
  filter,
  map,
  observeOn,
  publishReplay,
  refCount,
  scan,
  startWith,
  switchMap,
  switchMapTo,
  tap,
} from 'rxjs/operators';
import { Visitor } from '../interface/visitor.interface';
import { WeatherService } from './weather.service';

enum ActionType {
  load = 1,
  loaded,
}
export interface Action {
  type: ActionType;
  payload?: any;
}
export interface State<T> {
  loading: boolean;
  payload: T;
}

const defState: State<any> = {
  loading: true,
  payload: null,
};
function reducer(state: State<any>, action: Action): State<any> {
  switch (+action.type) {
    case ActionType.load:
      return { ...state, loading: true };
    case ActionType.loaded:
      return { payload: action.payload, loading: false };
    default:
      return { ...state };
  }
}

function typeOf<T extends Action>(
  type: ActionType
): MonoTypeOperatorFunction<T> {
  return filter((_) => type === _.type);
}
@Injectable()
export abstract class WeatherStore<T> implements Visitor<T>, OnDestroy {
  protected abstract readonly ws: WeatherService<T>;
  public readonly state$: Observable<State<T>>;
  private readonly actions$: Subject<Action>;
  private readonly load$: Observable<Action>;
  private readonly dispatcher$: Observable<Action>;

  get weatherData$() {
    return this.state$.pipe(map((s) => s.payload));
  }
  get loading$() {
    return this.state$.pipe(map((s) => s.loading));
  }
  constructor() {
    this.actions$ = new Subject();
    this.load$ = this.actions$.pipe(
      typeOf(ActionType.load),
      switchMap<Action, Observable<T>>((action) =>
        (<Observable<T>>action.payload).pipe(catchError((err) => of({} as T)))
      ),
      map((value): Action => ({ type: ActionType.loaded, payload: value }))
    );
    this.dispatcher$ = merge(this.actions$, this.load$);
    this.state$ = this.dispatcher$.pipe(
      startWith(defState),
      scan((state: any, action) => reducer(state, action)),
      publishReplay(1),
      refCount(),
      //   observeOn(asyncScheduler)
      delay(0)
    );
  }
  visitByName(name: string) {
    const req = this.ws.requestByName(name);
    this.dispatch({
      type: ActionType.load,
      payload: req,
    });
    return req;
  }
  visitByID(id: number) {
    const req = this.ws.requestByID(id);
    this.dispatch({ type: ActionType.load, payload: this.ws.requestByID(id) });
    return req;
  }
  visitByCoords(coords: { lat: number; lon: number }) {
    const req = this.ws.requestByCoords(coords);
    this.dispatch({
      type: ActionType.load,
      payload: req,
    });
    return req;
  }

  private dispatch(action: Action) {
    this.actions$.next(action);
  }
  ngOnDestroy() {
    this.actions$.complete();
  }
}
