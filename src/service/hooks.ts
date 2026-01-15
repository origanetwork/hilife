"use client";

import { useEffect, useState } from "react";
import type {
  ApiResponse,
  Dealer,
  DealerRequest,
  CreateDealerRequest,
  GetDealersParams,
  Category,
  GetCategoriesParams,
  GalleryImage,
  GetGalleryParams,
  Product,
  GetProductsParams,
  Contact,
  CreateContactRequest,
  Testimonial,
  Blog,
  Banner,
} from "../types";

import {
  getDealersApi,
  createDealerApi,
  getCategoriesApi,
  getGalleryImagesApi,
  getAllProductsApi,
  getProductApi,
  createContactApi,
  fetchTestimonials,
  fetchBlogs,
  fetchBlogById,
  fetchBanners,
} from "./api";

// ============================================
// DEALER HOOKS
// ============================================

export function useGetDealers(params?: GetDealersParams) {
  const [data, setData] = useState<ApiResponse<Dealer[]> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    getDealersApi(params)
      .then((res) => {
        if (mounted) {
          setData(res.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
          setIsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [params?.page, params?.limit, params?.search, params?.status, params?.location]);

  return { data, isLoading, error };
}

export function useCreateDealer() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<DealerRequest | null>(null);

  const createDealer = async (dealerData: CreateDealerRequest) => {
    try {
      setIsLoading(true);
      const res = await createDealerApi(dealerData);
      setData(res.data.data);
      return res.data;
    } catch (err: any) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { createDealer, isLoading, error, data };
}

// ============================================
// CATEGORY HOOKS
// ============================================

export function useGetCategories(params?: GetCategoriesParams) {
  const [data, setData] = useState<ApiResponse<Category[]> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    getCategoriesApi(params)
      .then((res) => {
        if (mounted) {
          setData(res.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
          setIsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [params?.page, params?.limit, params?.search]);

  return { data, isLoading, error };
}

// ============================================
// GALLERY HOOKS
// ============================================

export function useGetGalleryImages(params?: GetGalleryParams) {
  const [data, setData] = useState<ApiResponse<GalleryImage[]> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    getGalleryImagesApi(params)
      .then((res) => {
        if (mounted) {
          setData(res.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
          setIsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [params?.page, params?.limit]);

  return { data, isLoading, error };
}

// ============================================
// PRODUCT HOOKS
// ============================================

export function useGetProducts(params?: GetProductsParams) {
  const [data, setData] = useState<ApiResponse<Product[]> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);

    getAllProductsApi(params)
      .then((res) => {
        if (mounted) {
          setData(res.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
          setIsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [params?.page, params?.limit, params?.search, params?.categoryId, params?.sortBy, params?.productType]);

  return { data, isLoading, error };
}

export function useGetProduct(id: string) {
  const [data, setData] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);

    if (!id) {
      setIsLoading(false);
      return;
    }

    getProductApi(id)
      .then((res) => {
        if (mounted) {
          setData(res.data.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
          setIsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [id]);

  return { data, isLoading, error };
}


export function useCreateContact() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Contact | null>(null);

  const submitContact = async (payload: CreateContactRequest) => {
    try {
      setIsLoading(true);
      setError(null);

      const response: ApiResponse<Contact> = await createContactApi(payload);
      setData(response.data);

      return response;
    } catch (err: any) {
      const message =
        err?.response?.data?.message || "Failed to submit contact form";
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return { submitContact, isLoading, error, data };
}



// ============================================
// TESTIMONIAL HOOKS
// ============================================

export const useTestimonials = (page = 1, limit = 10) => {
  const [data, setData] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const load = async () => {
      try {
        setIsLoading(true)
        const res = await fetchTestimonials(page, limit)

        if (mounted) {
          setData(res.data)
        }
      } catch (err: any) {
        if (mounted) {
          setError(err?.message || 'Failed to load testimonials')
        }
      } finally {
        if (mounted) {
          setIsLoading(false)
        }
      }
    }

    load()
    return () => {
      mounted = false
    }
  }, [page, limit])

  return { data, isLoading, error }
}



// ============================================
// BLOGS HOOKS
// ============================================


export const useLatestBlogs = () => {
  const [data, setData] = useState<Blog[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const load = async () => {
      try {
        setIsLoading(true)
        const res = await fetchBlogs({ latest: true })

        if (mounted) {
          setData(res.data)
        }
      } catch (err: any) {
        if (mounted) {
          setError(err?.message || 'Failed to load blogs')
        }
      } finally {
        if (mounted) {
          setIsLoading(false)
        }
      }
    }

    load()

    return () => {
      mounted = false
    }
  }, [])

  return { data, isLoading, error }
}


export const useAllBlogs = (
  page = 1,
  limit = 12
) => {
  const [data, setData] = useState<Blog[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const load = async () => {
      try {
        setIsLoading(true)

        const res = await fetchBlogs({
          latest: false,
          page,
          limit,
        })

        if (mounted) {
          setData(res.data)
        }
      } catch (err: any) {
        if (mounted) {
          setError(err?.message || 'Failed to load blogs')
        }
      } finally {
        if (mounted) {
          setIsLoading(false)
        }
      }
    }

    load()

    return () => {
      mounted = false
    }
  }, [page, limit])

  return { data, isLoading, error }
}


export const useBlog = (id: string) => {
  const [data, setData] = useState<Blog | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    let mounted = true

    const load = async () => {
      try {
        setIsLoading(true)
        const blog = await fetchBlogById(id)
        if (mounted) setData(blog)
      } catch (err: any) {
        if (mounted) setError(err?.message || 'Blog not found')
      } finally {
        if (mounted) setIsLoading(false)
      }
    }

    load()

    return () => {
      mounted = false
    }
  }, [id])

  return { data, isLoading, error }
}


export const useBanners = () => {
  const [data, setData] = useState<Banner[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const load = async () => {
      try {
        setIsLoading(true)
        const res = await fetchBanners()
        if (mounted) setData(res.data)
      } catch (err: any) {
        if (mounted) {
          setError(err?.message || 'Failed to load banners')
        }
      } finally {
        if (mounted) setIsLoading(false)
      }
    }

    load()
    return () => {
      mounted = false
    }
  }, [])

  return { data, isLoading, error }
}