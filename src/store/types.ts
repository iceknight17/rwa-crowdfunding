export interface User {
  id?: string;
  email: string;
  username: string;
  password: string;
  invests?: Investment[];
}

export interface Property {
  id?: string;
  title: string;
  description: string;
  total_fund: number;
  featured: boolean;
  invests?: Investment[];
}

export interface Investment {
  id?: string;
  property_id: string;
  user_id: string;
  amount: number;
  property?: Property;
  investor?: User;
}