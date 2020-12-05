import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JscoursComponent } from './jscours.component';

describe('JscoursComponent', () => {
  let component: JscoursComponent;
  let fixture: ComponentFixture<JscoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JscoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JscoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
