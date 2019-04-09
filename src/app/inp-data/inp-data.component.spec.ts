import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpDataComponent } from './inp-data.component';

describe('InpDataComponent', () => {
  let component: InpDataComponent;
  let fixture: ComponentFixture<InpDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
