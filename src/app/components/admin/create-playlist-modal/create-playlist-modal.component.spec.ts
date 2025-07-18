import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlaylistModalComponent } from './create-playlist-modal.component';

describe('CreatePlaylistModalComponent', () => {
  let component: CreatePlaylistModalComponent;
  let fixture: ComponentFixture<CreatePlaylistModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePlaylistModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlaylistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
