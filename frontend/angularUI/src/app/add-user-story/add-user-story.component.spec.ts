import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserStoryComponent } from './add-user-story.component';

describe('AddUserStoryComponent', () => {
  let component: AddUserStoryComponent;
  let fixture: ComponentFixture<AddUserStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserStoryComponent]
    });
    fixture = TestBed.createComponent(AddUserStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
