import { db } from "../utils/db";

enum Role {
  User = 1,
  Admin = 2,
  Root = 3,
}

export const IsAdmin = async (roleId : number) => {
  if(roleId==Role.Admin || roleId==Role.Root)return true;
    return false;  
};

export const IsRoot = async (roleId : number) => {
  if(roleId==Role.Root)return true;
    return false;
};
