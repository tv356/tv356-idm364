import { json } from '@sveltejs/kit';
import { products } from '$lib/products.js';

export const GET = async () => {
  return json(products);
};
