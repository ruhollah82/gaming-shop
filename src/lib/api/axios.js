import axios from "axios";

// API Base URL - JSON Server runs on port 3001
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle errors
    if (error.response) {
      // Server responded with error
      const { status, data } = error.response;
      console.error(`API Error ${status}:`, data);
      
      switch (status) {
        case 404:
          throw new Error("Resource not found");
        case 500:
          throw new Error("Server error. Please try again later.");
        default:
          throw new Error(data?.message || "An error occurred");
      }
    } else if (error.request) {
      // Request made but no response (likely JSON server not running)
      const isLocalhost = API_BASE_URL.includes("localhost") || API_BASE_URL.includes("127.0.0.1");
      if (isLocalhost) {
        console.error("JSON Server not running. Please start it with: npm run json-server");
        throw new Error("JSON Server is not running. Please start it with: npm run json-server");
      } else {
        console.error("Network error:", error.request);
        throw new Error("Network error. Please check your connection.");
      }
    } else {
      // Something else happened
      console.error("Error:", error.message);
      throw error;
    }
  }
);

export default apiClient;

