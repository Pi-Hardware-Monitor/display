import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapointListComponent } from './datapoint-list.component';

describe('DatapointListComponent', () => {
  let component: DatapointListComponent;
  let fixture: ComponentFixture<DatapointListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatapointListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapointListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
