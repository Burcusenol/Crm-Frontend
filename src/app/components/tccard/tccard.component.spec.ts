import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TccardComponent } from './tccard.component';

describe('TccardComponent', () => {
  let component: TccardComponent;
  let fixture: ComponentFixture<TccardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TccardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TccardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
