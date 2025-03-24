import { browser } from '$app/environment';

export const load = async () => {
  if (browser) {
    const order = localStorage.getItem('cart');
    return {
      order: order ? JSON.parse(order) : []
    };
  }

  return {
    order: []
  };
};
