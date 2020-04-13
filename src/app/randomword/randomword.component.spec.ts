import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomwordComponent } from './randomword.component';

describe('RandomwordComponent', () => {
  let component: RandomwordComponent;
  let fixture: ComponentFixture<RandomwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
