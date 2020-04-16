import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TexteQuizzComponent } from './texte-quizz.component';

describe('TexteQuizzComponent', () => {
  let component: TexteQuizzComponent;
  let fixture: ComponentFixture<TexteQuizzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexteQuizzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TexteQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
