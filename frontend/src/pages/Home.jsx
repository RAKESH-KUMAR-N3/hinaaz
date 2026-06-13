import React from 'react';
import '../App.css';
import heroImage from '../assets/hero-image.png';
import img1 from '../assets/image-1.webp';
import img2 from '../assets/image-2.webp';
import img3 from '../assets/image-3.webp';
import img4 from '../assets/image-4.webp';
import img5 from '../assets/image-5.webp';
import img6 from '../assets/image-6.webp';
import img7 from '../assets/image-7.webp';
import img8 from '../assets/image-8.webp';
import img9 from '../assets/image-9.webp';

const Home = () => {
  const serviceImages = [img1, img2, img3, img4, img5, img6];
  const collectionImages = [img7, img8, img9, img1, img2, img3, img4, img5];
  const outfitImages = [img6, img7];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <p className="hero-tagline">
            <span style={{ display: 'inline-block', width: '32px', height: '1.5px', backgroundColor: '#cba153', marginRight: '8px', verticalAlign: 'middle' }}></span>
            TRUSTED BOUTIQUE · BANGALORE
          </p>
          <h1 className="hero-title">Bridal &amp; Designer Boutique<br/>in Bangalore</h1>
          <p className="hero-description">
            <span style={{ color: '#cba153', marginRight: '8px' }}>✦</span> Customized bridal blouses, designer outfits, and occasion wear with perfect fit, premium finishing, and personalized styling.
          </p>
          <p className="hero-subtext" style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#3c2d24', marginBottom: '40px', fontWeight: '500' }}>
            <span style={{ color: '#cba153', marginRight: '8px' }}>✦</span> Designed personally by Chief Designer Shruthi Ajith
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '15px' }}>
            <button className="btn-primary" style={{ backgroundColor: '#3c2d24', color: '#fff', padding: '14px 28px', borderRadius: '30px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Bridal Consultation</button>
            <button className="btn-outline" style={{ backgroundColor: 'transparent', color: '#3c2d24', padding: '14px 28px', borderRadius: '30px', fontWeight: 'bold', border: '1px solid #3c2d24', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <span className="phone-icon" style={{ fontSize: '1.1rem' }}>📞</span> Call Now
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" className="placeholder-image" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="shop">
        <div className="container">
          <h2 className="section-title">Custom and Bridal Designer Boutique in Bangalore</h2>
          <p className="section-subtitle">
            Explore our wide range of custom tailoring services and exquisite designer collections. We specialize in bringing your dream outfits to life.
          </p>
          
          <div className="services-grid">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div className="service-card" key={item}>
                <div className="service-image-container">
                  <img src={serviceImages[index]} alt={`Service ${item}`} className="placeholder-image" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">Service Title {item}</h3>
                  <p className="service-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <a href="#" className="read-more">Read More &rarr;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner-content">
          <h2 className="cta-banner-text">Get your happy attire &gt;&gt; book your consultant today.</h2>
          <button className="btn-gold">Book an Appointment</button>
        </div>
      </section>

      {/* Features List */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us / Features / Selling Points</h2>
          <div className="features-grid">
            <div className="feature-item">Custom Design</div>
            <div className="feature-item">Bridal Expertise</div>
            <div className="feature-item">Perfect Fit Guarantee</div>
            <div className="feature-item">Premium Fabrics</div>
            <div className="feature-item">Timely Delivery</div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="collections-section" id="collections">
        <div className="container">
          <h2 className="section-title">Our Custom Design Collections</h2>
          <div className="collections-grid">
            <div className="collection-item large">
              <img src={collectionImages[0]} alt="Collection 1" className="placeholder-image" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="collection-item">
              <img src={collectionImages[1]} alt="Collection 2" className="placeholder-image" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="collection-item tall">
              <img src={collectionImages[2]} alt="Collection 3" className="placeholder-image" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="collection-item">
              <img src={collectionImages[3]} alt="Collection 4" className="placeholder-image" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="collection-item">
              <img src={collectionImages[4]} alt="Collection 5" className="placeholder-image" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="collection-item wide">
              <img src={collectionImages[5]} alt="Collection 6" className="placeholder-image" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="collection-item">
              <img src={collectionImages[6]} alt="Collection 7" className="placeholder-image" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="collection-item">
              <img src={collectionImages[7]} alt="Collection 8" className="placeholder-image" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Perfect Outfit Section */}
      <section className="perfect-outfit-section">
        <div className="container">
          <h2 className="section-title">Find Your Perfect Bridal or Designer Outfit</h2>
          <div className="outfit-grid">
            <div className="outfit-card">
              <img src={outfitImages[0]} alt="Bridal Collection" className="placeholder-image" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              <div className="outfit-card-content">
                <h3 className="outfit-card-title">Bridal Collection</h3>
                <a href="/bridal" className="read-more" style={{color: 'white'}}>Explore More &rarr;</a>
              </div>
            </div>
            <div className="outfit-card">
              <img src={outfitImages[1]} alt="Designer Wear" className="placeholder-image" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              <div className="outfit-card-content">
                <h3 className="outfit-card-title">Designer Wear</h3>
                <a href="/designer" className="read-more" style={{color: 'white'}}>Explore More &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <h2 className="section-title">A Bridal & Designer Boutique Focused on Perfect Fit & Customer...</h2>
          <div className="about-grid">
            <div>
              <p className="service-desc" style={{marginBottom: '20px', fontSize: '1.05rem'}}>
                We believe that every piece of clothing should be a masterpiece that reflects your unique style and personality. Our dedicated team of designers and artisans work tirelessly to ensure that every stitch is perfect.
              </p>
              <div className="about-features">
                <div className="about-feature-box">
                  <h4 className="about-feature-title">Expert Tailoring</h4>
                  <p className="about-feature-desc">Years of experience in creating impeccable fits.</p>
                </div>
                <div className="about-feature-box">
                  <h4 className="about-feature-title">Quality Assurance</h4>
                  <p className="about-feature-desc">We use only the finest materials and fabrics.</p>
                </div>
                <div className="about-feature-box">
                  <h4 className="about-feature-title">Personalized Service</h4>
                  <p className="about-feature-desc">Dedicated consultants to guide you through the process.</p>
                </div>
                <div className="about-feature-box">
                  <h4 className="about-feature-title">Innovative Designs</h4>
                  <p className="about-feature-desc">Staying ahead with modern trends while honoring tradition.</p>
                </div>
              </div>
            </div>
            <div style={{height: '500px'}}>
               <img src={img8} alt="About Us" className="placeholder-image" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <div className="reviews-header">
            <h2 className="section-title">Loved by Clients Across Bangalore</h2>
            <div className="google-rating">
              <span className="google-rating-score">4.9</span>
              <span className="stars">★★★★★</span>
              <span>Based on 500+ Reviews</span>
            </div>
          </div>
          
          <div className="reviews-grid">
            {[1, 2, 3].map((review) => (
              <div className="review-card" key={review}>
                <div className="review-header">
                  <div className="review-avatar">{review}</div>
                  <div>
                    <div className="review-name">Customer Name {review}</div>
                    <div className="review-time">1 month ago</div>
                  </div>
                </div>
                <div className="stars" style={{marginBottom: '15px'}}>★★★★★</div>
                <p className="review-text">
                  "Absolutely amazing experience! The team understood exactly what I wanted and delivered a masterpiece. Highly recommended for all brides-to-be."
                </p>
              </div>
            ))}
          </div>
          <div className="view-all-btn-container">
            <button className="btn-primary">View All Reviews</button>
          </div>
        </div>
      </section>

      {/* Footer CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner-content">
          <h2 className="cta-banner-text">Get your happy attire &gt;&gt; book your consultant today.</h2>
          <button className="btn-gold">Book an Appointment</button>
        </div>
      </section>
    </>
  );
};

export default Home;
