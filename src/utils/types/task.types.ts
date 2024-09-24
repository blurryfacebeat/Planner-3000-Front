export enum TaskPriority {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export type TaskResponse = {
  id: string;
  name: string;
  isCompleted: boolean;
  createdAt?: string;
  updatedAt?: string;
  priority?: TaskPriority;
};

export type TaskFormState = Partial<Omit<TaskResponse, 'id' | 'updatedAt'>>;
