import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerationItemComponent } from './moderation-item.component';

describe('ModerationItemComponent', () => {
  let component: ModerationItemComponent;
  let fixture: ComponentFixture<ModerationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModerationItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModerationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
