import { ObjectId } from "mongodb";
import { User } from "../../../glide-entities";

export type GetAdminDTO = {
  email?: string, 
  adminID?: ObjectId,
  username?: string,
};

export type GetAdminOptions = {
  shouldPopulate?: boolean,
  withPassword?: boolean,
  onAdminNotFound?: ({ email, adminID }: GetAdminDTO) => void | never,
};

export type CheckUserDTO = {
  username: string;
  userID: string;
  computedProps?: {
    _user?: User;
  }
};

export type CheckEmailDTO = {
  email: string;
  userID: string;
};
