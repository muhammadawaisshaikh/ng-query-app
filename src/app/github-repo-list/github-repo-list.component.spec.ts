import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoListComponent } from './github-repo-list.component';

describe('GithubRepoListComponent', () => {
  let component: GithubRepoListComponent;
  let fixture: ComponentFixture<GithubRepoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubRepoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GithubRepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
