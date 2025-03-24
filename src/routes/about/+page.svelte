<svelte:head>
  <title>About Our Artisanal Soap Journey</title>
  <meta name="description" content="Discover the story behind our handcrafted soaps, our sustainable practices, and the passion that drives our artisanal soap company." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&family=Lexend:wght@300;400;500;600&family=Quicksand:wght@300;400;500;600&family=Righteous&display=swap" rel="stylesheet">
</svelte:head>

<div class="page-container">
  <div class="hero-banner">
    <div class="hero-content">
      <h1>Our Soap Story</h1>
      <p class="tagline">Đê Mê Soaps: Crafted with intention, made with love</p>
    </div>
  </div>

  <section class="story-section">
    <div class="featured-wrapper">
      <div class="featured-text">
        <h2>From Nature to Your Hands</h2>
        <p>Founded in 2018 in a small kitchen with big dreams, <strong>Đê Mê Soaps</strong> began as a personal journey to create skincare that was both gentle on the skin and kind to the planet.</p>
        <p>What started as a weekend hobby quickly bloomed into a passion. After sharing our creations with friends and family who raved about the difference in their skin, we knew we had to share our soaps with the world.</p>
      </div>
      <div class="image-wrapper">
        <img src="/api/placeholder/600/400" alt="Our workshop" />
      </div>
    </div>
  </section>

  <section class="values-section">
    <h2>Our Core Values</h2>
    <div class="ingredients-grid">
      <div class="ingredient-item">
        <div class="ingredient-icon">🌿</div>
        <h3>Sustainability</h3>
        <p>We source ingredients ethically and use eco-friendly packaging to minimize our environmental footprint.</p>
      </div>
      <div class="ingredient-item">
        <div class="ingredient-icon">✨</div>
        <h3>Quality</h3>
        <p>Every bar is handcrafted in small batches to ensure the highest quality and attention to detail.</p>
      </div>
      <div class="ingredient-item">
        <div class="ingredient-icon">🤲</div>
        <h3>Transparency</h3>
        <p>We believe you have the right to know exactly what goes onto your skin – no hidden ingredients, ever.</p>
      </div>
    </div>
  </section>

  <section class="process-section">
    <h2>Our Soap Making Process</h2>
    <div class="process-steps ingredients-grid">
      <div class="ingredient-item">
        <div class="step-number">01</div>
        <h3>Thoughtful Sourcing</h3>
        <p>We carefully select organic oils, botanical extracts, and natural colorants from trusted suppliers who share our values.</p>
      </div>
      <div class="ingredient-item">
        <div class="step-number">02</div>
        <h3>Small-Batch Creation</h3>
        <p>Using the traditional cold-process method, we blend ingredients by hand in small batches to maintain quality control.</p>
      </div>
      <div class="ingredient-item">
        <div class="step-number">03</div>
        <h3>Patient Curing</h3>
        <p>Each soap bar ages for 4-6 weeks, allowing the saponification process to complete and creating a gentle, long-lasting bar.</p>
      </div>
    </div>
  </section>

  <section class="team-section testimonials-section">
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
</div>

<style>
  /* Basic Reset and Global Styles */
  :global(body) {
    font-family: 'Quicksand', 'Ubuntu', 'Montserrat', sans-serif;
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
    padding-top: 2rem;
  }

  h1, h2, h3 {
    font-family: 'Righteous', 'Comfortaa', 'Lexend', sans-serif;
    color: #4f9cba;
    margin: 0 0 1rem 0;
    letter-spacing: 0.5px;
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

  /* Top Navigation */
  
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

  /* Story Section */
  .story-section, .values-section, .process-section, .team-section {
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

  .image-wrapper {
    flex: 1;
    min-width: 300px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(79, 156, 186, 0.1);
  }

  .image-wrapper img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }

  .image-wrapper:hover img {
    transform: scale(1.03);
  }

  /* Values Section */
  .ingredients-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
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
    background-color: rgba(79, 156, 186, 0.1);
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 auto 1.5rem;
  }

  .step-number {
    font-size: 2.5rem;
    font-weight: bold;
    font-family: 'Righteous', 'Comfortaa', sans-serif;
    color: #4f9cba;
    opacity: 0.5;
    margin-bottom: 0.5rem;
  }

  /* Team Section */
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
    gap: 2rem;
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
    box-shadow: 0 5px 20px rgba(79, 156, 186, 0.1);
    transition: transform 0.3s ease;
  }

  .customer-photo:hover img {
    transform: scale(1.05);
  }

  .customer-name {
    margin-top: 1rem;
    font-weight: 500;
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
  }

  .footer-logo h3 {
    margin-bottom: 0.5rem;
    font-family: 'Righteous', 'Comfortaa', sans-serif;
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
  }
  
  .copyright {
    text-align: center;
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

    .featured-wrapper {
      flex-direction: column;
    }
    
    .ingredients-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .customer-photos-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .footer-content {
      flex-direction: column;
      gap: 2rem;
      align-items: center;
    }
    
    .footer-bottom {
      flex-direction: column;
      gap: 1rem;
    }
  }
  
  @media (max-width: 576px) {
    .ingredients-grid {
      grid-template-columns: 1fr;
    }
    
    .customer-photos-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
</style>