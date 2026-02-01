import apiClient from "./axios";

/**
 * Product API Service
 * Handles all product-related API calls
 */

export const productAPI = {
  /**
   * Get all products
   * @param {Object} params - Query parameters (category, sort, etc.)
   * @returns {Promise<Array>} Array of products
   */
  getAll: async (params = {}) => {
    try {
      const response = await apiClient.get("/products", { params });
      return response;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  /**
   * Get product by ID
   * @param {string} id - Product ID
   * @returns {Promise<Object>} Product object
   */
  getById: async (id) => {
    try {
      const response = await apiClient.get(`/products/${id}`);
      return response;
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      throw error;
    }
  },

  /**
   * Get products by category
   * @param {string} category - Category name
   * @returns {Promise<Array>} Array of products
   */
  getByCategory: async (category) => {
    try {
      const response = await apiClient.get("/products", {
        params: { category },
      });
      return response;
    } catch (error) {
      console.error(`Error fetching products by category ${category}:`, error);
      throw error;
    }
  },

  /**
   * Search products
   * @param {string} query - Search query
   * @returns {Promise<Array>} Array of matching products
   */
  search: async (query) => {
    try {
      const response = await apiClient.get("/products", {
        params: { q: query },
      });
      return response;
    } catch (error) {
      console.error(`Error searching products:`, error);
      throw error;
    }
  },
};

