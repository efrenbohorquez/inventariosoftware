import React from 'react';
import { ExternalLink, Info, ShieldAlert, Cloud } from 'lucide-react';
import type { Application } from '@types/index';

interface ApplicationDetailModalProps {
  app: Application;
  onClose: () => void;
}

export const ApplicationDetailModal: React.FC<ApplicationDetailModalProps> = ({ app, onClose }) => {
  const getDependencyBadgeColor = (dependency: string) => {
    if (dependency === 'Muy Alta' || dependency === 'Extrema') {
      return 'bg-red-200 text-red-800';
    }
    return 'bg-amber-200 text-amber-800';
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="bg-blue-800 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-blue-200 hover:text-white transition-colors text-2xl"
          >
            ✕
          </button>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-blue-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              {app.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              app.status === 'Legacy' ? 'bg-amber-500' : 'bg-emerald-500'
            }`}>
              {app.status}
            </span>
          </div>
          <h2 className="text-3xl font-bold">{app.name}</h2>
          <div className="flex items-center gap-2 mt-2 text-blue-100 opacity-90 break-all">
            <ExternalLink size={14} />
            <a href={app.url} target="_blank" className="hover:underline text-sm">{app.url}</a>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Tecnología Base</p>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <Cloud size={16} className="text-blue-500" />
                {app.tech}
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Criticidad</p>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <ShieldAlert size={16} className="text-amber-500" />
                {app.criticality}
              </div>
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-2">
              <Info size={18} className="text-blue-500" />
              Descripción General
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {app.description}
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
            <h4 className="flex items-center gap-2 font-bold text-amber-800 mb-1">
              <ShieldAlert size={18} />
              Análisis de Riesgo y Dependencia
            </h4>
            <p className="text-amber-700 text-sm">
              {app.risk}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs font-bold text-amber-800 uppercase">Dependencia Humana:</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${getDependencyBadgeColor(app.dependency)}`}>
                {app.dependency}
              </span>
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-slate-200 rounded-lg font-bold text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Cerrar
            </button>
            <a
              href={app.url}
              target="_blank"
              className="px-6 py-2 bg-blue-800 text-white rounded-lg font-bold hover:bg-blue-900 transition-colors flex items-center gap-2"
            >
              Ir al Aplicativo <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
