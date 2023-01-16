import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteteamsComponent } from './deleteteams.component';

describe('DeleteteamsComponent', () => {
  let component: DeleteteamsComponent;
  let fixture: ComponentFixture<DeleteteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteteamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
