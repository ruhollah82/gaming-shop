import apiClient from "./axios";

/**
 * Categories API Service
 * Handles all category-related API calls
 */

export const categoryAPI = {
  /**
   * Get slider categories
   * @returns {Promise<Array>} Array of slider categories
   */
  getSliderCategories: async () => {
    try {
      const response = await apiClient.get("/sliderCategories");
      return response;
    } catch (error) {
      console.error("Error fetching slider categories:", error);
      throw error;
    }
  },

  /**
   * Get collection categories
   * @returns {Promise<Array>} Array of collection category names (strings)
   */
  getCollectionCategories: async () => {
    try {
      const response = await apiClient.get("/collectionCategories");
      // Extract names from objects to maintain backward compatibility
      // API returns objects with {id, name}, but components expect strings
      return response.map((cat) => (typeof cat === "string" ? cat : cat.name));
    } catch (error) {
      console.error("Error fetching collection categories:", error);
      throw error;
    }
  },
};

