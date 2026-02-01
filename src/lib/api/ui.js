import apiClient from "./axios";

/**
 * UI Data API Service
 * Handles all UI-related static data API calls
 */

export const uiAPI = {
  /**
   * Get brands
   * @returns {Promise<Array>} Array of brand objects
   */
  getBrands: async () => {
    try {
      const response = await apiClient.get("/brands");
      return response;
    } catch (error) {
      console.error("Error fetching brands:", error);
      throw error;
    }
  },

  /**
   * Get features
   * @returns {Promise<Array>} Array of feature objects
   */
  getFeatures: async () => {
    try {
      const response = await apiClient.get("/features");
      return response;
    } catch (error) {
      console.error("Error fetching features:", error);
      throw error;
    }
  },

  /**
   * Get FAQ items
   * @returns {Promise<Array>} Array of FAQ items
   */
  getFAQ: async () => {
    try {
      const response = await apiClient.get("/faq");
      return response;
    } catch (error) {
      console.error("Error fetching FAQ:", error);
      throw error;
    }
  },

  /**
   * Get testimonials
   * @returns {Promise<Array>} Array of testimonial objects
   */
  getTestimonials: async () => {
    try {
      const response = await apiClient.get("/testimonials");
      return response;
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      throw error;
    }
  },

  /**
   * Get marquee data
   * @returns {Promise<Object>} Marquee items and config
   */
  getMarquee: async () => {
    try {
      const response = await apiClient.get("/marquee");
      return response;
    } catch (error) {
      console.error("Error fetching marquee:", error);
      throw error;
    }
  },

  /**
   * Get stats
   * @returns {Promise<Array>} Array of stat objects
   */
  getStats: async () => {
    try {
      const response = await apiClient.get("/stats");
      return response;
    } catch (error) {
      console.error("Error fetching stats:", error);
      throw error;
    }
  },

  /**
   * Get image features
   * @returns {Promise<Array>} Array of image feature objects
   */
  getImageFeatures: async () => {
    try {
      const response = await apiClient.get("/imageFeatures");
      return response;
    } catch (error) {
      console.error("Error fetching image features:", error);
      throw error;
    }
  },

  /**
   * Get sort options
   * @returns {Promise<Array>} Array of sort option objects
   */
  getSortOptions: async () => {
    try {
      const response = await apiClient.get("/sortOptions");
      return response;
    } catch (error) {
      console.error("Error fetching sort options:", error);
      throw error;
    }
  },

  /**
   * Get layout options
   * @returns {Promise<Object>} Layout options for mobile, tablet, desktop
   */
  getLayoutOptions: async () => {
    try {
      const response = await apiClient.get("/layoutOptions");
      return response;
    } catch (error) {
      console.error("Error fetching layout options:", error);
      throw error;
    }
  },
};

