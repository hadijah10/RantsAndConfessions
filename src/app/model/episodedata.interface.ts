export interface PodcastEpisode {
  id: number;
  title: string;
  description: string;
  img_url: string;
  audio_url: string;
  duration: string;
  posted_on: string; // e.g. "2025-06-28"
  season: string;
  episode: string;
  spotify_url: string;
  apple_podcasts_url: string;
  archive: string;   // "0" or "1" as string
  featured: string;  // "0" or "1" as string
  slug: string;
  created_at: string; // ISO 8601 format
  updated_at: string; // ISO 8601 format
}

export interface PodcastMeta {
  total: number;
  page: number;
  last_page: number;
}

export interface IPodcastApiResponse {
  status: string; // "success"
  data: PodcastEpisode[];
  meta: PodcastMeta;
}

//searchEpisodes interface
export interface IPodcastSearchEpisode {
  id: number;
  title: string;
  description: string;
  img_url: string;
  audio_url: string;
  duration: string;         // format: "mm:ss" or "hh:mm:ss"
  posted_on: string;        // format: YYYY-MM-DD
  season: number;
  episode: number;
  anchor_podcast: string;
  apple_podcasts: string;
  google_podcasts: string;
  archive: number;          // 0 or 1
  featured: number;         // 0 or 1
  slug: string;
}

export interface IMeta {
  total: number;
  page: number;
  last_page: number;
}

export interface IPodcastEpisodesSearchApiResponse {
  status: string; // e.g. "success"
  data: IPodcastSearchEpisode[];
  meta: IMeta;
}
