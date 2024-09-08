import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomermoviesviewComponent } from './customermoviesview.component';

describe('CustomermoviesviewComponent', () => {
  let component: CustomermoviesviewComponent;
  let fixture: ComponentFixture<CustomermoviesviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomermoviesviewComponent]
    });
    fixture = TestBed.createComponent(CustomermoviesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
