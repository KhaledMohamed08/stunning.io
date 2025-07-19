export interface ApiRequest {
  prompt: string;
}

export interface ApiResponse {
  prompt: string;
  sections: string[];
}

export interface ApiErrorResponse {
  message: string;
  status?: number;
  code?: string;
}

export interface ApiState {
  loading: boolean;
  error: string | null;
  data: ApiResponse | null;
} 