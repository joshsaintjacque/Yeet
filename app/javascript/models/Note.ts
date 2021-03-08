import { Record } from "./Record";

export interface Note extends Record {
  title?: string;
  body?: string;
  user_id?: number;
}
