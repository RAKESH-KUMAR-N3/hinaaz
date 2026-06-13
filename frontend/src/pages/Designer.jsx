import React from 'react';
import '../App.css';
import img1 from '../assets/image-1.webp';
import img2 from '../assets/image-2.webp';
import img3 from '../assets/image-3.webp';
import img4 from '../assets/image-4.webp';
import img5 from '../assets/image-5.webp';
import img6 from '../assets/image-6.webp';

const Designer = () => {
  const collectionImages = [img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6];

  return (
    <div className="designer-page">
      {/* Hero Section */}
      <section className="category-hero" style={{ padding: '60px 0', backgroundColor: '#fcfbf8' }}>
        <div className="container">
          <p className="hero-tagline">DESIGNER OUTFITS • BANGALORE</p>
          <h1 className="hero-title" style={{ maxWidth: '800px' }}>Designer Outfits in Bangalore For Modern Occasions</h1>
          <p className="hero-description">
            Custom designer outfits for your special occasions. Premium fabrics, flawless stitching, and intricate designs.
          </p>
          <div style={{ marginTop: '20px' }}>
            <button className="btn-primary" style={{ marginRight: '15px' }}>WhatsApp Order</button>
            <button className="btn-outline">Call Now</button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="category-collections" style={{ backgroundColor: '#f4efea', padding: '60px 0' }}>
        <div className="container">
          <p className="section-subtitle" style={{ marginBottom: '10px' }}>GALLERY</p>
          <h2 className="section-title">Designer Party Wear Gallery</h2>
          <p className="service-desc" style={{ marginBottom: '30px' }}>Explore our custom design outfits for modern events and parties.</p>
          
          <div className="gallery-grid">
            {collectionImages.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Designer ${index}`} className="placeholder-image" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-section" style={{ padding: '80px 0', backgroundColor: '#fcfbf8' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>A simple 3-step path to your custom outfit</h2>
          <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[1, 2, 3].map((step) => (
              <div key={step} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', flex: '1', minWidth: '250px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '3rem', color: '#f4efea', marginBottom: '10px', fontWeight: 'bold' }}>0{step}</h3>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Step {step} Title</h4>
                <p className="service-desc">Share your design ideas and get a personalized consultation.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form (Shared layout) */}
      <section className="consultation-form-section" style={{ padding: '80px 0', backgroundColor: '#f4efea' }}>
        <div className="container">
          <div style={{ backgroundColor: '#3f2f25', borderRadius: '16px', padding: '40px', color: 'white' }}>
            <p style={{ textAlign: 'center', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '20px' }}>CONSULTATION</p>
            <h3 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '30px' }}>Share details of your preferred colors and design ideas to get started.</h3>
            
            <form style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '8px' }}>AGE</label>
                <input type="text" placeholder="e.g. 4 years" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #5c4e46', backgroundColor: 'transparent', color: 'white' }} />
              </div>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '8px' }}>OCCASION</label>
                <input type="text" placeholder="e.g. Birthday, Wedding" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #5c4e46', backgroundColor: 'transparent', color: 'white' }} />
              </div>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '8px' }}>PREFERRED COLORS / DESIGN</label>
                <input type="text" placeholder="e.g. Pastel pink, floral" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #5c4e46', backgroundColor: 'transparent', color: 'white' }} />
              </div>
            </form>
            
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button className="btn-gold" style={{ marginRight: '15px' }}>WhatsApp Order</button>
              <button className="btn-outline" style={{ color: 'white', borderColor: 'white' }}>Call Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Designer;
