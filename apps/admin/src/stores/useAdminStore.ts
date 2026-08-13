import { create } from 'zustand';

interface AdminState {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useAdminStore = create<AdminState>((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
