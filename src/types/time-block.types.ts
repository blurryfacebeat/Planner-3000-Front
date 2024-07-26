export type TimeBlockResponse = {
  id: string;
  name: string;
  duration: number;
  order: number;
  color?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type TimeBlockFormState = Partial<Omit<TimeBlockResponse, 'createdAt' | 'updatedAt'>>;
