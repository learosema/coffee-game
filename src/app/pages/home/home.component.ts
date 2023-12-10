import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';

import { ResourceTileComponent } from '../../components/resource-tile/resource-tile.component';
import { Store } from '@ngrx/store';
import { selectCycle, selectFacilities, selectResources } from '../../state/game/game.selectors';
import { CommonModule } from '@angular/common';
import { gameActions } from '../../state/game/game.actions';
import { FACILITY } from '../../models/facilities.model';
import { Observable, Subscription, combineLatest, concat, find, interval, last, map, of, switchMap, take } from 'rxjs';
import { RESOURCE } from '../../models/inventory.model';

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

  canWork(facility: string): Observable<boolean> {
    return combineLatest([this.resources$]).pipe(
      map(([inventory]) => {
        switch (facility) {
          case FACILITY.plant: return false;
          case FACILITY.roaster: return inventory[RESOURCE.bean] > 0;
          case FACILITY.grinder: return inventory[RESOURCE.roastedBean] > 0;
          case FACILITY.brewer: return inventory[RESOURCE.water] > 0 && inventory[RESOURCE.groundCoffee] > 0
        }
        return true;
      })
    );
  }

  canUpgrade(): Observable<boolean> {
    return combineLatest([this.resources$]).pipe(map(([inventory]) => {
      return inventory[RESOURCE.cash] > 100;
    }));
  }

  canSell(): Observable<boolean> {
    return combineLatest([this.resources$]).pipe(map(([inventory]) => {
      return inventory[RESOURCE.coffee] > 0;
    }));
  }

}
