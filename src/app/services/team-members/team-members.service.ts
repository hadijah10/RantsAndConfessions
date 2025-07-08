import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITeamMember } from '../../model/teammembersdata.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {
  private url = `https://api.rantsnconfess.com/v1`
  constructor(private http: HttpClient) { }

  getTeamMembers(){
    return this.http.get<ITeamMember>(`${this.url}/team-members`).pipe()
  }
}
