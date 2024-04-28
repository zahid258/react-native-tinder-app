export interface IAddUser {
  user_id: number;
  user_like_id: number | string | null;
  is_like: number;
}

export interface IUserImpression {
  id: number;
  user_id: number;
  user_like_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  is_like: number;
}
