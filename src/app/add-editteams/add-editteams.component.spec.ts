import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditteamsComponent } from './add-editteams.component';

describe('AddEditteamsComponent', () => {
  let component: AddEditteamsComponent;
  let fixture: ComponentFixture<AddEditteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditteamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
