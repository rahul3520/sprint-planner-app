import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserStoryComponent } from './view-user-story.component';

describe('ViewUserStoryComponent', () => {
  let component: ViewUserStoryComponent;
  let fixture: ComponentFixture<ViewUserStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUserStoryComponent]
    });
    fixture = TestBed.createComponent(ViewUserStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
