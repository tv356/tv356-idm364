<script>
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let cart = [];
  let subTotal = 0;
  let shippingCost = 5.99;
  let total = 0;

  onMount(() => {
    if (browser) {
      loadCart();
    }
  });

  function loadCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    calculateTotals();
  }

  function calculateTotals() {
    subTotal = cart.reduce((sum, item) => sum + item.price, 0);
    total = subTotal + shippingCost;
  }

  function removeItem(index) {
    cart.splice(index, 1);
    cart = [...cart]; // Trigger reactivity
    if (browser) {
      localStorage.setItem('cart', JSON.stringify(cart));
      calculateTotals();
    }
  }

<<<<<<< HEAD
  function clearCart() {
    cart = [];
    if (browser) {
      localStorage.setItem('cart', JSON.stringify(cart));
      calculateTotals();
    }
  }

  function checkout() {
    alert('Thank you for your order! This would normally proceed to payment processing.');
    clearCart();
    goto('/');
  }
=======
  $: total = cart.reduce((sum, item) => sum + item.price, 0);
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
</script>

<svelte:head>
  <title>Shopping Cart - Đê Mê Soaps</title>
  <meta name="description" content="Review and complete your order of handcrafted soaps." />
</svelte:head>

<div class="page-container">
  <div class="hero-section">
    <h1>Your Shopping Cart</h1>
    <p class="subtitle">Review your items and complete your purchase</p>
  </div>

  <section class="cart-section">
    {#if cart.length === 0}
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added any items to your cart yet.</p>
        <a href="/products" class="cta-button">Browse Products</a>
      </div>
    {:else}
      <div class="cart-layout">
        <div class="cart-items">
          <div class="cart-header">
            <span class="product-col">Product</span>
            <span class="price-col">Price</span>
            <span class="action-col">Action</span>
          </div>
          
          {#each cart as item, index}
            <div class="cart-item">
              <div class="product-col">
                <div class="product-image">
                  <img src={item.imageUrl} alt={item.name} />
                </div>
                <div class="product-info">
                  <h3>{item.name}</h3>
                  <p class="product-size">Size: {item.size}</p>
                  <div class="product-colors">
                    {#each item.colors as color}
                      <span class="color-dot" style="background-color: {color};"></span>
                    {/each}
                  </div>
                </div>
              </div>
              <div class="price-col">
                ${item.price.toFixed(2)}
              </div>
              <div class="action-col">
                <button class="remove-button" on:click={() => removeItem(index)}>
                  Remove
                </button>
              </div>
            </div>
          {/each}
          
          <div class="cart-actions">
            <button class="clear-button" on:click={clearCart}>Clear Cart</button>
            <a href="/products" class="continue-shopping">Continue Shopping</a>
          </div>
        </div>
        
        <div class="cart-summary">
          <h2>Order Summary</h2>
          <div class="summary-row">
            <span>Subtotal</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div class="summary-row">
            <span>Shipping</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div class="summary-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button class="checkout-button" on:click={checkout}>
            Proceed to Checkout
          </button>
          <div class="payment-methods">
            <p>We accept:</p>
            <div class="payment-icons">
              <span class="payment-icon">💳</span>
              <span class="payment-icon">💰</span>
              <span class="payment-icon">🏦</span>
            </div>
          </div>
        </div>
      </div>
    {/if}
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

  h2 {
    font-family: 'Righteous', 'Comfortaa', sans-serif;
    color: #4f9cba;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    letter-spacing: 0.5px;
  }

  h3 {
    font-family: 'Righteous', 'Comfortaa', sans-serif;
    color: #333;
    font-size: 1.3rem;
    margin: 0 0 0.5rem 0;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }

  /* Empty Cart State */
  .empty-cart {
    text-align: center;
    padding: 4rem 2rem;
    background-color: #f0f8fb;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(79, 156, 186, 0.05);
  }

  .empty-cart-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: #4f9cba;
  }

  .empty-cart p {
    margin-bottom: 2rem;
    color: #666;
  }

  .cta-button {
    display: inline-block;
    background-color: #4f9cba;
    color: white;
    padding: 0.8rem 1.8rem;
    border-radius: 30px;
    font-weight: 500;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    text-decoration: none;
    letter-spacing: 0.5px;
    box-shadow: 0 5px 15px rgba(79, 156, 186, 0.2);
  }

  .cta-button:hover {
    background-color: #3d7f9a;
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(79, 156, 186, 0.3);
  }

  /* Cart Layout */
  .cart-layout {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }

  /* Cart Items */
  .cart-items {
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(79, 156, 186, 0.07);
  }

  .cart-header {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    padding: 1rem 1.5rem;
    background-color: #f0f8fb;
    font-weight: 600;
    color: #4f9cba;
    border-bottom: 1px solid rgba(79, 156, 186, 0.1);
  }

  .cart-item {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    padding: 1.5rem;
    border-bottom: 1px solid rgba(79, 156, 186, 0.1);
    align-items: center;
  }

  .product-col {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .product-image {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    overflow: hidden;
  }

  .product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product-size {
    color: #666;
    margin-bottom: 0.5rem;
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

  .price-col {
    font-weight: 600;
    font-size: 1.1rem;
    color: #4f9cba;
  }

  .remove-button {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    background-color: transparent;
    border: 1px solid #f44336;
    color: #f44336;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .remove-button:hover {
    background-color: #f44336;
    color: white;
  }

  .cart-actions {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    border-top: 1px solid rgba(79, 156, 186, 0.1);
  }

  .clear-button {
    padding: 0.6rem 1.2rem;
    border-radius: 20px;
    background-color: transparent;
    border: 1px solid #666;
    color: #666;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .clear-button:hover {
    background-color: #666;
    color: white;
  }

  .continue-shopping {
    padding: 0.6rem 1.2rem;
    border-radius: 20px;
    background-color: transparent;
    border: 1px solid #4f9cba;
    color: #4f9cba;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
  }

  .continue-shopping:hover {
    background-color: #f0f8fb;
    text-decoration: none;
  }

  /* Cart Summary */
  .cart-summary {
    background-color: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 5px 20px rgba(79, 156, 186, 0.07);
    align-self: start;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(79, 156, 186, 0.1);
  }

  .summary-row.total {
    font-weight: 700;
    font-size: 1.2rem;
    color: #4f9cba;
    border-bottom: none;
    padding-bottom: 1.5rem;
  }

  .checkout-button {
    width: 100%;
    padding: 1rem;
    border-radius: 30px;
    background-color: #4f9cba;
    color: white;
    border: none;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(79, 156, 186, 0.2);
    margin-bottom: 1.5rem;
  }

  .checkout-button:hover {
    background-color: #3d7f9a;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(79, 156, 186, 0.3);
  }

  .payment-methods {
    text-align: center;
  }

  .payment-methods p {
    color: #666;
    margin-bottom: 0.5rem;
  }

  .payment-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .payment-icon {
    font-size: 1.5rem;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .cart-layout {
      grid-template-columns: 1fr;
    }
    
    .cart-header {
      display: none;
    }
    
    .cart-item {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .product-col {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
    
    .product-image {
      width: 150px;
      height: 150px;
      margin: 0 auto;
    }
    
    .price-col, .action-col {
      text-align: center;
    }
  }
</style>