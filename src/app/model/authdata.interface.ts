export interface ISignUpInterface{
  name: string,
  email: string,
  password: string,
  password_confirmation: string,
  role: string
}

export interface ISignUpSuccess{
  status: string,
  message: string,
  data: {
    user: {
      name: string,
      email: string,
      role: string,
      updated_at: string,
      created_at: string,
      id: number
    },
    token: string
  }
}

export interface ILoginInterface{
  email: string,
  password: string
}

export interface ILoginSuccess{
  status: string,
  message: string,
  data: {
    user: {
      id: 13,
      name: string,
      email: string,
      email_verified_at: null,
      created_at: string,
      updated_at: string,
      role: string
    },
    token: string
  }
}

export interface LogOutInterface{
  message: string
}