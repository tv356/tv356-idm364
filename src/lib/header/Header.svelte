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
      <li class:active={$page.url.pathname === '/'}>
        <a data-sveltekit-preload-data href="/">Home</a>
      </li>
      <li class:active={$page.url.pathname === '/about'}>
        <a data-sveltekit-preload-data href="/about">About</a>
      </li>
      <li class:active={$page.url.pathname === '/products'}>
        <a data-sveltekit-preload-data href="/products">Products</a>
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
  /* ... (previous styles remain the same) ... */
</style>