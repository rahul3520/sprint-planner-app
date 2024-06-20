import { TestBed } from '@angular/core/testing';

import { SprintPlanService } from './sprint-plan.service';

describe('SprintPlanService', () => {
  let service: SprintPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprintPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
