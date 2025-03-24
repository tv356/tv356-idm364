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
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>Soap Products</h1>

  <div class="grid">
    {#each products as product}
      <div class="product">
        <img src={product.imageUrl} alt={product.name} width="200" />
        <div class="body-wrapper">
          <h2><a href="/soap/{product.id}">{product.name}</a></h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <a href="/soap/{product.id}" class="detail-button">View Details</a>
          <button on:click={() => addToCart(product)} class="cart-button">Add to Cart</button>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .product {
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    transition: transform 0.2s;
  }

  .product:hover {
    transform: translateY(-5px);
  }

  .product .body-wrapper {
    padding: 10px;
  }

  .product img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .product h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-family: sans-serif;
  }

  .detail-button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
  }

  .cart-button {
    background-color: #008cba; /* white */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  h1 {
    width: 100%;
  }
</style>
