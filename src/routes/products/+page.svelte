<script>
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    
    export let data;
    
    let cart = [];
    let filterCategory = 'all';
    let searchQuery = '';
    let sortOrder = 'featured';
    
    let products = [
        {
    id: 1,
    name: 'Soap Lavender Dreams',
    description: 'Calming lavender soap with hints of chamomile for a soothing bathing experience.',
    price: 8.99,
    size: 'Medium (100gr)',
    imageUrl: 'https://vocsaigon.com/assets/images/nature1.png',
    colors: ['brown', 'pink', 'white'],
    materials: ['cotton'],
    careInstructions: 'Store in a cool, dry place. Use with warm water.'
  },
  {
    id: 2,
    name: 'Soap Citrus Burst',
    description: 'Energizing soap blend with orange, lemon and grapefruit essential oils.',
    price: 8.99,
    size: 'Medium (100gr)',
    imageUrl: 'https://vocsaigon.com/assets/images/nature10.png',
    colors: ['white', 'white', 'green'],
    materials: ['wool'],
    careInstructions: 'Store in a cool, dry place. Use with warm water.'
  },
  {
    id: 3,
    name: 'Soap Ocean Breeze',
    description: 'Refreshing soap that captures the essence of sea air and coastal relaxation.',
    price: 8.99,
    size: 'Medium (100gr)',
    imageUrl: 'https://vocsaigon.com/assets/images/nature11.png',
    colors: ['yellow', 'pink', 'white'],
    materials: ['acrylic'],
    careInstructions: 'Store in a cool, dry place. Use with warm water.'
  },
  {
    id: 4,
    name: 'Soap Honey',
    description: 'Gentle exfoliating soap perfect for sensitive skin with natural oats and honey.',
    price: 8.99,
    size: 'Small (80gr)',
    imageUrl: 'https://vocsaigon.com/assets/images/nature12.png',
    colors: ['white', 'brown', 'yellow'],
    materials: ['wool'],
    careInstructions: 'Store in a cool, dry place. Use with warm water..'
  },
  {
    id: 5,
    name: 'Soap Oatmeal',
    description: 'Invigorating soap that clears the senses with powerful eucalyptus and mint.',
    price: 8.99,
    size: 'Small (80gr)',
    imageUrl: 'https://vocsaigon.com/assets/images/nature2.png',
    colors: ['white', 'yellow', 'white'],
    materials: ['cotton'],
    careInstructions: 'Store in a cool, dry place. Use with warm water.'
  },
  {
    id: 6,
    name: 'Soap Ginger',
    description: 'Deep cleansing soap with activated charcoal to pull impurities from the skin.',
    price: 8.99,
    size: 'Medium (100gr)',
    imageUrl: 'https://karigran.com/cdn/shop/products/IMG_0011_2000x.jpg?v=1623188554',
    colors: ['brown', 'beige', 'white'],
    materials: ['cotton'],
    careInstructions: 'Store in a cool, dry place. Use with warm water.'
  },
  {
    id: 7,
    name: 'Soap Flowers',
    description:
      'Warm and comforting soap with real vanilla bean and creamy undertones.',
    price: 8.99,
    size: 'Small (80gr)',
    imageUrl: 'https://static01.nyt.com/images/2018/07/25/t-magazine/entertainment/25tmag-soap-01/25tmag-soap-01-superJumbo.jpg',
    colors: ['white', 'orange', 'yellow'],
    materials: ['acrylic'],
    careInstructions: 'Store in a cool, dry place. Use with warm water.'
  },
  {
    id: 8,
    name: 'Soap Rose',
    description: 'Luxurious floral soap made with real rose petals and rose essential oil.',
    price: 8.99,
    size: 'newborn',
    imageUrl: 'https://media.post.rvohealth.io/wp-content/uploads/2021/04/sudsy-bar-soap-732x549-thumbnail-732x549.jpg',
    colors: ['pink', 'white',],
    materials: ['cotton'],
    careInstructions: 'Store in a cool, dry place. Use with warm water..'
  },
  {
    id: 9,
    name: 'Soap Salt',
    description: 'Rustic soap that brings the fresh scent of pine forests to your bathroom.',
    price: 8.99,
    size: 'Small (80gr)',
    imageUrl: 'https://thenerdyfarmwife.com/wp-content/uploads/2022/03/Oatmeal-Honey-Soap-3-22.jpg',
    colors: ['white', 'green', 'yellow'],
    materials: ['cotton'],
    careInstructions: 'Store in a cool, dry place. Use with warm water.'
  },
  {
    id: 10,
    name: 'Soap Daisy',
    description:
      'Bright, uplifting soap with the fresh scent of lemongrass and citrus notes.',
    price: 8.99,
    size: 'Small (80gr)',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4WJRRC99mnpweTmWUFYdjxhJcF2GynTrTOQ&s',
    colors: ['yellow', 'pink', 'white'],
    materials: ['acrylic'],
    careInstructions: 'Store in a cool, dry place. Use with warm water.'
  },
  {
    id: 11,
    name: 'Soap Coffee',
    description: 'Exfoliating soap made with real coffee grounds to invigorate and smooth skin.',
    price: 8.99,
    size: 'Small (80gr)',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuaJ3U0xt6jX-tiG-xxByDRtcs9ZNKv3Hpw&s',
    colors: ['brown', 'white', 'yellow'],
    materials: ['cotton'],
    careInstructions: 'Store in a cool, dry place. Use with warm water..'
  },
  {
    id: 12,
    name: 'Soap Candy Cane',
    description:
      'Ultra-moisturizing soap that leaves skin feeling soft and nourished.',
    price: 8.99,
    size: 'Medium (100gr)',
    imageUrl: 'https://www.rockymountainsoap.com/cdn/shop/files/RMSC-Fall2023-915-Edit_1200x.jpg?v=1723686098',
    colors: ['beige', 'cream', 'white'],
    materials: ['cotton'],
    careInstructions: 'Store in a cool, dry place. Use with warm water., lay flat to dry.'
  },
  {
    id: 13,
    name: 'Soap Sakura Blossom',
    description:
      'Rich, woody soap with authentic sandalwood oil for an exotic bathing experience.',
    price: 8.99,
    size: 'Medium (100gr)',
    imageUrl: 'https://www.simula.ph/cdn/shop/products/image_907e9548-830f-4fef-ade1-e69cd994dca3.jpg?v=1678589243',
    colors: ['teal', 'white', 'green'],
    materials: ['acrylic'],
    careInstructions: 'Store in a cool, dry place. Use with warm water.'
  },
  {
    id: 14,
    name: 'Soap Christmas',
    description: 'Cool and refreshing soap that hydrates and soothes skin with real cucumber essence.',
    price: 8.99,
    size: 'one size',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9rGYapcl5mOczzo5QTSmPYf7AiDlor6N2w&s',
    colors: ['white', 'yellow', 'white'],
    materials: ['cotton'],
    careInstructions: 'Store in a cool, dry place. Use with warm water..'
  },
  {
    id: 15,
    name: 'Soap Cozy',
    description: 'Delicate floral soap inspired by Japanese cherry blossoms in full bloom',
    price: 8.99,
    size: 'one size',
    imageUrl: 'https://www.drbronner.com/cdn/shop/files/dr-bronners-pure-castile-bar-soap-5oz-2_1_a6d4837c-55f8-4117-890e-5e6a5feeb929.jpg?v=1726083849&width=1200',
    colors: ['white', 'green', 'yellow'],
    materials: ['acrylic'],
    careInstructions: 'Store in a cool, dry place. Use with warm water.'
  },
  {
    id: 16,
    name: 'Soap Sunflowers',
    description: 'Mineral-rich exfoliating soap with pink Himalayan salt crystals.',
    price: 8.99,
    size: 'Small (80gr)',
    imageUrl: 'https://www.brambleberry.com/on/demandware.static/-/Sites-brambleberry-master-catalog/default/dw7a31ec9d/projectimages/PS000201-000220/PS000211%20mainnew.jpg',
    colors: ['yellow', 'white', 'green'],
    materials: ['cotton'],
    careInstructions: 'Store in a cool, dry place. Use with warm water..'
  },
  {
    id: 17,
    name: 'Soap Matcha',
    description:
      'Gentle, nourishing soap made with almond milk for sensitive skin.',
    price: 8.99,
    size: 'Small (80gr)',
    imageUrl: 'https://soapdistillery.com/cdn/shop/products/SBALLNAKED_OutdoorSQ800_e3f91998-74de-40c8-97f9-9b0a5b0869e0.jpg?v=1688607107',
    colors: ['yellow', 'brown', 'white'],
    materials: ['cotton'],
    careInstructions: 'Store in a cool, dry place. Use with warm water..'
  },
  {
    id: 18,
    name: 'Soap Queen Bee',
    description: 'Warming soap with cinnamon and clove that is perfect for fall and winter.',
    price: 8.99,
    size: 'one size',
    imageUrl: 'https://www.thesoapery.co.uk/cdn/shop/articles/Copy_of_Copy_of_Tea_tree_melt_and_pour_soap_-_2024-10-21T101600.303_1100x.jpg?v=1729502173',
    colors: ['white', 'brown', 'yellow'],
    materials: ['wool'],
    careInstructions: 'Store in a cool, dry place. Use with warm water.'
  },
  {
    id: 19,
    name: 'Soap Lalaland',
    description:
      'Antioxidant-rich soap with green tea extract to nourish and protect skin.',
    price: 8.99,
    size: 'Medium (100gr)',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQeFVnPNd1enPxTTOGF6pSPAYB298rW15tg&s',
    colors: ['white', 'green', 'yellow'],
    materials: ['acrylic'],
    careInstructions: 'Store in a cool, dry place. Use with warm water.'
  },
  {
    id: 20,
    name: 'Soap Autumn Leaves',
    description:
      'Fruity soap bursting with strawberry, raspberry and blackberry scents.',
    price: 8.99,
    size: 'Small (80gr)',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02qwQgY0Luv0DPa95sBGwGhOEo7j-qKlJS1G5qIj1JUbzx7OorlY3E1en9Il2eTfmErQ&usqp=CAU',
    colors: ['yellow', 'white'],
    materials: ['cotton'],
    careInstructions: 'Store in a cool, dry place. Use with warm water..'
  }
    ];
    
    // Get all unique categories
    let categories = ['all', ...new Set(products.map(product => product.category))];
    
    onMount(() => {
      if (browser) {
        cart = JSON.parse(localStorage.getItem('cart')) || [];
      }
    });
  
    function addToCart(product) {
      cart = [...cart, product];
      if (browser) {
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
      }
    }
  
    function viewProductDetails(productId) {
  goto(`/soap/${productId}`);
}
    
    // Filter products based on category and search query
    $: filteredProducts = products.filter(product => {
      // Filter by category
      const categoryMatch = filterCategory === 'all' || product.category === filterCategory;
      
      // Filter by search query
      const searchMatch = !searchQuery || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return categoryMatch && searchMatch;
    });
    
    // Sort products
    $: sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortOrder === 'price-low') {
        return a.price - b.price;
      } else if (sortOrder === 'price-high') {
        return b.price - a.price;
      } else if (sortOrder === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        // Default sort: featured first, then by id
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.id - b.id;
      }
    });
  </script>
  
  <svelte:head>
    <title>All Products - Đê Mê</title>
    <meta name="description" content="Browse our collection of handcrafted, natural soaps made with the finest ingredients." />
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
  
  <div class="page-container">
    <div class="products-hero">
      <h1>Our Handcrafted Soaps</h1>
      <p>Each bar is made with care using the finest natural ingredients</p>
    </div>
    
    <div class="filter-section">
      <div class="filter-controls">
        <div class="search-bar">
          <input 
            type="text" 
            placeholder="Search products..." 
            bind:value={searchQuery}
            aria-label="Search products"
          />
        </div>
        
        <div class="category-filter">
          <label for="category-select">Filter by:</label>
          <select id="category-select" bind:value={filterCategory}>
            {#each categories as category}
              <option value={category}>{category === 'all' ? 'All Categories' : category}</option>
            {/each}
          </select>
        </div>
        
        <div class="sort-filter">
          <label for="sort-select">Sort by:</label>
          <select id="sort-select" bind:value={sortOrder}>
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>
      </div>
      
      <div class="results-count">
        Showing {sortedProducts.length} of {products.length} products
      </div>
    </div>
    
    <div class="products-grid">
      {#each sortedProducts as product}
        <div class="product-card">
          <div class="product-image" on:click={() => viewProductDetails(product.id)}>
            <img src={product.imageUrl} alt={product.name} />
            {#if product.featured}
              <div class="featured-badge">Featured</div>
            {/if}
          </div>
          
          <div class="product-info">
            <h3 class="product-title">{product.name}</h3>
            <div class="product-category">{product.category}</div>
            <div class="product-price">${product.price.toFixed(2)}</div>
            <p class="product-description">{product.description}</p>
            
            <div class="color-options">
              {#each product.colors as color}
                <div 
                  class="color-preview" 
                  style="background-color: {color};" 
                  title={color}
                ></div>
              {/each}
            </div>
            
            <div class="product-actions">
                <a href="/soap/{product.id}" class="view-details">
                  View Details
                </a>
                <button class="add-to-cart" on:click={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
          </div>
        </div>
      {/each}
    </div>
    
    {#if sortedProducts.length === 0}
      <div class="no-products">
        <h2>No products found</h2>
        <p>Try adjusting your search or filter criteria.</p>
        <button class="reset-filters" on:click={() => {
          filterCategory = 'all';
          searchQuery = '';
        }}>
          Reset Filters
        </button>
      </div>
    {/if}
    
    <div class="collection-highlight">
      <h2>Our Collections</h2>
      <div class="collections-grid">
        {#each categories.filter(c => c !== 'all') as category}
          <div class="collection-card">
            <h3>{category}</h3>
            <p>{getCollectionDescription(category)}</p>
            <button 
              class="collection-button"
              on:click={() => filterCategory = category}
            >
              View {category}
            </button>
          </div>
        {/each}
      </div>
    </div>
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
  
    /* Basic styling */
    .page-container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      font-family: 'Poppins', 'Montserrat', sans-serif;
    }
    
    h1, h2, h3, h4 {
      font-family: 'Playfair Display', 'Poppins', sans-serif;
      color: #4f9cba;
      margin: 0 0 1rem 0;
      letter-spacing: -0.5px;
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
    
    /* Products Hero */
    .products-hero {
      text-align: center;
      padding: 3rem 1rem;
      margin-bottom: 2rem;
      background-color: #f0f8fb;
      border-radius: 12px;
    }
    
    .products-hero p {
      font-size: 1.2rem;
      color: #666;
      max-width: 600px;
      margin: 0 auto;
    }
    
    /* Filter Section */
    .filter-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .filter-controls {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .search-bar input {
      padding: 0.7rem 1rem;
      border: 1px solid #ddd;
      border-radius: 30px;
      font-size: 0.9rem;
      width: 250px;
      font-family: 'Poppins', 'Montserrat', sans-serif;
    }
    
    .search-bar input:focus {
      outline: none;
      border-color: #4f9cba;
      box-shadow: 0 0 0 2px rgba(79, 156, 186, 0.1);
    }
    
    .category-filter, .sort-filter {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    select {
      padding: 0.6rem 1rem;
      border: 1px solid #ddd;
      border-radius: 30px;
      font-size: 0.9rem;
      background-color: white;
      cursor: pointer;
      font-family: 'Poppins', 'Montserrat', sans-serif;
    }
    
    select:focus {
      outline: none;
      border-color: #4f9cba;
    }
    
    .results-count {
      font-size: 0.9rem;
      color: #666;
    }
    
    /* Products Grid */
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }
    
    .product-card {
      background-color: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
    }
    
    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(79, 156, 186, 0.15);
    }
    
    .product-image {
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }
    
    .product-image img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
      transition: transform 0.5s ease;
    }
    
    .product-image:hover img {
      transform: scale(1.05);
    }
    
    .featured-badge {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: #4f9cba;
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }
    
    .product-info {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    
    .product-title {
      font-size: 1.2rem;
      margin-bottom: 0.3rem;
    }
    
    .product-category {
      color: #666;
      font-size: 0.85rem;
      margin-bottom: 0.5rem;
    }
    
    .product-price {
      font-weight: 700;
      font-size: 1.3rem;
      color: #4f9cba;
      margin-bottom: 0.8rem;
    }
    
    .product-description {
      font-size: 0.9rem;
      color: #555;
      margin-bottom: 1rem;
      flex-grow: 1;
    }
    
    .color-options {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1.2rem;
    }
    
    .color-preview {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #eee;
    }
    
    .product-actions {
      display: flex;
      gap: 0.8rem;
    }
    
    .view-details, .add-to-cart {
      padding: 0.7rem 1rem;
      border-radius: 30px;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.3s ease;
      flex: 1;
      text-align: center;
    }
    
    .view-details {
      background-color: transparent;
      border: 1px solid #4f9cba;
      color: #4f9cba;
    }
    
    .view-details:hover {
      background-color: #f0f8fb;
    }
    
    .add-to-cart {
      background-color: #4f9cba;
      color: white;
      border: none;
      box-shadow: 0 3px 10px rgba(79, 156, 186, 0.2);
    }
    
    .add-to-cart:hover {
      background-color: #3d7f9a;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(79, 156, 186, 0.3);
    }
    
    /* No Products Found */
    .no-products {
      text-align: center;
      padding: 3rem;
      background-color: #f0f8fb;
      border-radius: 12px;
      margin-bottom: 3rem;
    }
    
    .reset-filters {
      background-color: #4f9cba;
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 30px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 1rem;
      box-shadow: 0 3px 10px rgba(79, 156, 186, 0.2);
    }
    
    .reset-filters:hover {
      background-color: #3d7f9a;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(79, 156, 186, 0.3);
    }
    
    /* Collection Highlight */
    .collection-highlight {
      margin-bottom: 4rem;
    }
    
    .collection-highlight h2 {
      text-align: center;
      margin-bottom: 2rem;
    }
    
    .collections-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .collection-card {
      background-color: #f0f8fb;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .collection-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(79, 156, 186, 0.12);
    }
    
    .collection-card h3 {
      font-size: 1.4rem;
      margin-bottom: 0.8rem;
    }
    
    .collection-card p {
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }
    
    .collection-button {
      display: inline-block;
      background-color: transparent;
      color: #4f9cba;
      padding: 0.6rem 1.2rem;
      border: 1px solid #4f9cba;
      border-radius: 30px;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .collection-button:hover {
      background-color: #4f9cba;
      color: white;
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
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .filter-section {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .filter-controls {
        width: 100%;
        flex-direction: column;
      }
      
      .search-bar input {
        width: 100%;
      }
      
      .category-filter, .sort-filter {
        width: 100%;
        justify-content: space-between;
      }
      
      select {
        flex: 1;
      }
      
      .results-count {
        width: 100%;
        text-align: right;
        margin-top: 1rem;
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
  </style>
  
  <script context="module">
    // Helper function to provide descriptions for the collections
    function getCollectionDescription(category) {
      const descriptions = {
        'Essential Oils': 'Aromatic soaps made with pure essential oils for a natural fragrance experience.',
        'Sensitive Skin': 'Gentle formulations for those with delicate or easily irritated skin.',
        'Specialty': 'Unique soaps with special ingredients for specific skincare concerns.',
        'Floral': 'Elegant soaps featuring the delicate scents and properties of flower essences.',
        'Exfoliating': 'Textured soaps that gently remove dead skin cells for a smoother feel.'
      };
      
      return descriptions[category] || 'Handcrafted soaps made with natural ingredients.';
    }
  </script>