// API Response types
export interface ApiResponse<T> {
  message?: string;
  data: T;
  pagination?: Pagination;
}

export interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Dealer types
export interface Dealer {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  address: string;
  location: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDealerRequest {
  name: string;
  email?: string;
  phone?: string;
  address: string;
  location: string;
}

export interface DealerRequest {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  address: string;
  location: string;
  createdAt: string;
  updatedAt: string;
}

// Query params for getDealers
export interface GetDealersParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: boolean;
  location?: string;
}
