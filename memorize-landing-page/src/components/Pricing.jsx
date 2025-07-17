import React from 'react';

const Pricing = () => {
    return (
        <section className="pricing">
            <h2>Pricing Plans</h2>
            <div className="pricing-container">
                <div className="pricing-card">
                    <h3>Basic Plan</h3>
                    <p>Access to basic features</p>
                    <p>Price: $10/month</p>
                    <button>Choose Plan</button>
                </div>
                <div className="pricing-card">
                    <h3>Standard Plan</h3>
                    <p>Access to all features</p>
                    <p>Price: $20/month</p>
                    <button>Choose Plan</button>
                </div>
                <div className="pricing-card">
                    <h3>Premium Plan</h3>
                    <p>Access to all features plus premium support</p>
                    <p>Price: $30/month</p>
                    <button>Choose Plan</button>
                </div>
            </div>
        </section>
    );
};

export default Pricing;