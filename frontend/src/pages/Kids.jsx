import React from 'react';
import '../App.css';
import img1 from '../assets/image-1.webp';
import img2 from '../assets/image-2.webp';
import img3 from '../assets/image-3.webp';
import img4 from '../assets/image-4.webp';
import img5 from '../assets/image-5.webp';
import img6 from '../assets/image-6.webp';

const Kids = () => {
  const collectionImages = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="kids-page">
      {/* Hero Section */}
      <section className="category-hero" style={{ padding: '60px 0', backgroundColor: '#fcfbf8' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: '1' }}>
            <p className="hero-tagline">KIDS OUTFITS • BANGALORE</p>
            <h1 className="hero-title">Kids Outfits in Bangalore Designed for Comfort & Celebration</h1>
            <p className="hero-description">
              Customized kids outfits designed with comfort, premium fabrics, and perfect finishing for special occasions.
            </p>
            <div style={{ marginTop: '20px' }}>
              <button className="btn-primary" style={{ marginRight: '15px' }}>Order on WhatsApp</button>
              <button className="btn-outline">Call Now</button>
            </div>
          </div>
          <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '300px', height: '300px', borderRadius: '50%', backgroundColor: '#f4efea', position: 'relative' }}>
              {/* This represents the spiral shape in the kids.png image */}
            </div>
          </div>
        </div>
      </section>

      {/* What we design for kids */}
      <section style={{ padding: '40px 0', backgroundColor: '#fcfbf8' }}>
        <div className="container">
          <p className="hero-tagline" style={{ color: '#cba153', marginBottom: '10px' }}>— WHAT WE DESIGN</p>
          <h2 className="section-title">What We Design for Kids</h2>
          <p className="service-desc">Every piece is crafted keeping your child's comfort and the occasion in mind.</p>
        </div>
      </section>

      {/* Kids Outfit Collection */}
      <section className="category-collections" style={{ backgroundColor: '#e5e0d8', padding: '60px 0' }}>
        <div className="container">
          <p className="hero-tagline" style={{ color: '#cba153', marginBottom: '10px' }}>— GALLERY</p>
          <h2 className="section-title">Kids Outfit Collection</h2>
          <p className="service-desc" style={{ marginBottom: '40px' }}>A mix of custom-designed and ready boutique styles for kids.</p>
          
          <div className="gallery-grid">
            {collectionImages.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Kids ${index}`} className="placeholder-image" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="consultation-form-section" style={{ padding: '80px 0', backgroundColor: '#fcfbf8' }}>
        <div className="container">
          <div style={{ backgroundColor: '#3f2f25', borderRadius: '16px', padding: '40px', color: 'white' }}>
            <p style={{ textAlign: 'center', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '20px', color: '#cba153' }}>— CONSULTATION —</p>
            <h3 style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '30px' }}>Share age, occasion, preferred colors and design ideas to get started.</h3>
            
            <form style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '8px', letterSpacing: '1px' }}>AGE</label>
                <input type="text" placeholder="e.g. 4 years" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #5c4e46', backgroundColor: '#4a382d', color: 'white' }} />
              </div>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '8px', letterSpacing: '1px' }}>OCCASION</label>
                <input type="text" placeholder="e.g. Birthday, Wedding" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #5c4e46', backgroundColor: '#4a382d', color: 'white' }} />
              </div>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '8px', letterSpacing: '1px' }}>PREFERRED COLORS / DESIGN</label>
                <input type="text" placeholder="e.g. Pastel pink, floral" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #5c4e46', backgroundColor: '#4a382d', color: 'white' }} />
              </div>
            </form>
            
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button className="btn-gold" style={{ marginRight: '15px', backgroundColor: '#cba153', color: '#3f2f25', fontWeight: 'bold' }}>WhatsApp Order</button>
              <button className="btn-outline" style={{ color: 'white', borderColor: 'white' }}>Call Now</button>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: '20px', color: '#a39c94' }}>Your details will be kept confidential. We will reach out to you.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kids;
