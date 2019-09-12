import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BisComponent } from './bis.component';

describe('BisComponent', () => {
  let component: BisComponent;
  let fixture: ComponentFixture<BisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
