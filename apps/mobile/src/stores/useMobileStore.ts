import { create } from 'zustand';

interface MobileState {
  notificationsEnabled: boolean;
  toggleNotifications: () => void;
}

export const useMobileStore = create<MobileState>((set) => ({
  notificationsEnabled: true,
  toggleNotifications: () => set((state) => ({ notificationsEnabled: !state.notificationsEnabled })),
}));
