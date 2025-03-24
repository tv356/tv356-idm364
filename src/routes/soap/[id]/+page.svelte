<script>
  export let data;
</script>

<div class="product-detail">
  {#if data.product}
    <div class="left-panel">
      <img src={data.product.imageUrl} alt={data.product.name} width="200" />
    </div>
    <div class="right-panel">
      <h1>{data.product.name}</h1>
      <div class="body-section">
        <p>{data.product.description}</p>
        <p>Price: ${data.product.price}</p>
        <p>Size: {data.product.size}</p>
        <p>Colors: {data.product.colors}</p>
        <p>Materials: {data.product.materials}</p>
        <p>Care Instructions: {data.product.careInstructions}</p>
      </div>
    </div>
  {:else}
    <p>Product not found</p>
  {/if}
</div>

<style>
  .product-detail {
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 80px 20px 0 20px;
    display: flex;
    padding-bottom: 150px;
  }

  .product-detail .left-panel {
    margin: 40px;
  }
  .product-detail .right-panel {
    flex-grow: 1;
    margin-left: 40px;
  }

  .product-detail .right-panel .body-section {
    padding: 0 100px;
  }

  .product-detail p {
    margin: 0;
  }
  .product-detail .right-panel h1 {
    text-align: center;
  }
</style>
