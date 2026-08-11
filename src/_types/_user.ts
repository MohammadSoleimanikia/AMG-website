export type User = {
  id: number;
  name: string;
  phone: string;
  gender: string;
  avatar?: string;
  wallet: string;
  alertMessage?: string;
  remaining_credit?: string;
  addresses: string[];
  role: string;
  categoryName: string;
};
export type GetUserResponse = {
  user: User;
};

