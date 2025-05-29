'use server'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { cookies } from 'next/headers';

type MethodTypes = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface ApiError {
  name: string;
  data: unknown;
  status?: number;
  isNetworkError: boolean;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
}

interface ApiCallOptions extends Omit<AxiosRequestConfig, 'url' | 'method' | 'data'> {
  url: string;
  method?: MethodTypes;
  data?: Record<string, unknown>;
  timeout?: number;
  contentType?: string;
}

const getHeaders = (contentType: string): Record<string, string> => {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  const headers: Record<string, string> = { "Content-Type": contentType };
  if (token) headers.Authorization = `bearer ${token}`;
  return headers;
};

export async function serverApiCall<T>({
  url,
  method = 'GET',
  data = {},
  timeout = 20000,
  contentType = 'application/json',
  ...axiosArgs
}: ApiCallOptions): Promise<ApiResponse<T>> {
  try {
    const response: AxiosResponse<T> = await axios({
      url,
      method,
      timeout,
      headers: getHeaders(contentType),
      params: method === 'GET' ? data : undefined,
      data: method !== 'GET' ? data : undefined,
      validateStatus: (status) => (status >= 200 && status < 300) || status === 412,
      ...axiosArgs
    });

    return { success: true, data: response.data };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return {
        success: false,
        error: {
          name: err.name,
          data: err.response?.data,
          status: err.response?.status,
          isNetworkError: err.message === 'Network Error' || err.code === 'ECONNABORTED'
        }
      };
    }

    return {
      success: false,
      error: {
        name: 'UnknownError',
        data: err instanceof Error ? err.message : 'Unknown error occurred',
        isNetworkError: false
      }
    };
  }
}