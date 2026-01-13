import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axios';
import type {
  ApiResponse,
  Dealer,
  CreateDealerRequest,
  DealerRequest,
  GetDealersParams
} from '../types';

// ============================================
// DEALER HOOKS
// ============================================

/**
 * Hook to fetch dealers with optional filters
 * @param params - Query parameters for filtering dealers
 */
export function useGetDealers(params?: GetDealersParams) {
  const [data, setData] = useState<ApiResponse<Dealer[]> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchDealers() {
      try {
        setIsLoading(true);
        setError(null);

        // Build query params object
        const queryParams: Record<string, string | number | boolean> = {};
        if (params?.page) queryParams.page = params.page;
        if (params?.limit) queryParams.limit = params.limit;
        if (params?.search) queryParams.search = params.search;
        if (params?.status !== undefined) queryParams.status = params.status;
        if (params?.location) queryParams.location = params.location;

        const response = await axiosInstance.get<ApiResponse<Dealer[]>>('/v1/user/dealer', {
          params: queryParams,
        });

        if (isMounted) {
          setData(response.data);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Failed to fetch dealers'));
          setIsLoading(false);
        }
      }
    }

    fetchDealers();

    return () => {
      isMounted = false;
    };
  }, [params?.page, params?.limit, params?.search, params?.status, params?.location]);

  return { data, isLoading, error };
}

/**
 * Hook to create a new dealer request
 */
export function useCreateDealer() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<DealerRequest | null>(null);

  const createDealer = async (dealerData: CreateDealerRequest) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await axiosInstance.post<ApiResponse<DealerRequest>>('/v1/user/dealer', dealerData);

      setData(response.data.data);
      setIsLoading(false);
      return response.data;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to create dealer request');
      setError(error);
      setIsLoading(false);
      throw error;
    }
  };

  return { createDealer, isLoading, error, data };
}
