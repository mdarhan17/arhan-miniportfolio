import { useState, useEffect } from 'react';
import { Youtube, Facebook, Linkedin, Send, MessageSquare, Globe, Twitter, Mail, Instagram, Sheet, Sparkles } from 'lucide-react';
import './animations.css';
import profileImg from './assets/images/img_3058.jpg';


interface SocialLink {
  name: string;
  icon: JSX.Element;
  deepLink: string;
  fallbackUrl: string;
  color: string;
  isPrimary?: boolean;
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [footerLoaded, setFooterLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const footerTimer = setTimeout(() => setFooterLoaded(true), 1000);
    return () => clearTimeout(footerTimer);
  }, []);

  const socialLinks: SocialLink[] = [
    {
      name: 'YouTube',
      icon: <Youtube className="w-6 h-6" />,
      deepLink: 'youtube://www.youtube.com/@MdArhan',
      fallbackUrl: 'https://www.youtube.com/@MdArhan',
      color: 'from-red-600 to-red-500',
      isPrimary: true
    },
    {
      name: 'Portfolio Website',
      icon: <Globe className="w-6 h-6" />,
      deepLink: 'https://yourportfolio.com',
      fallbackUrl: 'https://yourportfolio.com',
      color: 'from-purple-600 to-pink-500'
    },
    {
    name: 'Gmail',
    icon: <Mail className="w-6 h-6" />,
    deepLink: 'googlegmail://co?to=mdarhanofficial@gmail.com',
    fallbackUrl: 'https://mail.google.com/mail/?view=cm&to=mdarhanofficial@gmail.com',
    color: 'from-red-500 to-red-400'
    },
    {
    name: 'Instagram',
    icon: <Instagram className="w-6 h-6" />,
    deepLink: 'instagram://user?username=arhanyay',
    fallbackUrl: 'https://www.instagram.com/arhanyay/',
    color: 'from-pink-600 to-purple-500'
    },
    {
    name: 'LinkedIn',
    icon: <Linkedin className="w-6 h-6" />,
    deepLink: 'linkedin://in/mdarhan',
    fallbackUrl: 'https://www.linkedin.com/in/mdarhan',
    color: 'from-blue-700 to-blue-600'
    },
    {
    name: 'Snapchat',
    icon: <Sparkles className="w-6 h-6" />,
    deepLink: 'snapchat://add/arhanyay',
    fallbackUrl: 'https://www.snapchat.com/add/arhanyay',
    color: 'from-yellow-400 to-yellow-300'
    },
    {
    name: 'Facebook',
    icon: <Facebook className="w-6 h-6" />,
    deepLink: 'fb://profile/MdArhan',
    fallbackUrl: 'https://www.facebook.com/MdArhan',
    color: 'from-blue-600 to-blue-500'
    },
    {
    name: 'Telegram',
    icon: <Send className="w-6 h-6" />,
    deepLink: 'tg://resolve?domain=arhanyay',
    fallbackUrl: 'https://t.me/arhanyay',
    color: 'from-sky-500 to-sky-400'
    },
    {
    name: 'WhatsApp',
    icon: <MessageSquare className="w-6 h-6" />,
    deepLink: 'whatsapp://send?phone=919731115171',
    fallbackUrl: 'https://wa.me/919731115171',
    color: 'from-green-600 to-green-500'
    },
    {
     name: 'X (Twitter)',
     icon: <Twitter className="w-6 h-6" />,
     deepLink: 'twitter://user?screen_name=arhanyay',
     fallbackUrl: 'https://x.com/arhanyay',
     color: 'from-slate-800 to-slate-700'
     },
    {
  name: 'Contact Form',
  icon: <Sheet className="w-6 h-6" />,
  deepLink: '',
  fallbackUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdOoXW_J2KwrB-roS1ywW6DXsCdWAR8Z_xVpPjIHoFWptyzQQ/viewform?usp=dialog',
  color: 'from-purple-600 to-indigo-500'
}


  ];

 const handleLinkClick = (link: SocialLink) => {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile && link.deepLink) {
    // 📱 Mobile → try app
    window.location.href = link.deepLink;

    // ⏱️ fallback to web
    setTimeout(() => {
      window.location.href = link.fallbackUrl;
    }, 1200);
  } else {
    // 💻 Desktop → web
    window.open(link.fallbackUrl, '_blank');
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="animated-bg"></div>

      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{ animationDelay: `${i * 0.3}s` }}></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-2xl">
        <div className={`profile-section ${isLoaded ? 'loaded' : ''}`}>
          <div className="profile-image-wrapper">
            <div className="profile-glow"></div>
            <div className="profile-image-container">
              <img
                src={profileImg}
                alt="Mohammed Arhan"
                className="profile-image"
              />
            </div>
          </div>

          <h1 className="profile-name">Mohammed Arhan</h1>
          <p className="profile-bio">
            MCA Graduate | Full Stack Developer | Creative Technologist
          </p>
          <p className="profile-tagline">Building modern web experiences</p>
        </div>

        <div className="links-container">
          {socialLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link)}
              className={`social-button ${isLoaded ? 'loaded' : ''} ${link.isPrimary ? 'primary' : ''}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className={`social-button-bg bg-gradient-to-r ${link.color}`}></div>
              <div className={`social-button-glow bg-gradient-to-r ${link.color}`}></div>
              <div className="social-button-content">
                <span className="social-button-icon">{link.icon}</span>
                <span className="social-button-text">{link.name}</span>
              </div>
            </button>
          ))}
        </div>

        <footer className={`footer-text ${footerLoaded ? 'loaded' : ''}`}>
          Let's connect, collaborate, and create impact
          <div className={`footer-underline ${footerLoaded ? 'loaded' : ''}`}></div>
        </footer>
      </div>
    </div>
  );
}

export default App;
