export type PomodoroRoundResponse = {
  id: string;
  totalSeconds: number;
  createdAt?: string;
  updatedAt?: string;
  isCompleted?: boolean;
};

export type PomodoroSessionResponse = {
  id: string;
  rounds?: PomodoroRoundResponse[];
  createdAt?: string;
  updatedAt?: string;
  isCompleted?: boolean;
};

export type PomodoroSessionFormState = Partial<
  Omit<PomodoroSessionResponse, 'id' | 'createdAt' | 'updatedAt'>
>;
