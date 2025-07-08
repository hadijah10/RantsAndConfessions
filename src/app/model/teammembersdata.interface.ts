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
}

export interface IMeta {
  total: number;
  page: number;
  last_page: number;
}

export interface ITeamMembersApiResponse {
  status: string; // e.g., "success"
  data: ITeamMember[];
  meta: IMeta;
}

