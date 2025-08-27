import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedLayouts } from './logged-layouts';

describe('LoggedLayouts', () => {
  let component: LoggedLayouts;
  let fixture: ComponentFixture<LoggedLayouts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggedLayouts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedLayouts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
