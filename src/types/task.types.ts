export enum TaskPriority {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export type TaskResponse = {
  id: string;
  name: string;
  isCompleted: boolean;
  priority?: TaskPriority;
  createdAt?: string;
  updatedAt?: string;
};

export type TaskFormState = Partial<Omit<TaskResponse, 'id' | 'updatedAt'>>;
