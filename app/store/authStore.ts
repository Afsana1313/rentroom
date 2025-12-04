// store/authStore.ts
"use client";

import { create } from "zustand";

type AuthState = {
  isLoggedIn: boolean;
  loginModalOpen: boolean;
  login: () => void;
  logout: () => void;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  setLoggedIn: (value: boolean) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  loginModalOpen: false,
  login: () => set({ isLoggedIn: true, loginModalOpen: false }),
  logout: () => set({ isLoggedIn: false }),
  openLoginModal: () => set({ loginModalOpen: true }),
  closeLoginModal: () => set({ loginModalOpen: false }),
  setLoggedIn: (value: boolean) => set({ isLoggedIn: value })
}));
