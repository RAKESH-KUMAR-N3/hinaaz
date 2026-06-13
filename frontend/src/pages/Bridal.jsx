import React from 'react';
import '../App.css';
import img1 from '../assets/image-1.webp';
import img2 from '../assets/image-2.webp';
import img3 from '../assets/image-3.webp';
import img4 from '../assets/image-4.webp';
import img5 from '../assets/image-5.webp';
import img6 from '../assets/image-6.webp';
import img7 from '../assets/image-7.webp';
import img8 from '../assets/image-8.webp';
import img9 from '../assets/image-9.webp';

const Bridal = () => {
  const collectionImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className="bridal-page">
      {/* Hero Section */}
      <section className="category-hero">
        <div className="container">
          <p className="hero-tagline">BRIDAL OUTFITS • BANGALORE</p>
          <h1 className="hero-title">Customized Bridal Blouses & Outfits In Bangalore with Aari work & Premium Zardosi Work</h1>
          <p className="hero-description">
            Looking for something unique? Let's design a custom bridal blouse that fits your style and wedding theme perfectly.
          </p>
          <div style={{ marginTop: '20px' }}>
            <button className="btn-primary" style={{ marginRight: '15px' }}>WhatsApp Order</button>
            <button className="btn-outline">Call Now</button>
          </div>
        </div>
      </section>

      {/* Bridal Collections Grid */}
      <section className="category-collections" style={{ backgroundColor: '#f4efea', padding: '60px 0' }}>
        <div className="container">
          <p className="section-subtitle" style={{ marginBottom: '10px' }}>GALLERY</p>
          <h2 className="section-title">Our Bridal Collections</h2>
          <p className="service-desc" style={{ marginBottom: '30px' }}>Our premium collections of custom tailored bridal blouses.</p>
          
          <div className="gallery-grid">
            {collectionImages.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Bridal ${index}`} className="placeholder-image" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" style={{ backgroundColor: '#3f2f25', color: 'white', padding: '50px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Don't just get a bridal outfit... book a personal consultation today.</h2>
          <button className="btn-gold">Book an Appointment</button>
        </div>
      </section>

      {/* Consultation Form (Shared component to be extracted later, inline for now) */}
      <section className="consultation-form-section" style={{ padding: '80px 0', backgroundColor: '#fcfbf8' }}>
        <div className="container">
          <div style={{ backgroundColor: '#3f2f25', borderRadius: '16px', padding: '40px', color: 'white' }}>
            <p style={{ textAlign: 'center', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '20px' }}>CONSULTATION</p>
            <h3 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '30px' }}>Share details of your preferred colors and design ideas to get started.</h3>
            
            <form style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '8px' }}>NAME</label>
                <input type="text" placeholder="e.g. Shruti" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #5c4e46', backgroundColor: 'transparent', color: 'white' }} />
              </div>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '8px' }}>OCCASION</label>
                <input type="text" placeholder="e.g. Wedding, Reception" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #5c4e46', backgroundColor: 'transparent', color: 'white' }} />
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
            <p style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: '20px', color: '#a39c94' }}>Your details will be kept confidential. We will reach out to you.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bridal;
