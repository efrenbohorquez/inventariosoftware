import React from 'react';
import { Cloud, ShieldAlert } from 'lucide-react';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
      <p>© 2025 Personería de Bogotá - Oficina de Tecnologías de la Información (DTIC)</p>
      <div className="flex gap-6">
        <span className="flex items-center gap-1"><Cloud size={14} /> Azure Ready</span>
        <span className="flex items-center gap-1"><ShieldAlert size={14} /> ISO 27001</span>
      </div>
    </footer>
  );
};
