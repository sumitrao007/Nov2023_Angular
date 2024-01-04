import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbultpipeComponent } from './inbultpipe.component';

describe('InbultpipeComponent', () => {
  let component: InbultpipeComponent;
  let fixture: ComponentFixture<InbultpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InbultpipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InbultpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
