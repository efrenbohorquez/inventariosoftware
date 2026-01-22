export type Criticality = 'Crítica' | 'Alta' | 'Media';
export type Status = 'Legacy' | 'Estándar' | 'Moderno';
export type Category = 'Misional' | 'Administrativo' | 'Ciudadano';
export type Dependency = 'Baja' | 'Media' | 'Muy Alta' | 'Extrema';

export interface Application {
  name: string;
  url: string;
  category: Category;
  tech: string;
  criticality: Criticality;
  dependency: Dependency;
  status: Status;
  description: string;
  risk: string;
}

export interface Stats {
  total: number;
  legacy: number;
  modern: number;
}

export interface FilterState {
  searchTerm: string;
  activeCategory: 'Todos' | Category;
}
