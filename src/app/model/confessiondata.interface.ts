export interface IGetConfessionData {
  id: number,
  message: string,
  category: string,
  emotion: string,
  is_approved: boolean,
  created_at: string,
  updated_at: string
}
export interface IConfessionResponse {
  status: string,
  data: IGetConfessionData[],
  meta: {
    total: number,
    page: number,
    last_page: number
  }
}

export interface IPostConfessionData {
  message: string,
  category: string,
  emotion: string
}

export interface IPostConfessionDataResponse {
  message: string,
  confession: {
    id: number,
    message: string,
    category: string,
    emotion: string,
    is_approved: boolean,
    created_at: string,
    updated_at: string
  }
}

export type Ifilter = 'approved' | 'pending' | '';