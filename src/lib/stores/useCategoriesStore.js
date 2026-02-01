"use client";

import { create } from "zustand";
import { categoryAPI } from "@/lib/api/categories";

/**
 * Categories Zustand Store
 * Manages category state and data fetching
 */
const useCategoriesStore = create((set, get) => ({
  // State
  sliderCategories: [],
  collectionCategories: [],
  loading: false,
  error: null,
  lastFetch: null,

  // Actions
  /**
   * Fetch slider categories
   */
  fetchSliderCategories: async () => {
    set({ loading: true, error: null });
    try {
      const categories = await categoryAPI.getSliderCategories();
      set({
        sliderCategories: categories,
        loading: false,
        lastFetch: Date.now(),
        error: null,
      });
      return categories;
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to fetch slider categories",
      });
      throw error;
    }
  },

  /**
   * Fetch collection categories
   */
  fetchCollectionCategories: async () => {
    set({ loading: true, error: null });
    try {
      const categories = await categoryAPI.getCollectionCategories();
      set({
        collectionCategories: categories,
        loading: false,
        lastFetch: Date.now(),
        error: null,
      });
      return categories;
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to fetch collection categories",
      });
      throw error;
    }
  },

  /**
   * Reset store
   */
  reset: () => {
    set({
      sliderCategories: [],
      collectionCategories: [],
      loading: false,
      error: null,
      lastFetch: null,
    });
  },
}));

export default useCategoriesStore;

