import React, { useState, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface CardData {
  name: string;
  value: string;
  logo: string;
  themeClass: string;
  topLabel?: string;
  bottomLabel?: string;
}

const mcdonaldsLogo = 'https://cdn.simpleicons.org/mcdonalds/FFFFFF';
const hboNowLogo = 'https://cdn.simpleicons.org/hbo/FFFFFF';

const cardsData: CardData[] = [
  { name: 'Roblox', value: '10,000 Robux', logo: 'https://cdn.simpleicons.org/roblox/FFFFFF', themeClass: 'theme-roblox', topLabel: 'ROBLOX', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'Fortnite', value: '13,500 V-Bucks', logo: 'https://cdn.simpleicons.org/epicgames/FFFFFF', themeClass: 'theme-fortnite', topLabel: 'EPIC GAMES', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'Xbox', value: '$100', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Xbox_one_logo.svg', themeClass: 'theme-xbox', topLabel: 'XBOX LIVE', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'Google Play', value: '$100', logo: 'https://cdn.simpleicons.org/googleplay/FFFFFF', themeClass: 'theme-googleplay', topLabel: 'GOOGLE PLAY', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'PlayStation', value: '$100', logo: 'https://cdn.simpleicons.org/playstation/FFFFFF', themeClass: 'theme-playstation', topLabel: 'PSN NETWORK', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'Amazon', value: '$500', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg', themeClass: 'theme-amazon', topLabel: 'AMAZON', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'Apple (iTunes)', value: '$200', logo: 'https://cdn.simpleicons.org/apple/FFFFFF', themeClass: 'theme-apple', topLabel: 'APP STORE', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'Spotify', value: '12 Months', logo: 'https://cdn.simpleicons.org/spotify/FFFFFF', themeClass: 'theme-spotify', topLabel: 'SPOTIFY PREMIUM', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'Steam', value: '$100', logo: 'https://cdn.simpleicons.org/steam/FFFFFF', themeClass: 'theme-steam', topLabel: 'STEAM WALLET', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'PlayStation Plus', value: '12 Months', logo: 'https://cdn.simpleicons.org/playstation/FFFFFF', themeClass: 'theme-psplus', topLabel: 'PS PLUS', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'Discord', value: 'Nitro 1 Year', logo: 'https://cdn.simpleicons.org/discord/FFFFFF', themeClass: 'theme-discord', topLabel: 'DISCORD NITRO', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'Twitch', value: '$100', logo: 'https://cdn.simpleicons.org/twitch/FFFFFF', themeClass: 'theme-twitch', topLabel: 'TWITCH', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'Netflix', value: '6 Months', logo: 'https://cdn.simpleicons.org/netflix/FFFFFF', themeClass: 'theme-netflix', topLabel: 'NETFLIX', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'PayPal', value: '$150', logo: 'https://cdn.simpleicons.org/paypal/FFFFFF', themeClass: 'theme-paypal', topLabel: 'PAYPAL', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'Nike', value: '$200', logo: 'https://cdn.simpleicons.org/nike/FFFFFF', themeClass: 'theme-nike', topLabel: 'NIKE', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'Uber', value: '$100', logo: 'https://cdn.simpleicons.org/uber/FFFFFF', themeClass: 'theme-uber', topLabel: 'UBER', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'McDonald\'s', value: '$100', logo: mcdonaldsLogo, themeClass: 'theme-mcdonalds', topLabel: 'MCDONALDS', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'HBO NOW', value: '12 Months', logo: hboNowLogo, themeClass: 'theme-hbonow', topLabel: 'HBO NOW', bottomLabel: 'INSTANT DELIVERY' },
  { name: 'eBay', value: '$100', logo: 'https://cdn.simpleicons.org/ebay/FFFFFF', themeClass: 'theme-ebay', topLabel: 'EBAY', bottomLabel: 'INSTANT DELIVERY' },
];

const ParticleSystem = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; top: string; size: string; opacity: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${2 + Math.random() * 3}px`,
      opacity: 0.1 + Math.random() * 0.3,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="particles" id="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};

const GiftCard: React.FC<{ data: CardData; onClick: () => void }> = ({ data, onClick }) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 10,
        speed: 1000,
        perspective: 3000,
        glare: true,
        "max-glare": 0.15,
        scale: 1,
        gyroscope: false,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        transition: true,
      });
    }
    return () => {
      if (tiltRef.current && (tiltRef.current as any).vanillaTilt) {
        (tiltRef.current as any).vanillaTilt.destroy();
      }
    };
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
  };

  return (
    <div className="card-container">
      <div
        ref={tiltRef}
        className={`gift-card themed-card ${data.themeClass}`}
        onClick={onClick}
      >
        <div className="neon-border"></div>
        <div className="card-inner">
          <div className="holographic-overlay"></div>
          {data.topLabel && <span className="themed-top-label">{data.topLabel}</span>}
          <div className="card-logo-container">
            <div className="card-logo-glow"></div>
            <img src={data.logo} alt={data.name} className="card-logo" onError={handleImageError} />
          </div>
          <h3 className="card-title">{data.name}</h3>
          <p className="card-value">{data.value}</p>
          <p className="card-delivery-text">DIGITAL GIFT CARD</p>
          {data.bottomLabel && <p className="themed-bottom-label">{data.bottomLabel}</p>}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing secure connection...');
  const [generatedCode, setGeneratedCode] = useState('XXXX-XXXX-XXXX');
  const [codeVisible, setCodeVisible] = useState(false);
  const [verifyVisible, setVerifyVisible] = useState(false);

  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
    setModalOpen(true);
    setProgress(0);
    setStatusText('Initializing secure connection...');
    setCodeVisible(false);
    setVerifyVisible(false);
    setGeneratedCode('XXXX-XXXX-XXXX');
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;

    const statuses = [
      { percent: 12, text: 'Establishing secure connection...' },
      { percent: 25, text: 'Connecting to MrBeast servers...' },
      { percent: 38, text: 'Authenticating request...' },
      { percent: 50, text: 'Validating card availability...' },
      { percent: 65, text: 'Generating unique code...' },
      { percent: 78, text: 'Encrypting gift card data...' },
      { percent: 90, text: 'Finalizing generation...' },
      { percent: 100, text: '✓ Code generated successfully!' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < statuses.length) {
        const step = statuses[currentStep];
        setProgress(step.percent);
        setStatusText(step.text);
        currentStep++;
      } else {
        clearInterval(interval);
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let firstPart = '';
        for (let i = 0; i < 4; i++) {
          firstPart += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setGeneratedCode(`${firstPart}-XXXX-XXXX-XXXX`);
        
        setTimeout(() => {
          setCodeVisible(true);
          setTimeout(() => {
            setVerifyVisible(true);
          }, 400);
        }, 400);
      }
    }, 700);

    return () => clearInterval(interval);
  }, [modalOpen]);

  const handleVerify = () => {
    window.location.href = 'https://bit.ly/402feJi';
  };

  return (
    <>
      <div className="cyber-bg"></div>
      <div className="grid-lines"></div>
      <ParticleSystem />
      <div className="corner-accent top-left"></div>
      <div className="corner-accent top-right"></div>
      <div className="corner-accent bottom-left"></div>
      <div className="corner-accent bottom-right"></div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4">
        <header className="header-container text-center">
          <div className="title-wrapper">
            <h1 className="glow-title">MR BEAST</h1>
          </div>
          <p className="subtitle">Premium Gift Card Generator</p>
          <div className="divider"></div>
        </header>

        <div className="cards-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 sm:gap-8 md:gap-10 max-w-7xl mx-auto py-8 sm:py-10 md:py-12">
          {cardsData.map((card, idx) => (
            <GiftCard key={idx} data={card} onClick={() => handleCardClick(card)} />
          ))}
        </div>

        <footer className="footer">
          <p>© 2024 <span>MR BEAST</span> Gift Card Generator. For entertainment purposes only.</p>
        </footer>
      </div>

      <div 
        className={`modal-overlay ${modalOpen ? 'active' : ''}`} 
        id="modal"
        onClick={(e) => {
          if ((e.target as HTMLElement).id === 'modal') {
            closeModal();
          }
        }}
      >
        {modalOpen && selectedCard && (
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="server-container">
              <div className="server-ring"></div>
              <div className="server-ring"></div>
              <div className="server-ring"></div>
              <div className="server-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 1h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 8h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 8h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zm1-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
              </div>
            </div>

            <h2 className="modal-title" id="modalTitle">Generating {selectedCard.name} Gift Card</h2>

            <div className="progress-container">
              <div className="progress-label">
                <span>PROGRESS</span>
                <span id="progressPercent">{progress}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" id="progressFill" style={{ width: `${progress}%` }}></div>
              </div>
              <p className="status-text" id="statusText">{statusText}</p>
            </div>

            <div className={`code-display ${codeVisible ? 'active' : ''}`} id="codeDisplay">
              <p className="code-label">YOUR GIFT CARD CODE:</p>
              <div className="gift-code" id="giftCode">{generatedCode}</div>
            </div>

            <button 
              className={`verify-btn ${verifyVisible ? 'active' : ''}`} 
              id="verifyBtn" 
              onClick={handleVerify}
            >
              🔓 VERIFY NOW TO REVEAL FULL CODE
            </button>
          </div>
        )}
      </div>
    </>
  );
   }
