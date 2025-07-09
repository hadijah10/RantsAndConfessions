export interface IPlaylist {
  id: number;
  name: string;
  description: string;
  created_at: string; // ISO 8601 date string
  updated_at: string;
  episodes:number[]
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface IPlaylistResponseData {
  current_page: number;
  data: IPlaylist[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}


export interface IPlaylistListApiResponse {
  status: string; // "success"
  data: IPlaylistResponseData 
}

export interface IPostPlaylistData{
  name: string,
  description: string
}

export interface IPostPlaylistApiResponse{
  status: string; // e.g. "success"
  data: IPlaylist;
}

export interface IPlaylistEditData{
  name: string,
  description: string
}

export interface IPlaylistDeleteResponse{
  status: string,
  message: string
}

//interfacefor adding an episode to playlist
export interface IEpisodeIdsPayload {
  episode_ids: number[];
}

export interface AddEpisodesResponseData {
  playlist_id: number;
  added_episode_ids: number[];
}


export interface IAddEpisodeToPlaylistApiResponse{
  status: string; // e.g. "success"
  message: string; // e.g. "Episodes added successfully."
  data: AddEpisodesResponseData;
}