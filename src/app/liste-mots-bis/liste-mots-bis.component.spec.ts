import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMotsBisComponent } from './liste-mots-bis.component';

describe('ListeMotsBisComponent', () => {
  let component: ListeMotsBisComponent;
  let fixture: ComponentFixture<ListeMotsBisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeMotsBisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMotsBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
