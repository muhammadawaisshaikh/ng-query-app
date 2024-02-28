import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../../types/responce.type';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  endpoint: string = 'https://api.github.com';

  constructor(
    private http: HttpClient
  ) { }

  getRepos() {
    return this.http.get<Response>(`${this.endpoint}/repos/tanstack/query`);
  }
}
