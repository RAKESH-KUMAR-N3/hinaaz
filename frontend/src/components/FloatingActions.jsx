import React from 'react';

const FloatingActions = () => {
  return (
    <div className="floating-actions" style={{
      position: 'fixed',
      bottom: '30px',
      left: '30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      zIndex: 1000
    }}>
      <button style={{
        backgroundColor: 'white',
        border: '1px solid #e5e0d8',
        padding: '12px 24px',
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        fontWeight: 'bold',
        color: '#3c2d24',
        fontSize: '1rem'
      }}>
        <span style={{ fontSize: '1.2rem' }}>📞</span> Call Now
      </button>
      <button style={{
        backgroundColor: '#25D366',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        fontWeight: 'bold',
        color: 'white',
        fontSize: '1rem'
      }}>
        <span style={{ fontSize: '1.2rem' }}>💬</span> WhatsApp
      </button>
    </div>
  );
};

export default FloatingActions;
