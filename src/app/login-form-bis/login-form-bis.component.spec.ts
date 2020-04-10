import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormBisComponent } from './login-form-bis.component';

describe('LoginFormBisComponent', () => {
  let component: LoginFormBisComponent;
  let fixture: ComponentFixture<LoginFormBisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormBisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
