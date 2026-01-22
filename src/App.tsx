import React, { useState } from 'react';
import { APP_DATA } from '@data/applications';
import { useApplicationFilters, useApplicationStats } from '@hooks/index';
import {
  Header,
  Footer,
  SearchBar,
  CategoryFilter,
  ApplicationCard,
  ApplicationDetailModal,
  EmptyState,
} from '@components/index';
import '@styles/index.css';
import type { Application } from '@types/index';

const categories = ['Todos', 'Misional', 'Administrativo', 'Ciudadano'];

export default function App() {
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const { searchTerm, activeCategory, filteredApps, handleSearch, handleCategoryChange } =
    useApplicationFilters(APP_DATA);
  const stats = useApplicationStats(APP_DATA);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      <Header stats={stats} />

      <main className="max-w-7xl mx-auto px-4 mt-8">
        {/* Filters and Search */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4 items-center">
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} />
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Apps Grid */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app, idx) => (
              <ApplicationCard
                key={idx}
                app={app}
                onDetailClick={setSelectedApp}
              />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </main>

      {/* Detail Modal */}
      {selectedApp && (
        <ApplicationDetailModal app={selectedApp} onClose={() => setSelectedApp(null)} />
      )}

      <Footer />
    </div>
  );
}
