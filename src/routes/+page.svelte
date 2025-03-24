<section class="featured-section">
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
  </div>
</section>

<style>
  .featured-section {
    padding: 4rem 2rem;
    margin-bottom: 3rem;
  }

  .section-heading {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
  }

  .section-heading h2 {
    font-family: 'Righteous', 'Comfortaa', sans-serif;
    color: #4f9cba;
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  .section-heading p {
    font-size: 1.1rem;
    color: #666;
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
  }

  .ingredient-content h3 {
    font-family: 'Righteous', 'Comfortaa', sans-serif;
    color: #4f9cba;
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }

  .ingredient-content p {
    color: #666;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .ingredients-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 576px) {
    .ingredients-grid {
      grid-template-columns: 1fr;
    }
  }
</style>