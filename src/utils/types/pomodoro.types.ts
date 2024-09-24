export type PomodoroRoundResponse = {
  id: string;
  totalMinutes: number;
  createdAt?: string;
  updatedAt?: string;
  isCompleted?: boolean;
};

export type PomodoroSessionResponse = {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  isCompleted?: boolean;
  rounds?: PomodoroRoundResponse[];
};

export type PomodoroSessionFormState = Partial<
  Omit<PomodoroSessionResponse, 'id' | 'createdAt' | 'updatedAt'>
>;

export type PomodoroRoundFormState = Partial<
  Omit<PomodoroRoundResponse, 'id' | 'createdAt' | 'updatedAt'>
>;
