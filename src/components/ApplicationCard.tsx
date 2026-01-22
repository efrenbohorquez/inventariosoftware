import React from 'react';
import { Cloud, ShieldAlert, Server, Users, Layout, ChevronRight, ExternalLink } from 'lucide-react';
import type { Application } from '@types/index';

interface ApplicationCardProps {
  app: Application;
  onDetailClick: (app: Application) => void;
}

export const ApplicationCard: React.FC<ApplicationCardProps> = ({ app, onDetailClick }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Misional':
        return <Server size={20} />;
      case 'Ciudadano':
        return <Users size={20} />;
      case 'Administrativo':
        return <Layout size={20} />;
      default:
        return <Server size={20} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Legacy':
        return 'bg-amber-100 text-amber-700';
      case 'Moderno':
        return 'bg-emerald-100 text-emerald-700';
      default:
        return 'bg-blue-100 text-blue-700';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    if (status === 'Legacy') {
      return 'bg-amber-100 text-amber-700 border border-amber-200';
    }
    return 'bg-slate-100 text-slate-600 border border-slate-200';
  };

  return (
    <div className="group bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col overflow-hidden">
      <div className="p-5 flex-1">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-2 rounded-lg ${getStatusColor(app.status)}`}>
            {getCategoryIcon(app.category)}
          </div>
          <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${getStatusBadgeColor(app.status)}`}>
            {app.status}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
          {app.name}
        </h3>
        <p className="text-sm text-slate-500 mt-2 line-clamp-2">
          {app.description}
        </p>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Cloud size={14} className="text-slate-400" />
            <span className="font-semibold">Tecnología:</span> {app.tech}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <ShieldAlert size={14} className={app.criticality === 'Crítica' ? 'text-red-500' : 'text-amber-500'} />
            <span className="font-semibold">Criticidad:</span> {app.criticality}
          </div>
        </div>
      </div>

      <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={() => onDetailClick(app)}
          className="text-xs font-bold text-blue-700 flex items-center gap-1 hover:underline"
        >
          Ver Detalle <ChevronRight size={14} />
        </button>
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-colors"
          title="Abrir Enlace"
        >
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};
