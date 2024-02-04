/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CustomKeyPointComponent } from './custom-key-point.component';

describe('CustomKeyPointComponent', () => {
  let component: CustomKeyPointComponent;
  let fixture: ComponentFixture<CustomKeyPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomKeyPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomKeyPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
