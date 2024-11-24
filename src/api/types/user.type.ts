export interface UserRequest {
  name: string;
  phone: string;
}

export interface UserResponse {
  id: number;
  phone: string;
  createdAt: string;
  updatedAt: string;
  lastUsedAt: string;
  name: string;
  status: string;
}
