export interface ILoginInterface{
  name: string,
  email: string,
  password: string,
  password_confirmation: string,
  role: 'user' | 'admin'
}