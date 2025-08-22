export const formattAmount = (amount: number) => {
  return Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
