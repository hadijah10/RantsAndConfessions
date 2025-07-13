export interface ISocialMediaLink {
  id: number;
  platform: string;
  url: string;
}

export interface ITeamMember{
  id: number;
  name: string;
  role: string;
  bio: string;
  profile_image: string;
  social_media_links: ISocialMediaLink[];
  'created-at': string; // ISO date string
  'updated-at': string;
}

export interface IMeta {
  total: number;
  page: number;
  last_page: number;
}

export interface  ITeamMembersApiResponse {
  status: string; // e.g., "success"
  data: ITeamMember[];
  meta: IMeta;
}

//interface for creating a team member.
export interface ISocialMediaLinkPost {
  platform: string;
  url: string;
}

export interface ICreateTeamMemberPayload {
  name: string;
  role: string;
  bio: string;
  profile_image: string;
  social_media_links: ISocialMediaLinkPost[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  profile_image: string;
  social_media_links: ISocialMediaLink[];
}

export interface ITeamMemberCreateApiResponse {
  status: string; // e.g., "success"
  data: ICreateTeamMemberPayload;
}

export interface ITeamMemberUpdateApiResponse{
    status: string,
    message: string,
    data: TeamMember
}

export interface ITeamMemberDeleteApiResponse{
    status: string,
    message:string
}