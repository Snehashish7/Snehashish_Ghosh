import React from 'react';
import './ShareButton.css'
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const ShareButton = () => {
  const shareOnFacebook = () => {
    const imageUrl = document.querySelector('.random-image img').src;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        imageUrl
      )}`,
      '_blank'
    );
  };

  const shareOnTwitter = () => {
    const imageUrl = document.querySelector('.random-image img').src;
    window.open(
      `https://twitter.com/share?url=${encodeURIComponent(
        imageUrl
      )}`,
      '_blank'
    );
  };

  const shareOnWhatsApp = () => {
    const imageUrl = document.querySelector('.random-image img').src;
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(
        imageUrl
      )}`,
      '_blank'
    );
  };

  return (
    <div className="share-button">
       <div className="share-button">
      <button className="facebook-button" onClick={shareOnFacebook}>
        <i className="button-icon"><FaFacebook /></i> Share on Facebook
      </button>
      <button className="twitter-button" onClick={shareOnTwitter}>
        <i className="button-icon"><FaTwitter /></i> Share on Twitter
      </button>
      <button className="whatsapp-button" onClick={shareOnWhatsApp}>
        <i className="button-icon"><FaWhatsapp /></i> Share on WhatsApp
      </button>
    </div>
    </div>
  );
};

export default ShareButton;
