"use client";

import { create } from "zustand";
import { productAPI } from "@/lib/api/products";

/**
 * Products Zustand Store
 * Manages product state and data fetching
 */
const useProductsStore = create((set, get) => ({
  // State
  products: [],
  currentProduct: null,
  loading: false,
  error: null,
  lastFetch: null,

  // Actions
  /**
   * Fetch all products
   */
  fetchProducts: async (params = {}) => {
    set({ loading: true, error: null });
    try {
      const products = await productAPI.getAll(params);
      set({
        products,
        loading: false,
        lastFetch: Date.now(),
        error: null,
      });
      return products;
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to fetch products",
      });
      throw error;
    }
  },

  /**
   * Fetch product by ID
   */
  fetchProductById: async (id) => {
    set({ loading: true, error: null });
    try {
      const product = await productAPI.getById(id);
      set({
        currentProduct: product,
        loading: false,
        error: null,
      });
      return product;
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to fetch product",
      });
      throw error;
    }
  },

  /**
   * Get product by ID from cache
   */
  getProductById: (id) => {
    const { products } = get();
    return products.find((p) => p.id === id) || null;
  },

  /**
   * Clear current product
   */
  clearCurrentProduct: () => {
    set({ currentProduct: null });
  },

  /**
   * Reset store
   */
  reset: () => {
    set({
      products: [],
      currentProduct: null,
      loading: false,
      error: null,
      lastFetch: null,
    });
  },
}));

export default useProductsStore;

