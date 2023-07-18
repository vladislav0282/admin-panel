import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDeteilComponent } from './contacts-deteil.component';

describe('ContactsDeteilComponent', () => {
  let component: ContactsDeteilComponent;
  let fixture: ComponentFixture<ContactsDeteilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsDeteilComponent]
    });
    fixture = TestBed.createComponent(ContactsDeteilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
