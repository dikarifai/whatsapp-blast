import axios from "axios";
import { UserResponse } from "../types/user.type";

const userService = {
  getUserProfile: async (): Promise<UserResponse[]> => {
    const response = await axios.get(`/users`);
    return response.data;
  },
};

export default userService;
