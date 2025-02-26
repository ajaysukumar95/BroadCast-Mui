import React from 'react';

const HeroBanner: React.FC = () => {
    return (
        <div className="hero-banner">
            <div className="hero-content">
                <h1>Welcome to Broadcast Bazaar</h1>
                <p>Your one-stop shop for all broadcasting needs</p>
                <button className="hero-button">Get Started</button>
            </div>
        </div>
    );
};

export default HeroBanner;