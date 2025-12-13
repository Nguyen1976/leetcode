const validateCoupons = (
  code: string[],
  businessLine: string[],
  isActive: boolean[]
): string[] => {
  const regex = /^[A-Za-z0-9_]+$/;

  const buckets: Record<string, string[]> = {
    electronics: [],
    grocery: [],
    pharmacy: [],
    restaurant: [],
  };

  for (let i = 0; i < code.length; i++) {
    const c = code[i];
    const b = businessLine[i];

    if (
      isActive[i] &&
      c &&
      regex.test(c) &&
      buckets[b] !== undefined
    ) {
      buckets[b].push(c);
    }
  }

  return [
    ...buckets.electronics.sort(),
    ...buckets.grocery.sort(),
    ...buckets.pharmacy.sort(),
    ...buckets.restaurant.sort(),
  ];
};
