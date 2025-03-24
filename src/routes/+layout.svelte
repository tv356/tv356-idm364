<script>
  import '../app.css';
</script>

<div class="app-container">
  <main>
    <slot />
  </main>

  <footer>
    <p>Designed and built by @Cheryl Vo</p>
  </footer>
</div>

<style>
  .app-container {
    width: 100%;
    max-width: 100%;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
  }

  main {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 1rem;
    box-sizing: border-box;
  }

  footer {
    text-align: center;
    padding: 1rem;
    width: 100%;
  }
</style>