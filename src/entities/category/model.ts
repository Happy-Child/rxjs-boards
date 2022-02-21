export interface Category {
  id: number;
  name: string;
}

export const useCategories = (): Category[] => ([] || [
  {
    id: 100,
    name: 'Books',
  },
  {
    id: 110,
    name: 'Car',
  },
  {
    id: 120,
    name: 'Hobby',
  },
  {
    id: 130,
    name: 'Girls',
  },
  {
    id: 140,
    name: 'Girls',
  },
  {
    id: 150,
    name: 'Girls',
  },
  {
    id: 160,
    name: 'Girls',
  },
  {
    id: 170,
    name: 'Girls',
  },
]);
