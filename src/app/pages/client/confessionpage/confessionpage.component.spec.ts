import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfessionpageComponent } from './confessionpage.component';

describe('ConfessionpageComponent', () => {
  let component: ConfessionpageComponent;
  let fixture: ComponentFixture<ConfessionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfessionpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfessionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
