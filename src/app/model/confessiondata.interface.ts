export interface IGetConfessionData{
     id: number,
    message: string,
    category: string,
    emotion: string,
    is_approved: boolean,
    created_at:string,
    updated_at: string
}

export interface IPostConfessionData{
  message: string,
  category: string,
  emotion: string
}

export interface IPostConfessionDataResponse{
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