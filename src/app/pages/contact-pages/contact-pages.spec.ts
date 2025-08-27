import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPages } from './contact-pages';

describe('ContactPages', () => {
  let component: ContactPages;
  let fixture: ComponentFixture<ContactPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
