import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowaboutComponent } from './showabout.component';

describe('ShowaboutComponent', () => {
  let component: ShowaboutComponent;
  let fixture: ComponentFixture<ShowaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowaboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
