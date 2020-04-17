import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzZeroComponent } from './quizz-zero.component';

describe('QuizzZeroComponent', () => {
  let component: QuizzZeroComponent;
  let fixture: ComponentFixture<QuizzZeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzZeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
