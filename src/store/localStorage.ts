const EXIST_USERS_KEY = "exist_users";

export const getExistUsers = (): string[] => {
  const existUsers = localStorage.getItem(EXIST_USERS_KEY);
  return JSON.parse(existUsers ?? "[]");
};

export const checkIsUserExist = (phone: string): boolean => {
  const existUsers = getExistUsers()
  return existUsers.includes(phone)
}

export const addUser = (phone: string): void => {
  const existUsers = getExistUsers();
  const updatedExistUsers = [...existUsers, phone];
  localStorage.setItem(EXIST_USERS_KEY, JSON.stringify(updatedExistUsers));
};
