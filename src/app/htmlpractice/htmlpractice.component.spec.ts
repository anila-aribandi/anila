import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlpracticeComponent } from './htmlpractice.component';

describe('HtmlpracticeComponent', () => {
  let component: HtmlpracticeComponent;
  let fixture: ComponentFixture<HtmlpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlpracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
