import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreateTeamMemberPayload, ITeamMember, ITeamMemberCreateApiResponse,ITeamMemberDeleteApiResponse,ITeamMemberUpdateApiResponse } from '../../model/teammembersdata.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {
  private url = `https://api.rantsnconfess.com/v1`
  constructor(private http: HttpClient) { }

  getTeamMembers(){
    return this.http.get<ITeamMember>(`${this.url}/team-members`).pipe()
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
