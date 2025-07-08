export interface IPlaylist {
  id: number;
  name: string;
  description: string;
  created_at: string; // ISO 8601 date string
  updated_at: string;
}

export interface IMeta {
  total: number;
  page: number;
  last_page: number;
}

export interface IPlaylistListApiResponse {
  status: string; // "success"
  data: IPlaylist[];
  meta: IMeta;
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