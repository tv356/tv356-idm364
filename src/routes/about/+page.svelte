<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>About Our Artisanal Soap Journey - Đê Mê</title>
  <meta name="description" content="Discover the story behind our handcrafted soaps, our sustainable practices, and the passion that drives our artisanal soap company." />
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
    <a href="/order">🛒 Cart</a>
  </div>
</header>

<div class="page-container">
  <div class="hero-section">
    <h1>Our Soap Story</h1>
    <div class="tagline">Crafted with intention, made with love</div>
  </div>

  <div class="story-section">
    <div class="image-wrapper">
      <img src="https://vocsaigon.com/assets/images/nature1.png" alt="Our workshop" />
    </div>
    <div class="text-content">
      <h2>From Nature to Your Hands</h2>
      <p>Founded in 2018 in a small kitchen with big dreams, <strong>Đê Mê</strong> began as a personal journey to create skincare that was both gentle on the skin and kind to the planet.</p>
      <p>What started as a weekend hobby quickly bloomed into a passion. After sharing our creations with friends and family who raved about the difference in their skin, we knew we had to share our soaps with the world.</p>
    </div>
  </div>

  <div class="values-section">
    <h2>Our Core Values</h2>
    <div class="values-grid">
      <div class="value-card">
        <div class="value-icon">🌿</div>
        <h3>Sustainability</h3>
        <p>We source ingredients ethically and use eco-friendly packaging to minimize our environmental footprint.</p>
      </div>
      <div class="value-card">
        <div class="value-icon">✨</div>
        <h3>Quality</h3>
        <p>Every bar is handcrafted in small batches to ensure the highest quality and attention to detail.</p>
      </div>
      <div class="value-card">
        <div class="value-icon">🤲</div>
        <h3>Transparency</h3>
        <p>We believe you have the right to know exactly what goes onto your skin – no hidden ingredients, ever.</p>
      </div>
    </div>
  </div>

  <div class="process-section">
    <h2>Our Soap Making Process</h2>
    <div class="process-steps">
      <div class="step">
        <div class="step-number">01</div>
        <h3>Thoughtful Sourcing</h3>
        <p>We carefully select organic oils, botanical extracts, and natural colorants from trusted suppliers who share our values.</p>
      </div>
      <div class="step">
        <div class="step-number">02</div>
        <h3>Small-Batch Creation</h3>
        <p>Using the traditional cold-process method, we blend ingredients by hand in small batches to maintain quality control.</p>
      </div>
      <div class="step">
        <div class="step-number">03</div>
        <h3>Meticulous Finishing</h3>
        <p>Each soap bar ages for 4-6 weeks, allowing the saponification process to complete and creating a gentle, long-lasting bar. We hand-cut, inspect, and carefully package each bar to ensure it meets our standards before reaching your hands.</p>
      </div>
    </div>
  </div>

  <div class="impact-section">
    <h2>Our Community Impact</h2>
    <div class="image-text-block">
      <div class="text-content">
        <p>At Đê Mê, we believe in giving back. For every ten bars sold, we donate one to local shelters. We also host monthly soap-making workshops, where a portion of proceeds supports clean water initiatives worldwide.</p>
        <p>Our workshop is powered by renewable energy, and we partner with local farmers to source ingredients whenever possible, supporting sustainable agriculture in our community.</p>
        <a href="javascript:void(0)" class="cta-button">Learn More About Our Initiatives</a>
      </div>
      <div class="image-wrapper">
        <img src="https://vocsaigon.com/assets/images/nature1.png" alt="Community workshop" />
      </div>
    </div>
  </div>

  <div class="testimonials-section">
    <h2>What Our Customers Say</h2>
    <div class="testimonials-grid">
      <div class="testimonial">
        <div class="testimonial-content">
          <p>"After struggling with sensitive skin for years, finding these soaps has been life-changing. My skin has never felt better!"</p>
          <div class="testimonial-author">— Sarah K., Loyal Customer Since 2019</div>
        </div>
      </div>
      <div class="testimonial">
        <div class="testimonial-content">
          <p>"The attention to detail and quality ingredients are evident in every bar. Plus, the scents are divine without being overwhelming."</p>
          <div class="testimonial-author">— James T., Subscription Member</div>
        </div>
      </div>
      <div class="testimonial">
        <div class="testimonial-content">
          <p>"I love supporting a business that cares about the planet as much as they care about their products. The minimal packaging is a huge plus."</p>
          <div class="testimonial-author">— Ava L., Eco-conscious Shopper</div>
        </div>
      </div>
    </div>
  </div>

  <div class="contact-section">
    <h2>Connect With Us</h2>
    <p class="contact-intro">We love hearing from our community! Whether you have questions about our ingredients, process, or just want to share your experience with our soaps, we're all ears.</p>
    <div class="contact-methods">
      <div class="contact-method">
        <div class="contact-icon">📧</div>
        <h3>Email</h3>
        <p>hello@deme.com</p>
      </div>
      <div class="contact-method">
        <div class="contact-icon">📱</div>
        <h3>Social</h3>
        <p>@DeMeSoaps</p>
      </div>
      <div class="contact-method">
        <div class="contact-icon">🏠</div>
        <h3>Workshop</h3>
        <p>123 Botanical Lane<br>Meadowview, CA 95134</p>
      </div>
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

  /* Page Container */
  .page-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Poppins', 'Montserrat', sans-serif;
    color: #333;
  }

  /* Hero Section */
  .hero-section {
    text-align: center;
    padding: 4rem 0 3rem;
    background-color: #f0f8fb;
    margin-bottom: 4rem;
    border-radius: 12px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #4f9cba;
    font-family: 'Playfair Display', 'Poppins', sans-serif;
  }

  .tagline {
    font-size: 1.4rem;
    color: #666;
    font-style: italic;
  }

  /* Section Styling */
  h2 {
    font-size: 2.2rem;
    color: #4f9cba;
    margin-bottom: 2rem;
    text-align: center;
    font-family: 'Playfair Display', 'Poppins', sans-serif;
  }

  h3 {
    color: #4f9cba;
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    font-family: 'Playfair Display', 'Poppins', sans-serif;
  }

  p {
    line-height: 1.7;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  /* Story Section */
  .story-section, .impact-section {
    display: flex;
    gap: 3rem;
    margin-bottom: 4rem;
    align-items: center;
  }

  .image-wrapper {
    flex: 1;
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

  .text-content {
    flex: 1;
  }

  /* Values Section */
  .values-section, .process-section, .testimonials-section, .contact-section {
    margin-bottom: 5rem;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .value-card {
    background-color: #f0f8fb;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .value-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(79, 156, 186, 0.12);
  }

  .value-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  /* Process Section */
  .process-steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .step {
    padding: 2rem;
    background-color: #fff;
    border: 1px solid #e0f0f5;
    border-radius: 12px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .step:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(79, 156, 186, 0.12);
  }

  .step-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #bce0ed;
    margin-bottom: 0.5rem;
  }

  /* Impact Section */
  .image-text-block {
    display: flex;
    gap: 3rem;
    align-items: center;
  }

  .cta-button {
    display: inline-block;
    background-color: #4f9cba;
    color: white;
    padding: 0.8rem 1.8rem;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
    box-shadow: 0 5px 15px rgba(79, 156, 186, 0.2);
  }

  .cta-button:hover {
    background-color: #3d7f9a;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(79, 156, 186, 0.3);
  }

  /* Testimonials Section */
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

  /* Contact Section */
  .contact-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
  }

  .contact-methods {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .contact-method {
    text-align: center;
    padding: 2rem;
    background-color: #f0f8fb;
    border-radius: 12px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .contact-method:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(79, 156, 186, 0.12);
  }

  .contact-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
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
  @media (max-width: 900px) {
    .story-section, .impact-section, .image-text-block {
      flex-direction: column;
    }
    
    .values-grid, .process-steps, .testimonials-grid, .contact-methods {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .image-wrapper {
      margin-bottom: 2rem;
    }
    
    h1 {
      font-size: 2.5rem;
    }
    
    h2 {
      font-size: 1.8rem;
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

  @media (max-width: 768px) and (min-width: 577px) {
    .values-grid, .process-steps, .testimonials-grid, .contact-methods {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 576px) {
    .page-container {
      padding: 1rem;
    }
    
    .hero-section {
      padding: 3rem 1rem 2rem;
    }
  }
</style>