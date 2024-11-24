import axios from "axios";
import { AccountRequest, AccountResponse } from "../types/account.type";
import axiosInstance from "../clients/axiosInsatance";

const accountService = {
  getAccounts: async (): Promise<AccountResponse[]> => {
    const response = await axiosInstance.get(`/accounts`);
    return response.data;
  },
  PostAccount: async (account: AccountRequest): Promise<AccountResponse[]> => {
    const response = await axiosInstance.post(`/accounts`, account);
    return response.data;
  },
};

export default accountService;
