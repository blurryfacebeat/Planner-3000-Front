export type AuthForm = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  name?: string;
  email?: string;

  workInterval?: number;
  breakInterval?: number;
  intervalsCount?: number;
};

export type AuthResponse = {
  accessToken: string;
  user: User;
};
