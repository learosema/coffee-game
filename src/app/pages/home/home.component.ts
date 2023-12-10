import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { ResourceTileComponent } from '../../components/resource-tile/resource-tile.component';
import { ActionCreatorProps, Store } from '@ngrx/store';
import { selectCycle, selectFacilities, selectResources } from '../../state/game/game.selectors';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { gameActions } from '../../state/game/game.actions';
import { FACILITY } from '../../models/facilities.model';
import { Subscription, interval } from 'rxjs';

export interface FacilityAction {action: any; title: string }


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ResourceTileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  store = inject(Store);

  resources$ = this.store.select(selectResources);

  facilities$ = this.store.select(selectFacilities);

  cycle$ = this.store.select(selectCycle);

  timer$ = interval(1000);

  private _sub: Subscription = new Subscription();

  ngOnInit(): void {
    this._sub.add(this.timer$.subscribe(() => {
      this.nextCycle();
    }));
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }


  nextCycle() {
    this.store.dispatch(gameActions.nextCycle());
  }

  work(facility: string) {
    this.store.dispatch(gameActions.work({facility}));
  }

  upgrade(facility: string) {
    this.store.dispatch(gameActions.upgradeFacility({facility}));
  }

  sellCoffee() {
    this.store.dispatch(gameActions.sellCoffee());
  }

}
