'use server'

import axios from 'axios';
import { cookies } from 'next/headers';

type MethodTypes = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface ApiCallOptions {
  url: string;
  method?: MethodTypes;
  data?: any;
  timeout?: number;
  contentType?: string;
  responseType?: string;
  baseURL?: string;
  axiosArgs?: any;
}

const getHeaders = (contentType: string) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;
  
  let headers: Record<string, string> = { "Content-Type": contentType };
  if (token) headers.Authorization = `bearer ${token}`;
  return headers;
};

export async function serverApiCall({
  url,
  method = 'GET',
  data = {},
  timeout = 20000,
  contentType = 'application/json',
  responseType,
  baseURL = process.env.API_BASE_URL,
  axiosArgs = {}
}: ApiCallOptions) {
  try {
    const response = await axios({
      url,
      baseURL,
      method,
      timeout,
      responseType,
      headers: getHeaders(contentType),
      params: method === 'GET' ? data : {},
      data: method !== 'GET' ? data : {},
      validateStatus: (status) => (status >= 200 && status < 300) || status === 412,
      ...axiosArgs
    });

    return { success: true, data: response.data };
  } catch (err: any) {
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
}

// Example usage in your server action
export async function updatePageStateServer(data: any) {
  const result = await serverApiCall({
    url: '/your-api-endpoint',
    method: 'POST',
    data
  });

  if (!result.success) {
    throw new Error(result.error.data?.message || 'API call failed');
  }

  return result.data;
}