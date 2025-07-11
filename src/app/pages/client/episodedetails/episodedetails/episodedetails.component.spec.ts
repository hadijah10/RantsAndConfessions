import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodedetailsComponent } from './episodedetails.component';

describe('EpisodedetailsComponent', () => {
  let component: EpisodedetailsComponent;
  let fixture: ComponentFixture<EpisodedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodedetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
