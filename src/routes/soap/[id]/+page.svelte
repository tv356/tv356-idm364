<script>
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  
  export let data;
  
  let cart = [];
  let selectedColor = data.product?.colors?.[0] || '';
  
  onMount(() => {
    if (browser) {
      cart = JSON.parse(localStorage.getItem('cart')) || [];
    }
    
    if (data.product?.colors?.length > 0) {
      selectedColor = data.product.colors[0];
    }
  });

  function addToCart() {
    const productToAdd = { ...data.product };
    cart = [...cart, productToAdd];
    if (browser) {
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');
    }
  }

  function viewCart() {
    goto('/order');
  }
</script>

<svelte:head>
  <title>{data.product ? data.product.name : 'Product'} - Đê Mê Soaps</title>
  <meta name="description" content={data.product ? data.product.description : 'Product details'} />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&family=Lexend:wght@300;400;500;600&family=Quicksand:wght@300;400;500;600&family=Righteous&display=swap" rel="stylesheet">
</svelte:head>

<div class="page-container">
  {#if data.product}
    <div class="breadcrumbs">
      <a href="/">Home</a> &gt; 
      <a href="/products">Products</a> &gt; 
      <span>{data.product.name}</span>
    </div>
    
    <div class="product-detail">
      <div class="product-images">
        <div class="main-image">
          <img src={data.product.imageUrl} alt={data.product.name} />
        </div>
      </div>
      
      <div class="product-info">
        <h1>{data.product.name}</h1>
        
        <div class="product-price">
          ${data.product.price.toFixed(2)}
        </div>
        
        <div class="product-description">
          <p>{data.product.description}</p>
        </div>
        
        <div class="product-attributes">
          <div class="product-colors">
            <h3>Colors</h3>
            <div class="color-options">
              {#each data.product.colors as color}
                <button 
                  class="color-option" 
                  class:selected={selectedColor === color}
                  style="background-color: {color};" 
                  on:click={() => selectedColor = color}
                  aria-label={`Select ${color} color`}
                ></button>
              {/each}
            </div>
          </div>
          
          <div class="product-size">
            <h3>Size</h3>
            <div class="size-badge">{data.product.size}</div>
          </div>
        </div>
        
        <div class="product-materials">
          <h3>Materials</h3>
          <ul>
            {#each data.product.materials as material}
              <li>{material}</li>
            {/each}
          </ul>
        </div>
        
        <div class="product-care">
          <h3>Care Instructions</h3>
          <p>{data.product.careInstructions}</p>
        </div>
        
        <div class="product-actions">
          <button class="add-to-cart" on:click={addToCart}>
            Add to Cart
          </button>
          <button class="view-cart" on:click={viewCart}>
            View Cart
          </button>
        </div>
      </div>
    </div>
    
    <div class="product-details-tabs">
      <div class="tabs">
        <button class="tab active">Description</button>
        <button class="tab">Ingredients</button>
        <button class="tab">Reviews</button>
      </div>
      
      <div class="tab-content">
        <div class="tab-panel active">
          <h2>About {data.product.name}</h2>
          <p>{data.product.description}</p>
          <p>Our soaps are handcrafted with care using traditional cold-process methods. Each bar is unique and made with the finest natural ingredients to ensure a luxurious bathing experience.</p>
          
          <div class="features">
            <div class="feature">
              <div class="feature-icon">🌿</div>
              <h4>Natural Ingredients</h4>
              <p>Made with plant-based oils and botanicals</p>
            </div>
            
            <div class="feature">
              <div class="feature-icon">🧪</div>
              <h4>No Harsh Chemicals</h4>
              <p>Free from SLS, parabens, and synthetic fragrances</p>
            </div>
            
            <div class="feature">
              <div class="feature-icon">🌍</div>
              <h4>Eco-Friendly</h4>
              <p>Sustainable practices and minimal packaging</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="customer-testimonials">
      <h2>What Our Customers Say</h2>
      <div class="testimonials-grid">
        <div class="testimonial">
          <div class="testimonial-content">
            <p>"Absolutely love this soap! The scent is divine and it leaves my skin feeling so soft and nourished."</p>
            <div class="testimonial-author">— Sarah K.</div>
          </div>
        </div>
        <div class="testimonial">
          <div class="testimonial-content">
            <p>"I've tried many natural soaps, but this one stands out. The quality is exceptional and the ingredients are truly natural."</p>
            <div class="testimonial-author">— James T.</div>
          </div>
        </div>
        <div class="testimonial">
          <div class="testimonial-content">
            <p>"This has become my favorite soap. The fragrance is subtle yet lovely, and it lasts much longer than other bars I've used."</p>
            <div class="testimonial-author">— Ava L.</div>
          </div>
        </div>
      </div>
    </div>
  {:else}
    <div class="product-not-found">
      <h1>Product Not Found</h1>
      <p>We couldn't find the product you're looking for.</p>
      <a href="/products" class="cta-button">Browse Our Products</a>
    </div>
  {/if}
</div>

<footer class="footer">
  <div class="footer-content">
    <div class="footer-logo">
      <h3>Đê Mê Soaps</h3>
      <p>Handcrafted with love since 2018</p>
    </div>
    
    <div class="footer-nav">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/products">Products</a>
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
    <p class="copyright">&copy; 2025 Đê Mê Soaps. All rights reserved.</p>
  </div>
</footer>

<style>
  /* Basic styling */
  .page-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Quicksand', 'Ubuntu', 'Montserrat', sans-serif;
  }
  
  h1, h2, h3, h4 {
    font-family: 'Righteous', 'Comfortaa', sans-serif;
    color: #4f9cba;
    margin: 0 0 1rem 0;
    letter-spacing: 0.5px;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
  
  p {
    margin: 0 0 1.5rem 0;
    line-height: 1.6;
  }
  
  a {
    color: #4f9cba;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  a:hover {
    color: #3d7f9a;
  }
  
  /* Breadcrumbs */
  .breadcrumbs {
    margin-bottom: 2rem;
    font-size: 0.9rem;
    color: #666;
  }
  
  .breadcrumbs a {
    margin-right: 0.5rem;
  }
  
  .breadcrumbs span {
    color: #333;
  }
  
  /* Product Detail Layout */
  .product-detail {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-bottom: 4rem;
  }
  
  /* Product Images */
  .product-images {
    position: relative;
  }
  
  .main-image {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(79, 156, 186, 0.1);
  }
  
  .main-image img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }
  
  .main-image:hover img {
    transform: scale(1.03);
  }
  
  /* Product Info */
  .product-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .product-price {
    font-size: 2rem;
    font-weight: 700;
    color: #4f9cba;
  }
  
  .product-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
  }
  
  /* Product Attributes */
  .product-attributes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 1rem;
  }
  
  .color-options {
    display: flex;
    gap: 0.8rem;
  }
  
  .color-option {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #eee;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .color-option:hover, .color-option.selected {
    transform: scale(1.2);
    border-color: #4f9cba;
  }
  
  .size-badge {
    display: inline-block;
    padding: 0.4rem 1rem;
    background-color: #f0f8fb;
    color: #4f9cba;
    border-radius: 20px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.9rem;
  }
  
  /* Materials & Care */
  .product-materials ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .product-materials li {
    background-color: #f0f8fb;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
  }
  
  .product-care {
    padding: 1.2rem;
    border-radius: 8px;
    background-color: #f9f9f9;
    border-left: 3px solid #4f9cba;
  }
  
  .product-care p {
    margin-bottom: 0;
  }
  
  /* Action Buttons */
  .product-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .add-to-cart, .view-cart {
    padding: 1rem 2rem;
    border-radius: 30px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
  }
  
  .add-to-cart {
    background-color: #4f9cba;
    color: white;
    border: none;
    flex: 2;
    box-shadow: 0 5px 15px rgba(79, 156, 186, 0.2);
  }
  
  .add-to-cart:hover {
    background-color: #3d7f9a;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(79, 156, 186, 0.3);
  }
  
  .view-cart {
    background-color: transparent;
    border: 1px solid #4f9cba;
    color: #4f9cba;
    flex: 1;
  }
  
  .view-cart:hover {
    background-color: #f0f8fb;
  }
  
  /* Tabs */
  .product-details-tabs {
    margin-bottom: 4rem;
  }
  
  .tabs {
    display: flex;
    gap: 0.5rem;
    border-bottom: 1px solid #eee;
    margin-bottom: 2rem;
  }
  
  .tab {
    padding: 1rem 1.5rem;
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    font-family: 'Quicksand', 'Ubuntu', 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #666;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .tab:hover {
    color: #4f9cba;
  }
  
  .tab.active {
    color: #4f9cba;
    border-bottom-color: #4f9cba;
  }
  
  .tab-panel {
    display: none;
  }
  
  .tab-panel.active {
    display: block;
  }
  
  /* Features */
  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2.5rem;
  }
  
  .feature {
    text-align: center;
    padding: 1.5rem;
    border-radius: 12px;
    background-color: #f0f8fb;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .feature:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(79, 156, 186, 0.12);
  }
  
  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .feature h4 {
    margin-bottom: 0.5rem;
  }
  
  .feature p {
    margin-bottom: 0;
    font-size: 0.9rem;
  }
  
  /* Customer Testimonials */
  .customer-testimonials {
    margin-bottom: 4rem;
  }
  
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .testimonial {
    background-color: white;
    border-radius: 12px;
    padding: 1.8rem;
    box-shadow: 0 5px 20px rgba(79, 156, 186, 0.07);
    border: 1px solid rgba(79, 156, 186, 0.03);
  }

  .testimonial-content p {
    font-style: italic;
    margin-bottom: 1rem;
  }

  .testimonial-author {
    font-weight: 600;
    color: #4f9cba;
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
    font-family: 'Righteous', 'Comfortaa', sans-serif;
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
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
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
  
  /* Product Not Found */
  .product-not-found {
    text-align: center;
    padding: 4rem 2rem;
    background-color: #f0f8fb;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(79, 156, 186, 0.05);
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
    margin-top: 1rem;
  }
  
  .cta-button:hover {
    background-color: #3d7f9a;
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(79, 156, 186, 0.3);
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .product-detail {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .product-attributes {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .features {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .testimonials-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
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
    .product-actions {
      flex-direction: column;
    }
  }
</style>