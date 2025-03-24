<script>
  import { products } from '$lib/products.js';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let cart = [];
  onMount(() => {
    if (browser) {
      cart = JSON.parse(localStorage.getItem('cart')) || [];
    }
  });

  function addToCart(product) {
    cart = [...cart, product];
    if (browser) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  function viewCart() {
    goto('/order');
  }
</script>

<svelte:head>
  <title>Products - Đê Mê Soaps</title>
  <meta name="description" content="Browse our full collection of handcrafted, natural soaps made with the finest ingredients." />
</svelte:head>

<div class="page-container">
  <div class="hero-section">
    <h1>Our Soap Collection</h1>
    <p class="subtitle">Handcrafted with natural ingredients for your skin's delight</p>
  </div>

  <section class="products-section">
    <div class="filters">
      <div class="cart-button-container">
        <button on:click={viewCart} class="view-cart-button">
          <span class="cart-icon">🛒</span>
          <span class="cart-count">{cart.length}</span>
        </button>
      </div>
    </div>

    <div class="product-grid">
      {#each products as product}
          <div class="product-card">
            <div class="product-image">
              <a href="/soap/{product.id}">
                <img src={product.imageUrl} alt={product.name} />
              </a>
            </div>
            <div class="product-content">
              <h3><a href="/soap/{product.id}">{product.name}</a></h3>
              <p class="product-description">{product.description}</p>
              <div class="product-details">
                <span class="product-colors">
                  {#each product.colors as color}
                    <span class="color-dot" style="background-color: {color};"></span>
                  {/each}
                </span>
                <span class="product-size">{product.size}</span>
              </div>
              <div class="product-footer">
                <span class="product-price">${product.price}</span>
                <button on:click={() => addToCart(product)} class="cart-button">Add to Cart</button>
              </div>
            </div>
          </div>
      {/each}
    </div>
  </section>
</div>

<style>
  .page-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .hero-section {
    text-align: center;
    margin-bottom: 3rem;
  }

  h1 {
    font-family: 'Righteous', 'Comfortaa', sans-serif;
    color: #4f9cba;
    font-size: 3rem;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }

  .filters {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 2rem;
  }

  .view-cart-button {
    background-color: #4f9cba;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 3px 10px rgba(79, 156, 186, 0.15);
    transition: all 0.3s ease;
  }
  
  .view-cart-button:hover {
    background-color: #3d7f9a;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(79, 156, 186, 0.25);
  }

  .cart-icon {
    font-size: 1.2rem;
  }

  .cart-count {
    background-color: white;
    color: #4f9cba;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: bold;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .product-card {
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(79, 156, 186, 0.07);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(79, 156, 186, 0.05);
  }

  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(79, 156, 186, 0.12);
  }

  .product-image {
    height: 250px;
    overflow: hidden;
  }

  .product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .product-card:hover .product-image img {
    transform: scale(1.05);
  }

  .product-content {
    padding: 1.5rem;
  }

  .product-description {
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .product-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .product-colors {
    display: flex;
    gap: 5px;
  }

  .color-dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: inline-block;
    border: 1px solid #e0e0e0;
  }

  .product-size {
    text-transform: uppercase;
    font-size: 0.8rem;
    background-color: #f0f8fb;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    color: #4f9cba;
  }

  .product-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .product-price {
    font-size: 1.3rem;
    font-weight: bold;
    color: #4f9cba;
  }
  
  .cart-button {
    padding: 0.6rem 1.2rem;
    border-radius: 20px;
    font-weight: 500;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    letter-spacing: 0.3px;
    background-color: #4f9cba;
    border: 1px solid #4f9cba;
    color: white;
    box-shadow: 0 3px 10px rgba(79, 156, 186, 0.15);
  }

  .cart-button:hover {
    background-color: #3d7f9a;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(79, 156, 186, 0.25);
  }

  @media (max-width: 768px) {
    .product-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 576px) {
    .product-grid {
      grid-template-columns: 1fr;
    }
  }
</style>