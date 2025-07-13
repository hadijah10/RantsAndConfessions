import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreateTeamMemberPayload, ITeamMember, ITeamMemberCreateApiResponse,ITeamMemberDeleteApiResponse,ITeamMembersApiResponse,ITeamMemberUpdateApiResponse } from '../../../model/teammembersdata.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {
  private url = `https://api.rantsnconfess.com/v1`
  constructor(private http: HttpClient) { }

  getTeamMembers():Observable<ITeamMembersApiResponse>{
    return this.http.get<ITeamMembersApiResponse>(`${this.url}/team-members`).pipe()
  }

  //authentication is required.
  createTeamMember(data: ICreateTeamMemberPayload){
    return this.http.post<ITeamMemberCreateApiResponse>(`${this.url}/team-members`,data).pipe()
  }

  //authentication is required
  updateTeamMember(id:number,data:ICreateTeamMemberPayload){
    return this.http.put<ITeamMemberUpdateApiResponse>(`${this.url}/team-members/${id}`,data).pipe()
  }

  //authentication is required
  deleteTeamMember(id: number){
    return this.http.get<ITeamMemberDeleteApiResponse>(`${this.url}/team-members/${id}`).pipe()
  }

}
