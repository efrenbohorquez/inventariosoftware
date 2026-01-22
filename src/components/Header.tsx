import React from 'react';
import { Database, ShieldAlert } from 'lucide-react';
import type { Stats } from '@types/index';

interface HeaderProps {
  stats: Stats;
}

export const Header: React.FC<HeaderProps> = ({ stats }) => {
  return (
    <header className="bg-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Inventario Técnico Web</h1>
            <p className="text-blue-100 mt-1">Personería de Bogotá D.C. - Diagnóstico de Infraestructura 2025</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-blue-700/50 p-3 rounded-lg flex items-center gap-3">
              <div className="bg-blue-500 p-2 rounded-md">
                <Database size={20} />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase font-bold">Total Apps</p>
                <p className="text-xl font-bold">{stats.total}</p>
              </div>
            </div>
            <div className="bg-blue-700/50 p-3 rounded-lg flex items-center gap-3">
              <div className="bg-amber-500 p-2 rounded-md">
                <ShieldAlert size={20} />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase font-bold">Legacy/Riesgo</p>
                <p className="text-xl font-bold">{stats.legacy}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
