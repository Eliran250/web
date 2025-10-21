export interface Company {
  name: string;
  department: string;
  title?: string;
}

export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  maidenName?: string;
  age?: number;
  gender?: string;
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
  birthDate?: string;
  bloodGroup?: string;
  height?: number;
  weight?: number;
  eyeColor?: string;

  hair?: {
    color?: string;
    type?: string;
  };

  image?: string; // תמונת המשתמש

  ip?: string;
  address?: {
    address?: string;
    city?: string;
    state?: string;
    stateCode?: string;
    postalCode?: string;
    country?: string;
    coordinates?: {
      lat?: number;
      lng?: number;
    };
  };

  macAddress?: string;
  university?: string;

  bank?: {
    cardNumber?: string;
    cardType?: string;
    cardExpire?: string;
    currency?: string;
    iban?: string;
  };

  company?: {
    name?: string;
    department?: string;
    title?: string;
    address?: {
      address?: string;
      city?: string;
      state?: string;
      stateCode?: string;
      postalCode?: string;
      country?: string;
    };
  };

  ein?: string;
  ssn?: string;
  userAgent?: string;

  crypto?: {
    coin?: string;
    wallet?: string;
    network?: string;
  };

  role?: string;
}


export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}