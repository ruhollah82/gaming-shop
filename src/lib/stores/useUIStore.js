"use client";

import { create } from "zustand";
import { uiAPI } from "@/lib/api/ui";

/**
 * UI Data Zustand Store
 * Manages UI-related static data (brands, features, FAQ, etc.)
 */
const useUIStore = create((set, get) => ({
  // State
  brands: [],
  features: [],
  faq: [],
  testimonials: [],
  marquee: null,
  stats: [],
  imageFeatures: [],
  sortOptions: [],
  layoutOptions: null,
  loading: false,
  error: null,
  lastFetch: null,

  // Actions
  /**
   * Fetch brands
   */
  fetchBrands: async () => {
    set({ loading: true, error: null });
    try {
      const brands = await uiAPI.getBrands();
      set({
        brands,
        loading: false,
        error: null,
      });
      return brands;
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to fetch brands",
      });
      throw error;
    }
  },

  /**
   * Fetch features
   */
  fetchFeatures: async () => {
    set({ loading: true, error: null });
    try {
      const features = await uiAPI.getFeatures();
      set({
        features,
        loading: false,
        error: null,
      });
      return features;
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to fetch features",
      });
      throw error;
    }
  },

  /**
   * Fetch FAQ
   */
  fetchFAQ: async () => {
    set({ loading: true, error: null });
    try {
      const faq = await uiAPI.getFAQ();
      set({
        faq,
        loading: false,
        error: null,
      });
      return faq;
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to fetch FAQ",
      });
      throw error;
    }
  },

  /**
   * Fetch testimonials
   */
  fetchTestimonials: async () => {
    set({ loading: true, error: null });
    try {
      const testimonials = await uiAPI.getTestimonials();
      set({
        testimonials,
        loading: false,
        error: null,
      });
      return testimonials;
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to fetch testimonials",
      });
      throw error;
    }
  },

  /**
   * Fetch marquee data
   */
  fetchMarquee: async () => {
    set({ loading: true, error: null });
    try {
      const marquee = await uiAPI.getMarquee();
      set({
        marquee,
        loading: false,
        error: null,
      });
      return marquee;
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to fetch marquee",
      });
      throw error;
    }
  },

  /**
   * Fetch stats
   */
  fetchStats: async () => {
    set({ loading: true, error: null });
    try {
      const stats = await uiAPI.getStats();
      set({
        stats,
        loading: false,
        error: null,
      });
      return stats;
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to fetch stats",
      });
      throw error;
    }
  },

  /**
   * Fetch image features
   */
  fetchImageFeatures: async () => {
    set({ loading: true, error: null });
    try {
      const imageFeatures = await uiAPI.getImageFeatures();
      set({
        imageFeatures,
        loading: false,
        error: null,
      });
      return imageFeatures;
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to fetch image features",
      });
      throw error;
    }
  },

  /**
   * Fetch sort options
   */
  fetchSortOptions: async () => {
    set({ loading: true, error: null });
    try {
      const sortOptions = await uiAPI.getSortOptions();
      set({
        sortOptions,
        loading: false,
        error: null,
      });
      return sortOptions;
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to fetch sort options",
      });
      throw error;
    }
  },

  /**
   * Fetch layout options
   */
  fetchLayoutOptions: async () => {
    set({ loading: true, error: null });
    try {
      const layoutOptions = await uiAPI.getLayoutOptions();
      set({
        layoutOptions,
        loading: false,
        error: null,
      });
      return layoutOptions;
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to fetch layout options",
      });
      throw error;
    }
  },

  /**
   * Initialize all UI data (for SSR/prefetching)
   */
  initializeUIData: async () => {
    set({ loading: true, error: null });
    try {
      const [
        brands,
        features,
        faq,
        testimonials,
        marquee,
        stats,
        imageFeatures,
        sortOptions,
        layoutOptions,
      ] = await Promise.all([
        uiAPI.getBrands(),
        uiAPI.getFeatures(),
        uiAPI.getFAQ(),
        uiAPI.getTestimonials(),
        uiAPI.getMarquee(),
        uiAPI.getStats(),
        uiAPI.getImageFeatures(),
        uiAPI.getSortOptions(),
        uiAPI.getLayoutOptions(),
      ]);

      set({
        brands,
        features,
        faq,
        testimonials,
        marquee,
        stats,
        imageFeatures,
        sortOptions,
        layoutOptions,
        loading: false,
        lastFetch: Date.now(),
        error: null,
      });
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to initialize UI data",
      });
      throw error;
    }
  },

  /**
   * Reset store
   */
  reset: () => {
    set({
      brands: [],
      features: [],
      faq: [],
      testimonials: [],
      marquee: null,
      stats: [],
      imageFeatures: [],
      sortOptions: [],
      layoutOptions: null,
      loading: false,
      error: null,
      lastFetch: null,
    });
  },
}));

export default useUIStore;

