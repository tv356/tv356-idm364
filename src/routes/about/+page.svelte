<svelte:head>
  <title>About Our Artisanal Soap Journey</title>
  <meta name="description" content="Discover the story behind our handcrafted soaps, our sustainable practices, and the passion that drives our artisanal soap company." />
</svelte:head>

<div class="content">
  <div class="hero-section">
    <h1>Our Soap Story</h1>
    <div class="tagline">Crafted with intention, made with love</div>
  </div>

  <div class="story-section">
    <div class="image-wrapper">
      <img src="/api/placeholder/600/400" alt="Our workshop" />
    </div>
    <div class="text-content">
      <h2>From Nature to Your Hands</h2>
      <p>Founded in 2018 in a small kitchen with big dreams, <strong>Pure Essence Soaps</strong> began as a personal journey to create skincare that was both gentle on the skin and kind to the planet.</p>
      <p>What started as a weekend hobby quickly bloomed into a passion. After sharing our creations with friends and family who raved about the difference in their skin, we knew we had to share our soaps with the world.</p>
    </div>
  </div>

  <div class="values-section">
    <h2>Our Core Values</h2>
    <div class="values-grid">
      <div class="value-card">
        <div class="icon">🌿</div>
        <h3>Sustainability</h3>
        <p>We source ingredients ethically and use eco-friendly packaging to minimize our environmental footprint.</p>
      </div>
      <div class="value-card">
        <div class="icon">✨</div>
        <h3>Quality</h3>
        <p>Every bar is handcrafted in small batches to ensure the highest quality and attention to detail.</p>
      </div>
      <div class="value-card">
        <div class="icon">🤲</div>
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
        <p>At Pure Essence, we believe in giving back. For every ten bars sold, we donate one to local shelters. We also host monthly soap-making workshops, where a portion of proceeds supports clean water initiatives worldwide.</p>
        <p>Our workshop is powered by renewable energy, and we partner with local farmers to source ingredients whenever possible, supporting sustainable agriculture in our community.</p>
        <a href="javascript:void(0)" class="cta-button">Learn More About Our Initiatives</a>
      </div>
      <div class="image-wrapper">
        <img src="/api/placeholder/600/400" alt="Community workshop" />
      </div>
    </div>
  </div>

  <div class="testimonials-section">
    <h2>What Our Customers Say</h2>
    <div class="testimonials-grid">
      <div class="testimonial">
        <div class="quote">"After struggling with sensitive skin for years, finding these soaps has been life-changing. My skin has never felt better!"</div>
        <div class="author">— Sarah K., Loyal Customer Since 2019</div>
      </div>
      <div class="testimonial">
        <div class="quote">"The attention to detail and quality ingredients are evident in every bar. Plus, the scents are divine without being overwhelming."</div>
        <div class="author">— James T., Subscription Member</div>
      </div>
      <div class="testimonial">
        <div class="quote">"I love supporting a business that cares about the planet as much as they care about their products. The minimal packaging is a huge plus."</div>
        <div class="author">— Ava L., Eco-conscious Shopper</div>
      </div>
    </div>
  </div>

  <div class="contact-section">
    <h2>Connect With Us</h2>
    <p class="contact-intro">We love hearing from our community! Whether you have questions about our ingredients, process, or just want to share your experience with our soaps, we're all ears.</p>
    <div class="contact-methods">
      <div class="contact-method">
        <div class="icon">📧</div>
        <h3>Email</h3>
        <p>hello@pureessencesoaps.com</p>
      </div>
      <div class="contact-method">
        <div class="icon">📱</div>
        <h3>Social</h3>
        <p>@PureEssenceSoaps</p>
      </div>
      <div class="contact-method">
        <div class="icon">🏠</div>
        <h3>Workshop</h3>
        <p>123 Botanical Lane<br>Meadowview, CA 95134</p>
      </div>
    </div>
  </div>
</div>

<style>
  .content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    color: #3a3a3a;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .hero-section {
    text-align: center;
    padding: 5rem 0 3rem;
    background-color: #f9f5f1;
    margin-bottom: 3rem;
    border-radius: 8px;
  }

  h1 {
    font-size: 3.2rem;
    margin-bottom: 0.5rem;
    color: #5c4736;
  }

  .tagline {
    font-size: 1.4rem;
    color: #8d7766;
    font-style: italic;
  }

  h2 {
    font-size: 2.2rem;
    color: #5c4736;
    margin-bottom: 2rem;
    text-align: center;
  }

  h3 {
    color: #5c4736;
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }

  p {
    line-height: 1.7;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  .story-section, .impact-section {
    display: flex;
    gap: 3rem;
    margin-bottom: 4rem;
    align-items: center;
  }

  .image-wrapper {
    flex: 1;
    border-radius: 8px;
    overflow: hidden;
  }

  .image-wrapper img {
    width: 100%;
    height: auto;
    display: block;
  }

  .text-content {
    flex: 1;
  }

  .values-section, .process-section, .team-section, .testimonials-section, .contact-section {
    margin-bottom: 5rem;
  }

  .values-grid, .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .value-card {
    background-color: #f9f5f1;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .process-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .step {
    padding: 2rem;
    background-color: #fff;
    border: 1px solid #e9e2d8;
    border-radius: 8px;
  }

  .step-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #d9ccbc;
    margin-bottom: 0.5rem;
  }

  .team-member {
    text-align: center;
  }

  .team-member img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  .title {
    color: #8d7766;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .image-text-block {
    display: flex;
    gap: 3rem;
    align-items: center;
  }

  .cta-button {
    display: inline-block;
    background-color: #5c4736;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.3s;
  }

  .cta-button:hover {
    background-color: #493827;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .testimonial {
    background-color: #f9f5f1;
    padding: 2rem;
    border-radius: 8px;
    position: relative;
  }

  .quote {
    font-style: italic;
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  .author {
    font-weight: 600;
    color: #8d7766;
  }

  .contact-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
  }

  .contact-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .contact-method {
    text-align: center;
    padding: 2rem;
    background-color: #f9f5f1;
    border-radius: 8px;
  }

  .newsletter {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    padding: 2rem;
    background-color: #e9e2d8;
    border-radius: 8px;
  }

  .newsletter-form {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  input[type="email"] {
    flex: 1;
    padding: 0.8rem;
    border: 1px solid #d9ccbc;
    border-radius: 4px;
    font-size: 1rem;
  }

  button[type="submit"] {
    background-color: #5c4736;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s;
  }

  button[type="submit"]:hover {
    background-color: #493827;
  }

  @media (max-width: 900px) {
    .story-section, .impact-section, .image-text-block {
      flex-direction: column;
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
  }
</style>