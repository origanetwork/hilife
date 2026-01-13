import axiosInstance from "../utils/axios";
import type {
  ApiResponse,
  Dealer,
  DealerRequest,
  CreateDealerRequest,
  Category,
  GalleryImage,
  Product,
} from "../types";

// ============================================
// DEALER APIs
// ============================================

export const getDealersApi = (params?: Record<string, any>) =>
  axiosInstance.get<ApiResponse<Dealer[]>>("/v1/user/dealer", { params });

export const createDealerApi = (data: CreateDealerRequest) =>
  axiosInstance.post<ApiResponse<DealerRequest>>("/v1/user/dealer", data);

// ============================================
// CATEGORY APIs
// ============================================

export const getCategoriesApi = (params?: Record<string, any>) =>
  axiosInstance.get<ApiResponse<Category[]>>("/v1/user/category", { params });

// ============================================
// GALLERY APIs
// ============================================

export const getGalleryImagesApi = (params?: Record<string, any>) =>
  axiosInstance.get<ApiResponse<GalleryImage[]>>("/v1/user/gallery", { params });

// ============================================
// PRODUCT APIs
// ============================================

export const getAllProductsApi = (params?: Record<string, any>) =>
  axiosInstance.get<ApiResponse<Product[]>>("/v1/user/product", { params });

export const getProductApi = (id: string) =>
  axiosInstance.get<ApiResponse<Product>>(`/v1/user/product/${id}`);
