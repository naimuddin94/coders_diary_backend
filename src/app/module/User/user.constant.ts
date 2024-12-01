export const USER_ROLE = {
  user: 'user',
  admin: 'admin',
} as const;

export const role = Object.keys(USER_ROLE);

export const userSearchableFields = ['name', 'email', 'phone', 'address'];
