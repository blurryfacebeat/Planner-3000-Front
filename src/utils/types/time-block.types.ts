export type TimeBlockResponse = {
  id: string;
  name: string;
  duration: number;
  order: number;
  createdAt?: string;
  updatedAt?: string;
  color?: string;
};

export type TimeBlockFormState = Partial<Omit<TimeBlockResponse, 'createdAt' | 'updatedAt'>>;
