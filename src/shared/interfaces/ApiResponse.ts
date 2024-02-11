// Defina a interface ApiResponse como genérica
export interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: string;
    status_code?: number;
  }