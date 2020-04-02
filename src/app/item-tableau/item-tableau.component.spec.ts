import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTableauComponent } from './item-tableau.component';

describe('ItemTableauComponent', () => {
  let component: ItemTableauComponent;
  let fixture: ComponentFixture<ItemTableauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTableauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
