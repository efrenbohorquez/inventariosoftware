import React from 'react';
import { Search } from 'lucide-react';

export const EmptyState: React.FC = () => {
  return (
    <div className="text-center py-20">
      <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Search className="text-slate-400" size={24} />
      </div>
      <h3 className="text-xl font-bold text-slate-800">No se encontraron aplicativos</h3>
      <p className="text-slate-500">Intenta con otros términos de búsqueda.</p>
    </div>
  );
};
