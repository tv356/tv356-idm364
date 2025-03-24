<script>
  import { products } from '$lib/products.js';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

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

  // Featured products (top 3)
  $: featuredProducts = products.slice(0, 3);
</script>

<svelte:head>
  <title>Đê Mê - Artisan Natural Soap Collection</title>
  <meta name="description" content="Discover our handcrafted, natural soaps made with premium ingredients for gentle, nourishing skincare." />
</svelte:head>

<header>
  <div class="logo">
    <a href="/">Đê Mê</a>
  </div>
  
  <nav>
    <a href="/" class:active={$page.url.pathname === '/'}>Home</a>
    <a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
    <a href="/products" class:active={$page.url.pathname === '/products'}>Products</a>
  </nav>
  
  <div class="cart">
    <a href="/order">🛒 Cart ({cart.length})</a>
  </div>
</header>

<div class="home-container">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-content">
      <h1>Đê Mê Soap Artistry</h1>
      <p class="hero-subtitle">Crafting Moments of Pure Sensory Delight</p>
      <div class="hero-ctas">
        <a href="#featured-products" class="primary-cta">Explore Collection</a>
        <a href="/about" class="secondary-cta">Our Story</a>
      </div>
    </div>
  </section>

  <!-- Ingredients Showcase -->
  <section class="ingredients-section">
    <div class="section-heading">
      <h2>Our Signature Ingredients</h2>
      <p>Carefully selected natural elements that transform your skincare routine</p>
    </div>
    <div class="ingredients-grid">
      <div class="ingredient-card">
        <div class="ingredient-icon">🌿</div>
        <h3>Ginger</h3>
        <p>Invigorating essence that enhances circulation and revitalizes skin</p>
      </div>
      <div class="ingredient-card">
        <div class="ingredient-icon">🍃</div>
        <h3>Perilla</h3>
        <p>Antioxidant-rich extract that protects and nourishes sensitive skin</p>
      </div>
      <div class="ingredient-card">
        <div class="ingredient-icon">✨</div>
        <h3>Sarsi Spice</h3>
        <p>Exotic blend creating a soothing, aromatic sensory experience</p>
      </div>
    </div>
  </section>

  <!-- Featured Products -->
  <section id="featured-products" class="featured-products-section">
    <div class="section-heading">
      <h2>Featured Soaps</h2>
      <p>Discover our most beloved creations</p>
    </div>
    <div class="product-grid">
      {#each featuredProducts as product}
        <div class="product-card">
          <div class="product-image">
            <a href="/soap/{product.id}">
              <img src={product.imageUrl} alt={product.name} />
            </a>
            <button 
              class="quick-add-btn" 
              on:click={() => addToCart(product)}
            >
              Quick Add +
            </button>
          </div>
          <div class="product-details">
            <h3>{product.name}</h3>
            <div class="product-meta">
              <span class="product-price">${product.price}</span>
              <span class="product-size">{product.size}</span>
            </div>
            <div class="product-colors">
              {#each product.colors as color}
                <span 
                  class="color-dot" 
                  style="background-color: {color};"
                ></span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
    <div class="view-all-products">
      <a href="/products" class="view-all-btn">View All Products</a>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="testimonials-section">
    <div class="section-heading">
      <h2>What Our Customers Say</h2>
      <p>Real experiences from our soap enthusiasts</p>
    </div>
    <div class="testimonials-grid">
      <div class="testimonial-card">
        <p>"These soaps are a game-changer for my skincare routine. So gentle and luxurious!"</p>
        <div class="testimonial-author">
          <span class="author-name">Sarah K.</span>
        </div>
      </div>
      <div class="testimonial-card">
        <p>"I love the natural ingredients and how amazing my skin feels after using these soaps."</p>
        <div class="testimonial-author">
          <span class="author-name">Michael R.</span>
        </div>
      </div>
      <div class="testimonial-card">
        <p>"The attention to detail and craftsmanship is incredible. Truly a premium product."</p>
        <div class="testimonial-author">
          <span class="author-name">Emma L.</span>
        </div>
      </div>
    </div>
  </section>
</div>

<footer class="footer">
  <div class="footer-content">
    <div class="footer-logo">
      <h3>Đê Mê</h3>
      <p>Handcrafted with love since 2018</p>
    </div>
    
    <div class="footer-nav">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/products">Products</a>
    </div>
    
    <div class="footer-social">
      <div class="social-icons">
        <a href="javascript:void(0)" aria-label="Instagram"><span class="icon">📷</span></a>
        <a href="javascript:void(0)" aria-label="Facebook"><span class="icon">👍</span></a>
        <a href="javascript:void(0)" aria-label="Pinterest"><span class="icon">📌</span></a>
      </div>
    </div>
  </div>
  
  <div class="footer-bottom">
    <p class="copyright">&copy; 2025 Đê Mê. All rights reserved.</p>
  </div>
</footer>

<style>
  /* Header Styles */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 100%;
    max-width: 100%;
    overflow: visible;
    position: static;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  header a {
    text-decoration: none;
    color: #4f9cba;
    position: relative;
    font-weight: 500;
  }

  .active {
    font-weight: bold;
  }

  .logo a {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Playfair Display', 'Poppins', sans-serif;
    color: #4f9cba;
  }

  /* Global Styles */
  .home-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .section-heading {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .section-heading h2 {
    font-family: 'Playfair Display', 'Poppins', sans-serif;
    font-size: 2.2rem;
    color: #4f9cba;
    margin-bottom: 0.5rem;
  }

  .section-heading p {
    color: #666;
    font-size: 1.1rem;
  }

  /* Hero Section */
  .hero-section {
    background: linear-gradient(135deg, #e8f4f9 0%, #f0f8fb 100%);
    padding: 6rem 2rem;
    text-align: center;
    border-radius: 16px;
    margin-top: 2rem;
    margin-bottom: 4rem;
    position: relative;
    overflow: hidden;
  }

  .hero-content {
    position: relative;
    z-index: 2;
  }

  .hero-section h1 {
    font-family: 'Righteous', 'Comfortaa', sans-serif;
    font-size: 3.5rem;
    color: #4f9cba;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1.4rem;
    color: #666;
    margin-bottom: 2rem;
  }

  .hero-ctas {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .primary-cta, .secondary-cta {
    display: inline-block;
    padding: 0.8rem 1.8rem;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .primary-cta {
    background-color: #4f9cba;
    color: white;
    box-shadow: 0 5px 15px rgba(79, 156, 186, 0.3);
  }

  .secondary-cta {
    background-color: transparent;
    color: #4f9cba;
    border: 2px solid #4f9cba;
  }

  .primary-cta:hover {
    background-color: #3d7f9a;
    transform: translateY(-3px);
  }

  .secondary-cta:hover {
    background-color: rgba(79, 156, 186, 0.1);
  }

  /* Ingredients Section */
  .ingredients-section {
    margin-bottom: 4rem;
  }

  .ingredients-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .ingredient-card {
    background-color: #f0f8fb;
    padding: 2rem;
    text-align: center;
    border-radius: 12px;
    transition: transform 0.3s ease;
  }

  .ingredient-card:hover {
    transform: translateY(-5px);
  }

  .ingredient-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #4f9cba;
  }

  .ingredient-card h3 {
    color: #4f9cba;
    margin-bottom: 0.5rem;
  }

  /* Featured Products Section */
  .featured-products-section {
    margin-bottom: 4rem;
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
    box-shadow: 0 5px 20px rgba(79, 156, 186, 0.1);
    transition: transform 0.3s ease;
    position: relative;
  }

  .product-card:hover {
    transform: translateY(-5px);
  }

  .product-image {
    position: relative;
    overflow: hidden;
  }

  .product-image img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
    max-height: 300px;
    transition: transform 0.3s ease;
  }

  .quick-add-btn {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(79, 156, 186, 0.9);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
    cursor: pointer;
  }

  .product-card:hover .quick-add-btn {
    opacity: 1;
  }

  .product-details {
    padding: 1.5rem;
  }

  .product-details h3 {
    color: #4f9cba;
    margin-bottom: 0.5rem;
  }

  .product-meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .product-price {
    font-weight: bold;
    color: #4f9cba;
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

  .view-all-products {
    text-align: center;
    margin-top: 2rem;
  }

  .view-all-btn {
    display: inline-block;
    padding: 0.8rem 1.8rem;
    background-color: #4f9cba;
    color: white;
    text-decoration: none;
    border-radius: 30px;
    transition: all 0.3s ease;
  }

  .view-all-btn:hover {
    background-color: #3d7f9a;
    transform: translateY(-3px);
  }

  /* Testimonials Section */
  .testimonials-section {
    background-color: #f0f8fb;
    padding: 4rem 2rem;
    border-radius: 16px;
    margin-bottom: 4rem;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .testimonial-card {
    background-color: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(79, 156, 186, 0.1);
  }

  .testimonial-author {
    margin-top: 1rem;
    text-align: right;
    color: #4f9cba;
    font-weight: 500;
  }

  /* Footer */
  .footer {
    background-color: #f0f8fb;
    padding: 4rem 2rem 1.5rem;
    margin-top: 4rem;
    border-radius: 12px 12px 0 0;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .footer-logo h3 {
    margin-bottom: 0.5rem;
    font-family: 'Playfair Display', 'Poppins', sans-serif;
    color: #4f9cba;
    font-size: 1.4rem;
    margin-top: 0;
  }
  
  .footer-logo p {
    margin: 0;
    color: #666;
  }
  
  .footer-nav {
    display: flex;
    gap: 2rem;
  }
  
  .footer-nav a {
    color: #4f9cba;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    text-decoration: none;
  }
  
  .footer-nav a:hover {
    color: #3d7f9a;
    text-decoration: none;
  }
  
  .footer-nav a:hover::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #4f9cba;
  }

  .social-icons {
    display: flex;
    gap: 1.2rem;
  }

  .social-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 3px 10px rgba(79, 156, 186, 0.1);
    text-decoration: none;
  }

  .social-icons a:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(79, 156, 186, 0.15);
  }

  .icon {
    font-size: 1.2rem;
  }

  .footer-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(79, 156, 186, 0.1);
    font-size: 0.9rem;
    color: #666;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .copyright {
    text-align: center;
  }

  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    .product-grid,
    .ingredients-grid,
    .testimonials-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .hero-section h1 {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 768px) {
    .product-grid,
    .ingredients-grid,
    .testimonials-grid {
      grid-template-columns: 1fr;
    }

    .hero-section {
      padding: 4rem 1rem;
    }

    .hero-section h1 {
      font-size: 2.5rem;
    }

    .hero-ctas {
      flex-direction: column;
    }
    
    .footer-content {
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      text-align: center;
    }
    
    .footer-bottom {
      flex-direction: column;
      gap: 1rem;
    }
  }
  
  @media (max-width: 576px) {
    header {
      flex-direction: column;
      gap: 1rem;
      padding: 1rem 0.5rem;
    }
  }
</style>