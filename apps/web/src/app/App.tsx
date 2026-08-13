import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-4">
                <div className="max-w-md w-full text-center space-y-4 p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl">
                  <h1 className="text-3xl font-bold tracking-tight text-emerald-400">Web OK</h1>
                  <p className="text-slate-400 text-sm">
                    Plateforme Hôtelière — Application Client Web fonctionnelle.
                  </p>
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
