import { products } from '$lib/products.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  // Parse ID parameter
  const id = parseInt(params.id);
  
  // Log for debugging
  console.log(`Loading product with ID: ${id}`);
  
  // Find the product
  const product = products.find(p => p.id === id);
  
  // Handle case where product is not found
  if (!product) {
    console.error(`Product with ID ${id} not found`);
    throw error(404, {
      message: 'Product not found'
    });
  }
  
  console.log(`Found product: ${product.name}`);
  
  return {
    product
  };
};