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

export interface PodcastApiResponse {
  status: string; // "success"
  data: PodcastEpisode[];
  meta: PodcastMeta;
}
