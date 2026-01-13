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
} from "../types";

import {
  getDealersApi,
  createDealerApi,
  getCategoriesApi,
  getGalleryImagesApi,
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
