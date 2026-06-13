import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtUs } from './abt-us';

describe('AbtUs', () => {
  let component: AbtUs;
  let fixture: ComponentFixture<AbtUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbtUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbtUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
