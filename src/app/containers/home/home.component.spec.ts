import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an array of years to display', () => {
    expect(component.years.length).toEqual(component.maxYear - component.minYear + 1);
  });

  it('should should render a list of available years', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.championship-years')).not.toBeNull();
    expect(compiled.querySelectorAll('.championship-years__year').length).toEqual(
      component.maxYear - component.minYear + 1
    );
    expect(compiled.querySelectorAll('.championship-years__year')[0].innerHTML).toEqual(component.minYear.toString());
  });
});
