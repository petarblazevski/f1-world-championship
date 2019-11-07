import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';

import { ResultsComponent } from './results.component';
import { IsWorldChampionPipe } from '../../pipes/is-world-champion.pipe';
import * as fromStore from '../../store';
import * as championshipSelectors from '../../store/championship.selectors';
import * as championshipActions from '../../store/championship.actions';
import { ActivatedRouteStub } from '../../../testing/activated-route-stub';
import { LoadingComponent, ResultsListComponent } from '../../components';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  let store: MockStore<{ championship: { loading: boolean } }>;
  const initialState = { championship: { loading: false } };
  let activatedRoute: ActivatedRouteStub;

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ResultsComponent, IsWorldChampionPipe, LoadingComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRoute
        },
        provideMockStore({
          initialState,
          selectors: [{ selector: championshipSelectors.selectChampionshipLoading, value: false }]
        })
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(async () => {
    activatedRoute.setSnapshotParamMap({ year: 2008 });
    fixture = TestBed.createComponent(ResultsComponent);
    store = TestBed.get<Store<fromStore.State>>(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch championshipActions.load action', () => {
    const action = championshipActions.load({ year: 2008 });

    fixture.detectChanges();
    component.ngOnInit();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch championshipActions.clear action when the component is destroyed', () => {
    const action = championshipActions.clear();

    fixture.detectChanges();
    component.ngOnDestroy();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
