export interface AccountRequest {
  name: string;
  phoneNumber: string;
}

export interface AccountResponse {
  id: number;
  phoneNumber: string;
  createdAt: string;
  name: string;
  isActive: boolean;
}
