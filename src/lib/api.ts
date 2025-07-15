
import { ErrorResponse } from '@/types/swagger';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const FEBaseAxios = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BE_IP,
  // baseURL: `/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const FEApiCaller = async <T>(path: string, options: AxiosRequestConfig): Promise<T & ErrorResponse> => {
  try {
    const res = await FEBaseAxios({
      ...options,
      url: path,
    });

    return res.data;
  } catch (error) {
    const { response } = error as AxiosError<any>;
    return response?.data;
  }
};
