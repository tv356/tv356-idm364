<script>
  import { page } from '$app/stores';
</script>

<header>
  <div class="corner logo-corner">
    <a href="/">
      <span class="logo-text">Đê Mê</span>
    </a>
  </div>

  <nav>
    <svg viewBox="0 0 2 3" aria-hidden="true" class="nav-curve">
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg>
    <ul>
      <li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
      <li class:active={$page.url.pathname === '/about'}>
        <a sveltekit:prefetch href="/about">About</a>
      </li>
      <li class:active={$page.url.pathname === '/products'}>
        <a sveltekit:prefetch href="/products">Products</a>
      </li>
    </ul>
    <svg viewBox="0 0 2 3" aria-hidden="true" class="nav-curve">
      <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
    </svg>
  </nav>

  <div class="corner cart-corner">
    <a href="/order" class="cart-link" class:active={$page.url.pathname === '/order'}>
      <span class="cart-icon">🛒</span>
      <span class="cart-text">Cart</span>
    </a>
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 4rem;
    background-color: white;
    box-shadow: 0 2px 10px rgba(79, 156, 186, 0.05);
    position: sticky;
    top: 0;
    z-index: 100;
    font-family: 'Quicksand', 'Ubuntu', 'Montserrat', sans-serif;
  }

  .corner {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .logo-corner a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .logo-text {
    font-family: 'Righteous', 'Comfortaa', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #4f9cba;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.95);
    height: 100%;
  }

  .nav-curve {
    width: 1.2em;
    height: 100%;
    display: block;
  }

  path {
    fill: var(--background);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li.active::before {
    content: '';
    width: 80%;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 10%;
    background-color: #4f9cba;
    border-radius: 3px 3px 0 0;
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1.5em;
    color: #666;
    font-weight: 500;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  nav a:hover {
    color: #4f9cba;
    text-decoration: none;
  }

  .cart-corner {
    justify-content: flex-end;
  }

  .cart-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    background-color: #f0f8fb;
    color: #4f9cba;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .cart-link:hover, .cart-link.active {
    background-color: #4f9cba;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(79, 156, 186, 0.2);
  }

  .cart-icon {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    header {
      padding: 0 1rem;
    }
    
    .logo-text {
      font-size: 1.2rem;
    }
    
    nav a {
      padding: 0 1rem;
    }
    
    .cart-text {
      display: none;
    }
    
    .cart-link {
      padding: 0.5rem;
    }
  }
  
  @media (max-width: 480px) {
    nav a {
      padding: 0 0.7rem;
      font-size: 0.8rem;
    }
  }
</style>