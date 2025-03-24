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
<<<<<<< HEAD
  <title>Đê Mê Soaps - Handcrafted Natural Soaps</title>
  <meta name="description" content="Discover our collection of handcrafted, natural soaps made with the finest ingredients for gentle, nourishing skincare." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&family=Lexend:wght@300;400;500;600&family=Quicksand:wght@300;400;500;600&family=Righteous&display=swap" rel="stylesheet">
=======
  <title>Pure Essence Soaps - Handcrafted Natural Soaps</title>
  <meta name="description" content="Discover our collection of handcrafted, natural soaps made with the finest ingredients for gentle, nourishing skincare." />
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
</svelte:head>

<div class="page-container">
  <div class="hero-banner">
    <div class="hero-content">
<<<<<<< HEAD
      <h1>Đê Mê Soaps</h1>
=======
      <h1>Pure Essence Soaps</h1>
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
      <p class="tagline">Handcrafted with natural ingredients for your skin's delight</p>
      <a href="#products-section" class="cta-button">Shop Now</a>
    </div>
  </div>

  <section class="featured-section">
<<<<<<< HEAD
    <div class="section-heading">
      <h2>Our Top 3 Ingredients</h2>
      <p>Explore our range, and find the perfect product to spark your senses.</p>
    </div>
    <div class="ingredients-grid">
      <div class="ingredient-card">
        <div class="ingredient-image">
          <img src="/api/placeholder/400/300" alt="Ginger ingredient" />
        </div>
        <div class="ingredient-content">
          <h3>Ginger</h3>
          <p>Invigorating and warming, our ginger-infused soaps enhance circulation and leave skin glowing.</p>
        </div>
      </div>
      <div class="ingredient-card">
        <div class="ingredient-image">
          <img src="/api/placeholder/400/300" alt="Perilla ingredient" />
        </div>
        <div class="ingredient-content">
          <h3>Perilla</h3>
          <p>Rich in antioxidants, perilla extract helps protect and nourish even the most sensitive skin.</p>
        </div>
      </div>
      <div class="ingredient-card">
        <div class="ingredient-image">
          <img src="/api/placeholder/400/300" alt="Sarsi Spice ingredient" />
        </div>
        <div class="ingredient-content">
          <h3>Sarsi Spice</h3>
          <p>Our signature blend with exotic sarsi creates an aromatic experience that soothes the mind and spirit.</p>
        </div>
      </div>
=======
    <div class="featured-wrapper">
      <div class="featured-text">
        <h2>Our Top 3 Ingredients</h2>
        <p>Explore our range, and find the perfect product to spark your senses.</p>
      </div>
      <div class="ingredients-grid">
        <div class="ingredient-item">
          <div class="ingredient-icon">🌿</div>
          <h3>Ginger</h3>
          <p>Invigorating and warming, our ginger-infused soaps enhance circulation and leave skin glowing.</p>
        </div>
        <div class="ingredient-item">
          <div class="ingredient-icon">🌱</div>
          <h3>Perilla</h3>
          <p>Rich in antioxidants, perilla extract helps protect and nourish even the most sensitive skin.</p>
        </div>
        <div class="ingredient-item">
          <div class="ingredient-icon">✨</div>
          <h3>Sarsi Spice</h3>
          <p>Our signature blend with exotic sarsi creates an aromatic experience that soothes the mind and spirit.</p>
        </div>
      </div>
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
    </div>
  </section>

  <section id="products-section" class="products-section">
    <h2>Our Soap Collection</h2>
    
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

  <section class="testimonials-section">
    <h2>Our Happy Customers</h2>
    <div class="customer-photos-grid">
      <div class="customer-photo">
        <img src="/api/placeholder/300/300" alt="Happy customer with soap" />
        <div class="customer-name">Sarah K.</div>
      </div>
      <div class="customer-photo">
        <img src="/api/placeholder/300/300" alt="Customer enjoying our products" />
        <div class="customer-name">James T.</div>
      </div>
      <div class="customer-photo">
        <img src="/api/placeholder/300/300" alt="Satisfied soap customer" />
        <div class="customer-name">Ava L.</div>
      </div>
      <div class="customer-photo">
        <img src="/api/placeholder/300/300" alt="Smiling customer with soap" />
        <div class="customer-name">Michael R.</div>
      </div>
    </div>
  </section>
  
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
<<<<<<< HEAD
        <h3>Đê Mê Soaps</h3>
=======
        <h3>Pure Essence Soaps</h3>
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
        <p>Handcrafted with love since 2018</p>
      </div>
      
      <div class="footer-nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
<<<<<<< HEAD
        <a href="/products">Products</a>
=======
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
      </div>
      
      <div class="footer-social">
        <div class="social-icons">
          <a href="#" aria-label="Instagram"><span class="icon">📷</span></a>
          <a href="#" aria-label="Facebook"><span class="icon">👍</span></a>
          <a href="#" aria-label="Pinterest"><span class="icon">📌</span></a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
<<<<<<< HEAD
      <p class="copyright">&copy; 2025 Đê Mê Soaps. All rights reserved.</p>
=======
      <p>&copy; 2025 Pure Essence Soaps. All rights reserved.</p>
      <p class="designer-credit">Designed by Cheryl Vo</p>
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
    </div>
  </footer>
</div>

<style>
  /* Basic Reset and Global Styles */
  :global(body) {
<<<<<<< HEAD
    font-family: 'Quicksand', 'Ubuntu', 'Montserrat', sans-serif;
=======
    font-family: 'Poppins', 'Montserrat', sans-serif;
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
    line-height: 1.6;
    color: #333333;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
  }

  .page-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1, h2, h3 {
<<<<<<< HEAD
    font-family: 'Righteous', 'Comfortaa', sans-serif;
    color: #4f9cba;
    margin: 0 0 1rem 0;
    letter-spacing: 0.5px;
=======
    font-family: 'Playfair Display', 'Poppins', sans-serif;
    color: #4f9cba;
    margin: 0 0 1rem 0;
    letter-spacing: -0.5px;
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.2rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  p {
    margin: 0 0 1.5rem 0;
  }

  a {
    color: #4f9cba;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  /* Hero Banner */
  .hero-banner {
    background-color: #e8f4f9;
    background-image: linear-gradient(rgba(232, 244, 249, 0.85), rgba(232, 244, 249, 0.85)), url('/api/placeholder/1200/500');
    background-size: cover;
    background-position: center;
    padding: 6rem 2rem;
    margin-bottom: 3rem;
    text-align: center;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(79, 156, 186, 0.05);
  }

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .tagline {
    font-size: 1.4rem;
    color: #8d7766;
    margin-bottom: 2rem;
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

  /* Featured Section */
  .featured-section {
<<<<<<< HEAD
    padding: 4rem 2rem;
    margin-bottom: 3rem;
  }

  .section-heading {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
  }

  .ingredients-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .ingredient-card {
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(79, 156, 186, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(79, 156, 186, 0.05);
  }

  .ingredient-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(79, 156, 186, 0.15);
  }

  .ingredient-image {
    height: 200px;
    overflow: hidden;
  }

  .ingredient-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .ingredient-card:hover .ingredient-image img {
    transform: scale(1.05);
  }

  .ingredient-content {
    padding: 1.5rem;
=======
    padding: 3rem 2rem;
    margin-bottom: 3rem;
  }

  .featured-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: center;
  }

  .featured-text {
    flex: 1;
    min-width: 300px;
  }

  .ingredients-grid {
    flex: 1;
    min-width: 300px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1.5rem;
  }

  .ingredient-item {
    background-color: #f0f8fb;
    padding: 1.8rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(79, 156, 186, 0.07);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(79, 156, 186, 0.03);
  }
  
  .ingredient-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(79, 156, 186, 0.12);
  }

  .ingredient-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
  }

  /* Products Section */
  .products-section {
    padding: 3rem 2rem;
    margin-bottom: 3rem;
  }

  .filters {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 2rem;
  }

  .view-cart-button {
<<<<<<< HEAD
    background-color: #4f9cba;
=======
    background-color: #5c4736;
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
<<<<<<< HEAD
    box-shadow: 0 3px 10px rgba(79, 156, 186, 0.15);
=======
    box-shadow: 0 3px 10px rgba(92, 71, 54, 0.15);
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
    transition: all 0.3s ease;
  }
  
  .view-cart-button:hover {
<<<<<<< HEAD
    background-color: #3d7f9a;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(79, 156, 186, 0.25);
=======
    background-color: #493827;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(92, 71, 54, 0.25);
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
  }

  .cart-icon {
    font-size: 1.2rem;
  }

  .cart-count {
    background-color: white;
<<<<<<< HEAD
    color: #4f9cba;
=======
    color: #5c4736;
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: bold;
  }

<<<<<<< HEAD
=======
  .no-results {
    text-align: center;
    padding: 3rem;
    background-color: #f0e9e2;
    border-radius: 8px;
  }

>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
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

  /* Testimonials Section */
  .testimonials-section {
    padding: 3rem 2rem;
    margin-bottom: 3rem;
    background-color: #f0f8fb;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(79, 156, 186, 0.05);
  }

  .customer-photos-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  .customer-photo {
    text-align: center;
  }

  .customer-photo img {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 12px;
<<<<<<< HEAD
    box-shadow: 0 5px 20px rgba(79, 156, 186, 0.1);
=======
    box-shadow: 0 5px 20px rgba(92, 71, 54, 0.1);
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
    transition: transform 0.3s ease;
  }

  .customer-photo:hover img {
    transform: scale(1.03);
  }

  .customer-name {
    margin-top: 1rem;
    font-weight: 500;
<<<<<<< HEAD
    color: #4f9cba;
  }

  /* Footer */
=======
    color: #5c4736;
  }

>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
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
  }

  .footer-logo h3 {
    margin-bottom: 0.5rem;
<<<<<<< HEAD
    font-family: 'Righteous', 'Comfortaa', sans-serif;
=======
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
  }
  
  .footer-nav {
    display: flex;
    gap: 2rem;
  }
  
  .footer-nav a {
    color: #4f9cba;
    font-weight: 500;
    transition: color 0.3s ease;
<<<<<<< HEAD
    position: relative;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
=======
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
  }
  
  .footer-nav a:hover {
    color: #3d7f9a;
    text-decoration: none;
  }
<<<<<<< HEAD
  
  .footer-nav a:hover::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #4f9cba;
  }
=======
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416

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
<<<<<<< HEAD
    justify-content: center;
=======
    justify-content: space-between;
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
    align-items: center;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(79, 156, 186, 0.1);
    font-size: 0.9rem;
    color: #666;
  }
  
<<<<<<< HEAD
  .copyright {
    text-align: center;
=======
  .designer-credit {
    font-style: italic;
    color: #4f9cba;
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .hero-banner {
      padding: 4rem 1.5rem;
    }

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.8rem;
    }

<<<<<<< HEAD
    .ingredients-grid {
      grid-template-columns: repeat(2, 1fr);
=======
    .featured-wrapper {
      flex-direction: column;
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
    }

    .product-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .cart-button-container {
      display: flex;
      justify-content: flex-end;
    }
    
    .customer-photos-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .footer-content {
      flex-direction: column;
      gap: 2rem;
<<<<<<< HEAD
      align-items: center;
      text-align: center;
=======
      align-items: flex-start;
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
    }
    
    .footer-bottom {
      flex-direction: column;
      gap: 1rem;
<<<<<<< HEAD
=======
      text-align: center;
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
    }
  }
  
  @media (max-width: 576px) {
<<<<<<< HEAD
    .ingredients-grid {
      grid-template-columns: 1fr;
    }
    
=======
>>>>>>> 1f513258ca0e609392da10b286ee9285e21af416
    .product-grid {
      grid-template-columns: 1fr;
    }
    
    .customer-photos-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }
</style>