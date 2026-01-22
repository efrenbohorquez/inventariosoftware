import { useState, useMemo, useCallback } from 'react';
import type { Application, FilterState } from '@types/index';

export const useApplicationFilters = (applications: Application[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'Todos' | 'Misional' | 'Administrativo' | 'Ciudadano'>('Todos');

  const filteredApps = useMemo(() => {
    return applications.filter(app => {
      const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'Todos' || app.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory, applications]);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const handleCategoryChange = useCallback((category: 'Todos' | 'Misional' | 'Administrativo' | 'Ciudadano') => {
    setActiveCategory(category);
  }, []);

  return {
    searchTerm,
    activeCategory,
    filteredApps,
    handleSearch,
    handleCategoryChange,
  };
};
