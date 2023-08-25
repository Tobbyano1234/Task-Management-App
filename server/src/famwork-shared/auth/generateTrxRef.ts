export const generateTrxRef = (userID: string) => {
  return `UN${Date.now()}${String(userID).substring(7, 9)}`;
};
