export interface Company {
  name: string;
  department: string;
  title?: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender?: string;
  email: string;
  phone?: string;
  image: string; // תמונת המשתמש
  company: Company;
  username?: string;
  birthDate?: string;
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}