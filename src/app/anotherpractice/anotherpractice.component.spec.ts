import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherpracticeComponent } from './anotherpractice.component';

describe('AnotherpracticeComponent', () => {
  let component: AnotherpracticeComponent;
  let fixture: ComponentFixture<AnotherpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherpracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
