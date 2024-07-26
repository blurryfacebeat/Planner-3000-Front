export type AuthForm = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  email: string;
  name?: string;
  workInterval?: number;
  breakInterval?: number;
  intervalsCount?: number;
};

export type AuthResponse = {
  accessToken: string;
  user: User;
};
