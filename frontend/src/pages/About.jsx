import React from 'react';
import '../App.css';
import img8 from '../assets/image-8.webp';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="category-hero" style={{ padding: '60px 0', backgroundColor: '#fcfbf8' }}>
        <div className="container">
          <p className="hero-tagline">ABOUT US</p>
          <h1 className="hero-title">Our Story & Craftsmanship</h1>
          <p className="hero-description">
            Dedicated to creating the perfect fit and ensuring customer satisfaction with every stitch.
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content" style={{ padding: '60px 0', backgroundColor: '#f4efea' }}>
        <div className="container">
          <div className="about-grid">
            <div>
              <h2 className="section-title">A Bridal & Designer Boutique Focused on Perfect Fit</h2>
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
    </div>
  );
};

export default About;
