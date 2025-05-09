import { BsCheck2 } from 'react-icons/bs';
import { HiMiniCheckBadge } from "react-icons/hi2";
import { useState, useEffect } from 'react';
import './pricing.css';

export const PricingCard = () => {
    const [userCurrency, setUserCurrency] = useState('XOF');
    const [convertedPrice, setConvertedPrice] = useState(950);
    const [countryCode, setCountryCode] = useState('');

    const features = [
        "Unlimited PDF ⇄ DOCX, image-to-text, etc.",
        "Extract text from handwritten notes or documents in multiple languages.",
        "Summarize, Rephrase, Auto-Write",
        "Translate document to any language of your choice.",
        "Cloud storage or integration with Google Drive"
    ];

    useEffect(() => {
        // Detect user's country and currency
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                setCountryCode(data.country);
                setUserCurrency(data.currency);
                convertCurrency(950, 'XOF', data.currency);
            })
            .catch(error => console.error('Error fetching location:', error));
    }, []);

    const convertCurrency = async (amount, fromCurrency, toCurrency) => {
        try {
            const response = await fetch(
                `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
            );
            const data = await response.json();
            const rate = data.rates[toCurrency];
            setConvertedPrice((amount * rate).toFixed(2));
        } catch (error) {
            console.error('Error converting currency:', error);
        }
    };

    return (
        <div className="pricing-container">
            <h1 className="pricing-title">Pricing</h1>
            
            <div className="pricing-card">
                <div className="price">
                    {convertedPrice} {userCurrency}
                    <span className="per-month">/month</span>
                </div>
                
                <p className="price-description">
                    For users who want optimal Officemate functionalities
                </p>
                
                <div className="features-list">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <HiMiniCheckBadge className="check-icon" />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
                
                <button className="plan-button neon-border">Pro Plan</button>
            </div>
        </div>
    );
};