import { Injectable } from '@angular/core';
import { combineEpics } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import { map, catchError, switchMap } from 'rxjs/operators';

import { EpicsService } from '../../../store/types';

// import * as toppingsActions from '../actions/toppings.action';
// import * as fromServices from '../../services/toppings.service';

@Injectable()
export class ToppingsEpics implements EpicsService {
  getEpic() {
    return combineEpics();
  }
  //   constructor(private actions$: Actions, private toppingsService: fromServices.ToppingsService) {}
  //   @Effect()
  //   loadToppings$ = this.actions$.ofType(toppingsActions.LOAD_TOPPINGS).pipe(
  //     switchMap(() => {
  //       return this.toppingsService
  //         .getToppings()
  //         .pipe(
  //           map((toppings) => new toppingsActions.LoadToppingsSuccess(toppings)),
  //           catchError((error) => of(new toppingsActions.LoadToppingsFail(error)))
  //         );
  //     })
  //   );
}
