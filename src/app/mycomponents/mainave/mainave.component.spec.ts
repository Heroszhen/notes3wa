import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainaveComponent } from './mainave.component';

describe('MainaveComponent', () => {
  let component: MainaveComponent;
  let fixture: ComponentFixture<MainaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
