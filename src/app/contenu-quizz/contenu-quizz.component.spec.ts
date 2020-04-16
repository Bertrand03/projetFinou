import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuQuizzComponent } from './contenu-quizz.component';

describe('ContenuQuizzComponent', () => {
  let component: ContenuQuizzComponent;
  let fixture: ComponentFixture<ContenuQuizzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenuQuizzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenuQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
