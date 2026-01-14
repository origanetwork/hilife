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

// ============================================
// CATEGORY TYPES
// ============================================

export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
  createdAt: string;
  _count: {
    products: number;
  };
}

export interface GetCategoriesParams {
  page?: number;
  limit?: number;
  search?: string;
}


// ============================================
// GALLERY TYPES
// ============================================

export interface GalleryImage {
  id: string;
  imageKey: string;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface GetGalleryParams {
  page?: number;
  limit?: number;
}

// ============================================
// PRODUCT TYPES
// ============================================

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  offerPrice?: number | null;
  categoryId: string;
  category: {
    id: string;
    name: string;
    slug: string;
  };
  images?: Array<{
    id: string;
    imageUrl: string | null;
    productId: string;
  }>;
  productTags?: Array<{
    id: string;
    tag: {
      id: string;
      name: string;
    };
  }>;
  productSizes?: Array<{
    id: string;
    size: {
      id: string;
      name: string;
    };
  }>;
  productColors?: Array<{
    id: string;
    color: {
      id: string;
      name: string;
    };
  }>;
  productMaterialTypes?: Array<{
    id: string;
    materialType: {
      id: string;
      name: string;
    };
  }>;
  createdAt: string;
  updatedAt: string;
}

export interface GetProductsParams {
  page?: number;
  limit?: number;
  search?: string;
  categoryId?: string;
  sortBy?: "price-asc" | "price-desc" | "newest";
}

// ================= CONTACT =================

export interface CreateContactRequest {
  firstName: string;
  lastName?: string;
  email: string | undefined;
  phone: string;
  subject: string;
  message: string;
}

export interface Contact {
  id: string;
  firstName: string;
  lastName: string | null;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

// ================= ORDER =================

export interface OrderItem {
  productId: string;
  quantity: number;
  amount: number;
  sizeId?: string;
  colorId?: string;
  materialTypeId?: string;
}

export interface CreateOrderRequest {
  firstName: string;
  lastName?: string;
  countryCode?: string;
  phone: string;
  email?: string;
  password?: string;
  shippingAddress?: string;
  note?: string;
  items: OrderItem[];
}

export interface Order {
  id: string;
  userId: string;
  totalAmount: number;
  status: string;
  shippingAddress: string | null;
  note: string | null;
  createdAt: string;
  updatedAt: string;
}


// ================= TESTIMONIAL =================

export interface Testimonial {
  id: string
  name: string
  position?: string | null
  content: string
  rating: number
  imageUrl: string
  createdAt: string
}

export interface TestimonialsResponse {
  message: string
  data: Testimonial[]
  pagination: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}