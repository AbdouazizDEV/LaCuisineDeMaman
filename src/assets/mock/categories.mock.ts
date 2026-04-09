import { ICategory } from '../../app/core/models/category.model';

export const categoriesMock: ICategory[] = [
  { id: 'cat-1', label: 'Entrees', slug: 'entrees', color: '#F59E0B', icon: 'restaurant-outline' },
  { id: 'cat-2', label: 'Plats', slug: 'plats', color: '#EF4444', icon: 'flame-outline' },
  { id: 'cat-3', label: 'Desserts', slug: 'desserts', color: '#EC4899', icon: 'ice-cream-outline' },
  { id: 'cat-4', label: 'Vegetarien', slug: 'vegetarien', color: '#22C55E', icon: 'leaf-outline' },
  { id: 'cat-5', label: 'Rapide', slug: 'rapide', color: '#3B82F6', icon: 'flash-outline' },
  { id: 'cat-6', label: 'Traditionnel', slug: 'traditionnel', color: '#A855F7', icon: 'book-outline' },
  { id: 'cat-7', label: 'Afrique', slug: 'afrique', color: '#FB923C', icon: 'earth-outline' },
  { id: 'cat-8', label: 'France', slug: 'france', color: '#14B8A6', icon: 'wine-outline' },
];
