<script>
  import { page } from '$app/stores';
</script>

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
    <a href="/order">🛒 Cart</a>
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 100%;
    max-width: 100%;
    overflow: visible;
    position: static;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    color: #4f9cba;
    position: relative;
  }

  .active {
    font-weight: bold;
  }

  /* Remove any potential transform or clip effects */
  * {
    transform: none !important;
    clip-path: none !important;
  }
</style>