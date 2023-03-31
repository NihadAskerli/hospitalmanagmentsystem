import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsjsComponent } from './asjs.component';

describe('AsjsComponent', () => {
  let component: AsjsComponent;
  let fixture: ComponentFixture<AsjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
