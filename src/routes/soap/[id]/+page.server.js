import { products } from '$lib/products.js';

export const load = async ({ params }) => {
  const product = products.find((p) => p.id === parseInt(params.id));

  return {
    product
  };
};
