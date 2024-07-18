import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbUiLibComponent } from './sb-ui-lib.component';

describe('SbUiLibComponent', () => {
  let component: SbUiLibComponent;
  let fixture: ComponentFixture<SbUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbUiLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
