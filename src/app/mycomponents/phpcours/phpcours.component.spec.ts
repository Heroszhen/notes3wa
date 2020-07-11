import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpcoursComponent } from './phpcours.component';

describe('PhpcoursComponent', () => {
  let component: PhpcoursComponent;
  let fixture: ComponentFixture<PhpcoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpcoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
