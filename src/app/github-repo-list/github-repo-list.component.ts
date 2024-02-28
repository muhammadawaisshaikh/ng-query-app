import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental';
import { lastValueFrom } from 'rxjs';
import { ReposService } from '../services/repos/repos.service';

@Component({
  selector: 'app-github-repo-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AngularQueryDevtools],
  templateUrl: './github-repo-list.component.html',
  styleUrl: './github-repo-list.component.scss'
})
export class GithubRepoListComponent{
  
  reposService = inject(ReposService);

  query = injectQuery(() => ({
    queryKey: ['repoData'],
    queryFn: () =>
      lastValueFrom(
        this.reposService.getRepos()
      ),
  }))
}